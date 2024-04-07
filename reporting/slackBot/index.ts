/* eslint-disable */
import { App } from '@slack/bolt';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { buildAttachments, buildBlocks, secondSetOfMessagesAttachments } from './blockBuilder';

dotenv.config();
const brand = process.argv.slice(2)[0];

// Build new app.
const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  clientId: process.env.SLACK_CLIENT_ID,
  clientSecret: process.env.SLACK_CLIENT_SECRET,
  stateSecret: process.env.SLACK_STATE_SECRET,
  scopes: ['channels:read', 'channels:write', 'channels:join', 'chat:write', 'channels:join', 'chat:write.customize']
});

// Start the report.
async function GenerateAndPostReport (report: any) {

  // Store reference link.
  const linkToReport = 'https://cloud.cypress.io/projects/i6d3n8/runs';

  // Find timings.
  const currentDate = new Date();

  // Get result statistics.
  const { tests, passes, failures, skipped, pending } = report.stats;

  const platformRelease = process.env.PLATFORM || 'Generic Test Run';
  const env = 'Staging';

  // Failures
  let failedTitles = '';
  let secondMessageOfFailures = '';
  let i = 1;

  // Find all Tests inside Suites
  const recursive = arr => {
    arr.forEach(suite => {
      if (suite.suites) {
        recursive(suite.suites);
      }
      
      if (suite.tests) {
        suite.tests.forEach(test => {
          if (test.state == 'failed') {
            const testName: string = test.fullTitle;

            // Check if adding the failure would push it over 2500 characters.
            if ((failedTitles + `${i}. ${testName}\n`).length > 2500) {
              secondMessageOfFailures = secondMessageOfFailures + `${i}. ${testName}\n`;
            } else {

              // Apply failed to the failure list.
              failedTitles = failedTitles + `${i}. ${testName}\n`;
            }
            i++;
          }
        });
      }
    });
  };

  // Parse all Suites for Tests
  report.results.forEach(result => {
    recursive(result.suites);
  });

  const attachmentBlocks: any = buildAttachments({
    platformRelease,
    tests,
    failedTitles,
    env,
    secondMessageOfFailures,
    linkToReport,
    passes,
    failures,
    skipped,
    pending,
  });

  await app.start(process.env.PORT || 3000);

  try {

    if (isNaN(passes) || isNaN(failures)) {
      await app.client.chat.postMessage({
        token: process.env.SLACK_BOT_OAUTH,
        channel: process.env.SLACK_CHANNEL,
        text: `There has been an issue generating a Slack report for ${brand.toUpperCase()}.\nTo find more information, log into the TeamCity server and check the build artefacts.`,
      });
      return;
    }

    // Post message
    await app.client.chat.postMessage({
      token: process.env.SLACK_BOT_OAUTH,
      channel: process.env.SLACK_CHANNEL,
      text: `Web build detected for ${passes} out of ${tests} tests passed.`,

      // Title block.
      blocks: buildBlocks([
        ['section', `Web build - ${brand.toUpperCase()} - Test Summary\n*${currentDate.toUTCString()}*`]
      ]),

      // Pass and Fail Results
      attachments: attachmentBlocks
    });

    // Dont post if there's no messages to post.
    if (secondMessageOfFailures.length > 0) {
      await app.client.chat.postMessage({
        token: process.env.SLACK_BOT_OAUTH,
        channel: process.env.SLACK_CHANNEL,
        text: 'Continued list of failed tests (This list excludes skipped tests)',
        blocks: [],
        attachments: secondSetOfMessagesAttachments(secondMessageOfFailures, linkToReport)
      });
    }

  } catch (e) {
    console.error(e); // We still want to log the error, but stop the bot in the process.
  } finally {
    app.stop();
  }
}

async function StartUpMessage (tag: string) {
  await app.start(process.env.PORT || 3000);
  await app.client.chat.postMessage({
    token: process.env.SLACK_BOT_OAUTH,
    channel: process.env.SLACK_CHANNEL,
    text: `A web automation build for ${tag} has started, expect reports soon.`,
  });
  app.stop();
}

(async function () {
  const arg = process.argv.slice(2)[0];
  const tag = process.argv.slice(2)[1];

  if (arg === 'startup') {
    if (tag) {
      StartUpMessage(tag);
      return;
    } else {
      throw new Error('No tag was specified, try using `ts-node reporting/slackBot.ts startup TagName`');
    }
  }

  // Get the file first.
  try {
    const file = fs.readFileSync(`config/${arg}/results/results.json`, 'utf-8');
    const report = JSON.parse(file);
    GenerateAndPostReport(report);
  } catch {
    console.error('No file found, or not brand was specified.');
  }
})();

