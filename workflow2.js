{
  "nodes": [
    {
      "parameters": {
        "pollTimes": {
          "item": [
            {
              "mode": "everyMinute"
            }
          ]
        },
        "triggerOn": "specificFolder",
        "folderToWatch": {
          "__rl": true,
          "value": "1spcvJsOO3r7XX7Ni0wwN-uqD6ly0U1fh",
          "mode": "list",
          "cachedResultName": "Asaar-e-haideri",
          "cachedResultUrl": "https://drive.google.com/drive/folders/1spcvJsOO3r7XX7Ni0wwN-uqD6ly0U1fh"
        },
        "event": "fileCreated",
        "options": {}
      },
      "type": "n8n-nodes-base.googleDriveTrigger",
      "typeVersion": 1,
      "position": [
        0,
        0
      ],
      "id": "2c631f98-bc0b-420e-837b-4d8a59c92f87",
      "name": "Google Drive Trigger",
      "credentials": {
        "googleDriveOAuth2Api": {
          "id": "zFVzvDejL41KpFBs",
          "name": "Google Drive OAuth2 API"
        }
      }
    },
    {
      "parameters": {
        "operation": "download",
        "fileId": {
          "__rl": true,
          "value": "={{ $json.id }}",
          "mode": "id"
        },
        "options": {}
      },
      "type": "n8n-nodes-base.googleDrive",
      "typeVersion": 3,
      "position": [
        224,
        0
      ],
      "id": "3f3c093d-111b-43b7-a5ce-fce4974b5a62",
      "name": "Download file",
      "credentials": {
        "googleDriveOAuth2Api": {
          "id": "zFVzvDejL41KpFBs",
          "name": "Google Drive OAuth2 API"
        }
      }
    },
    {
      "parameters": {
        "mode": "insert",
        "tableName": {
          "__rl": true,
          "value": "documents",
          "mode": "list",
          "cachedResultName": "documents"
        },
        "options": {
          "queryName": "match_documents"
        }
      },
      "type": "@n8n/n8n-nodes-langchain.vectorStoreSupabase",
      "typeVersion": 1.3,
      "position": [
        400,
        0
      ],
      "id": "8a216ec4-3ee3-485d-982e-17b34858513a",
      "name": "Supabase Vector Store",
      "credentials": {
        "supabaseApi": {
          "id": "6fxlvbPWkQiXHNbz",
          "name": "Supabase account"
        }
      }
    },
    {
      "parameters": {
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.embeddingsOpenAi",
      "typeVersion": 1.2,
      "position": [
        336,
        176
      ],
      "id": "9324318b-02a4-44c9-9393-367e27d3a39a",
      "name": "Embeddings OpenAI",
      "credentials": {
        "openAiApi": {
          "id": "Z9903QU1Zs2i0JYy",
          "name": "n8n free OpenAI API credits"
        }
      }
    },
    {
      "parameters": {
        "dataType": "binary",
        "options": {
          "splitPages": true
        }
      },
      "type": "@n8n/n8n-nodes-langchain.documentDefaultDataLoader",
      "typeVersion": 1.1,
      "position": [
        576,
        208
      ],
      "id": "950f69b9-5d54-4622-9c18-c1b091722240",
      "name": "Default Data Loader"
    },
    {
      "parameters": {
        "options": {
          "systemMessage": "=#overview\n\nYou are a helpful intelligent information extracter that answer any queries\n\n##tools\nvector_store - this will ALWAYS use when answering a question that the user mighg have\n\n##rules\n-you must always pull information from vector store \n-you answer should be concise and to the point"
        }
      },
      "type": "@n8n/n8n-nodes-langchain.agent",
      "typeVersion": 3.1,
      "position": [
        224,
        368
      ],
      "id": "ab97f199-5002-4380-b920-b12cc1a8e000",
      "name": "AI Agent"
    },
    {
      "parameters": {
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.chatTrigger",
      "typeVersion": 1.4,
      "position": [
        0,
        368
      ],
      "id": "506f9336-e0df-448c-b989-2e85778baf33",
      "name": "When chat message received",
      "webhookId": "e0d8b428-718d-4ac4-ba68-589ebf4efb6e"
    },
    {
      "parameters": {
        "model": {
          "__rl": true,
          "value": "gpt-4.1-mini",
          "mode": "list",
          "cachedResultName": "gpt-4.1-mini"
        },
        "builtInTools": {},
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
      "typeVersion": 1.3,
      "position": [
        96,
        576
      ],
      "id": "a9bffe1c-a3c7-4544-9f16-4425e440c10b",
      "name": "OpenAI Chat Model",
      "credentials": {
        "openAiApi": {
          "id": "Z9903QU1Zs2i0JYy",
          "name": "n8n free OpenAI API credits"
        }
      }
    },
    {
      "parameters": {},
      "type": "@n8n/n8n-nodes-langchain.memoryBufferWindow",
      "typeVersion": 1.4,
      "position": [
        240,
        576
      ],
      "id": "51f7a19d-88b8-470c-b21a-73ea8013863d",
      "name": "Simple Memory"
    },
    {
      "parameters": {
        "mode": "retrieve-as-tool",
        "toolDescription": "work with data from superbase vector database",
        "tableName": {
          "__rl": true,
          "value": "documents",
          "mode": "list",
          "cachedResultName": "documents"
        },
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.vectorStoreSupabase",
      "typeVersion": 1.3,
      "position": [
        576,
        368
      ],
      "id": "e6fa3d28-1389-4b84-9896-f6c1c779de52",
      "name": "Supabase Vector Store1",
      "credentials": {
        "supabaseApi": {
          "id": "6fxlvbPWkQiXHNbz",
          "name": "Supabase account"
        }
      }
    }
  ],
  "connections": {
    "Google Drive Trigger": {
      "main": [
        [
          {
            "node": "Download file",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Download file": {
      "main": [
        [
          {
            "node": "Supabase Vector Store",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Embeddings OpenAI": {
      "ai_embedding": [
        [
          {
            "node": "Supabase Vector Store",
            "type": "ai_embedding",
            "index": 0
          },
          {
            "node": "Supabase Vector Store1",
            "type": "ai_embedding",
            "index": 0
          }
        ]
      ]
    },
    "Default Data Loader": {
      "ai_document": [
        [
          {
            "node": "Supabase Vector Store",
            "type": "ai_document",
            "index": 0
          }
        ]
      ]
    },
    "When chat message received": {
      "main": [
        [
          {
            "node": "AI Agent",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "OpenAI Chat Model": {
      "ai_languageModel": [
        [
          {
            "node": "AI Agent",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "Simple Memory": {
      "ai_memory": [
        [
          {
            "node": "AI Agent",
            "type": "ai_memory",
            "index": 0
          }
        ]
      ]
    },
    "Supabase Vector Store1": {
      "ai_tool": [
        [
          {
            "node": "AI Agent",
            "type": "ai_tool",
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
