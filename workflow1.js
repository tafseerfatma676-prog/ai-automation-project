{
  "nodes": [
    {
      "parameters": {
        "path": "1850f583-cba8-4827-a84b-ce75502439bf",
        "options": {}
      },
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 2.1,
      "position": [
        -64,
        -160
      ],
      "id": "d71e00a9-45ab-4b0f-b124-3e57913c1086",
      "name": "Webhook",
      "webhookId": "1850f583-cba8-4827-a84b-ce75502439bf",
      "retryOnFail": true,
      "alwaysOutputData": false
    },
    {
      "parameters": {
        "fromEmail": "tafseerfatma676@gmail.com",
        "toEmail": "={{ $json.body.email }}",
        "subject": "thank you for  your feed back",
        "emailFormat": "text",
        "text": "=Hi {{ $json.body.name }} ,\n\nThank you for reaching out. We will connect with you in a few minutes.\n\nBest regards,\nalbuka",
        "options": {}
      },
      "type": "n8n-nodes-base.emailSend",
      "typeVersion": 2.1,
      "position": [
        208,
        0
      ],
      "id": "1bb8e0ad-9ac1-47e7-8117-68e558e8c76b",
      "name": "Send an Email",
      "webhookId": "e037ff70-4b44-41a7-92ac-52f5c11e03ad",
      "retryOnFail": true,
      "credentials": {
        "smtp": {
          "id": "xZ01pFpONHtny5Ev",
          "name": "SMTP account"
        }
      }
    },
    {
      "parameters": {
        "operation": "append",
        "documentId": {
          "__rl": true,
          "value": "1A3C83kv-TVGn6n_u-At8_EoyM2Cjzt75xF1n1ptEF44",
          "mode": "list",
          "cachedResultName": "employees data",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1A3C83kv-TVGn6n_u-At8_EoyM2Cjzt75xF1n1ptEF44/edit?usp=drivesdk"
        },
        "sheetName": {
          "__rl": true,
          "value": "gid=0",
          "mode": "list",
          "cachedResultName": "Sheet1",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1A3C83kv-TVGn6n_u-At8_EoyM2Cjzt75xF1n1ptEF44/edit#gid=0"
        },
        "columns": {
          "mappingMode": "defineBelow",
          "value": {
            "Name": "={{ $json.body.name }}",
            "Email": "={{ $json.body.email }}",
            "Satisfaction": "={{ $json.body['Overall, how satisfied were you with the Finance Conference?'] }}",
            "Quality Relevance": "={{ $json.body['Please rate the quality and relevance of the speaker presentations on a scale of 1 to 5.'] }}",
            "Valuable Thing": "={{ $json.body['Which topics were most valuable to your professional development? (Select all that apply)'] }}",
            "Suggestion": "={{ $json.body['Do you have any further suggestions or comments regarding the conference format or content for next year?'] }}",
            "Submitted Time": "={{ $json.body.submitted_at }}"
          },
          "matchingColumns": [],
          "schema": [
            {
              "id": "Name",
              "displayName": "Name",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "Email",
              "displayName": "Email",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "Satisfaction",
              "displayName": "Satisfaction",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "Quality Relevance",
              "displayName": "Quality Relevance",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "Valuable Thing",
              "displayName": "Valuable Thing",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "Suggestion",
              "displayName": "Suggestion",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "Submitted Time",
              "displayName": "Submitted Time",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            }
          ],
          "attemptToConvertTypes": false,
          "convertFieldsToString": false
        },
        "options": {}
      },
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.7,
      "position": [
        208,
        -208
      ],
      "id": "01d69bc4-3366-48d1-bb4f-ffeced6f5d46",
      "name": "Append row in sheet",
      "credentials": {
        "googleSheetsOAuth2Api": {
          "id": "03ZnWGzs0Jr4Wr2P",
          "name": "Google Sheets OAuth2 API"
        }
      }
    }
  ],
  "connections": {
    "Webhook": {
      "main": [
        [
          {
            "node": "Append row in sheet",
            "type": "main",
            "index": 0
          },
          {
            "node": "Send an Email",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "pinData": {},
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "2fbd1b07dfbe8cd1222e6609773afe7954f5008754687e8aeaca1d6046a35860"
  }
}
