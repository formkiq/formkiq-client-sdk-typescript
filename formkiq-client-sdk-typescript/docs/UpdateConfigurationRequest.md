# UpdateConfigurationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branding** | [**BrandingConfig**](BrandingConfig.md) |  | [optional] [default to undefined]
**chatGptApiKey** | **string** | ChatGPT Api Key | [optional] [default to undefined]
**maxContentLengthBytes** | **string** | Set Maximum Document Content Length in Bytes | [optional] [default to undefined]
**maxDocuments** | **string** | Set Maximum number of Documents allowed | [optional] [default to undefined]
**maxWebhooks** | **string** | Set Maximum number of Webhooks allowed | [optional] [default to undefined]
**notificationEmail** | **string** | Deprecated. Use notification.email instead. Email address to use for SES notifications. | [optional] [default to undefined]
**notification** | [**NotificationConfig**](NotificationConfig.md) |  | [optional] [default to undefined]
**document** | [**DocumentConfig**](DocumentConfig.md) |  | [optional] [default to undefined]
**ocr** | [**OcrConfig**](OcrConfig.md) |  | [optional] [default to undefined]
**google** | [**GoogleConfig**](GoogleConfig.md) |  | [optional] [default to undefined]
**docusign** | [**DocusignConfig**](DocusignConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateConfigurationRequest } from 'formkiq-client-sdk-typescript';

const instance: UpdateConfigurationRequest = {
    branding,
    chatGptApiKey,
    maxContentLengthBytes,
    maxDocuments,
    maxWebhooks,
    notificationEmail,
    notification,
    document,
    ocr,
    google,
    docusign,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
