# GetConfigurationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chatGptApiKey** | **string** | ChatGPT API Key | [optional] [default to undefined]
**maxContentLengthBytes** | **string** | Set Maximum Document Content Length in Bytes | [optional] [default to undefined]
**maxDocuments** | **string** | Set Maximum number of Documents allowed | [optional] [default to undefined]
**maxWebhooks** | **string** | Set Maximum number of Webhooks allowed | [optional] [default to undefined]
**notificationEmail** | **string** | Email address to use for notifications (Must be verified identity created in AWS SES) | [optional] [default to undefined]
**ocr** | [**OcrConfig**](OcrConfig.md) |  | [optional] [default to undefined]
**google** | [**GoogleConfig**](GoogleConfig.md) |  | [optional] [default to undefined]
**docusign** | [**DocusignConfig**](DocusignConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetConfigurationResponse } from 'formkiq-ts-client';

const instance: GetConfigurationResponse = {
    chatGptApiKey,
    maxContentLengthBytes,
    maxDocuments,
    maxWebhooks,
    notificationEmail,
    ocr,
    google,
    docusign,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
