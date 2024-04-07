/* eslint-disable */
type Attachments = {
    platformRelease: string;
    tests: string;
    failedTitles: string;
    env: string;
    secondMessageOfFailures: string;
    linkToReport: string;
    passes: number;
    failures: number;
    skipped: number;
    pending: number;
}

export function buildBlocks (input: Array<['section', string]>) {
  const blocks = [];
  input.forEach(tuple => {
    blocks.push({
      type: tuple[0],
      text: {
        type: 'mrkdwn',
        text: tuple[1],
      }
    });
  });
  return blocks;
}

export function buildAttachments (input: Attachments) {

  // Default any undefines.
  if (isNaN(input.skipped)) input.skipped = 0;
  if (isNaN(input.failures)) input.failures = 0;
  if (isNaN(input.pending)) input.pending = 0;

  const attachments: any = {

    // Extra Info Section
    blocks: [
      {
        type: 'section',
        fields: [
          {
            type:'mrkdwn',
            text: '*Platform*\n' + input.platformRelease
          },
          {
            type:'mrkdwn',
            text: '*Tests*\n' + input.tests
          },
        ]
      },
      {
        type: 'section',
        fields: [
          {
            type:'mrkdwn',
            text: '*Environment*\n' + input.env
          }
        ]
      }
    ]
  };

  // Add failed tests block to the block object.
  if (input.failedTitles.length > 0) {
    attachments.blocks.push({
      'type': 'divider'
    });
    attachments.blocks.push({
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: '*Failing Tests (This list excludes skipped tests):*\n' + input.failedTitles
      }
    });

    // If there's no second message for extra failures, put the button here.
    if (input.secondMessageOfFailures.length <= 0) {
      attachments.blocks.push({
        type: 'actions',
        elements: [{
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Test Results'
          },
          url: `${input.linkToReport}`
        }]
      });
    } 
  } else {
    attachments.blocks.push({
      type: 'actions',
      elements: [{
        type: 'button',
        text: {
          type: 'plain_text',
          text: 'Test Results'
        },
        url: `${input.linkToReport}`
      }]
    });
  }

  return [
    {
      'fallback': 'Oopsie, error occured.',
      'color': '#23c552',
      'author_name': input.passes + ' Passed'
    },
    {
      'fallback': 'Oopsie, error occured.',
      'color': '#f84f31',
      'author_name': input.failures + ' Failed'
    },
    {
      'fallback': 'Oopsie, error occured.',
      'color': '#f6f6f6',
      'author_name': input.skipped + ' Skipped'
    },
    {
      'fallback': 'Oopsie, error occured.',
      'color': '#f6f6f6',
      'author_name': input.pending + ' Pending'
    },
    attachments
  ];
}

export function secondSetOfMessagesAttachments (secondMessageOfFailures: string, linkToReport: string) {
  return [
    {
      blocks: [

        // Extra fails
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: secondMessageOfFailures
          }
        },
        {
          type: 'actions',
          elements: [{
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Test Results'
            },
            url: `${linkToReport}`
          }]
        }
      ]
    }
  ];
}