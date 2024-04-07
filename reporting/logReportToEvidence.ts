import * as fs from 'fs';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const testStateCorrectionMap = {
  'passed': 'Pass',
  'failed': 'Fail',
  'skipped': 'Skipped',
  'pending': 'Skipped'
};

async function parseResults (report: ReportSchema, brand: string) {
  const startDate = new Date(report.stats.start);
  const isSuitePassing = report.stats.failures == 0;
  const testRecords: Array<{ testName: string; testResult: string }> = [];

  // I heard you like incursion.
  report.results.forEach(result => {
    result.suites.forEach(suite => {
      suite.tests.forEach(test => {
        const error = test.err?.message;
        const entry = {
          testName: test.fullTitle,
          testResult: testStateCorrectionMap[test.state.toLowerCase()]
        };
        entry['error'] = error;
        testRecords.push(entry);
      });
    });
  });

  const response = await axios.request({
    validateStatus: () => true,
    method: 'POST',
    url: 'https://automation-evidence-api.boohoo.com/?request=tests',
    headers: {
      'x-api-key': process.env.EVIDENCE_API_KEY
    },
    data: {
      systemInTest: 'web_' + brand.toLowerCase(),
      dateRan: startDate.getTime() / 1000,
      executor: 'TeamCity',
      records: testRecords,
      result: isSuitePassing ? 'Pass' : 'Fail',
      message: `Test run on ${startDate.toDateString()} for ${brand}.`
    }
  });

  if (response.status != 200) {
    throw new Error(`Failed: ${response.statusText} - with ${response.data as string}`);
  }
  console.log(response.statusText, response.data);
}

async function main () {
  const arg = process.argv.slice(2)[0];
  try {
    const file = fs.readFileSync(`config/${arg}/results/results.json`, 'utf-8');
    const report = JSON.parse(file);
    await parseResults(report, arg);
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.error('No file found, or not brand was specified.');
    } else {
      console.log(e);
    }
  }
}

main();