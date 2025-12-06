# SiteConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxContentLengthBytes** | **string** | Set Maximum Document Content Length in Bytes | [optional] [default to undefined]
**maxDocuments** | **string** | Set Maximum number of Documents allowed | [optional] [default to undefined]
**maxWebhooks** | **string** | Set Maximum number of Webhooks allowed | [optional] [default to undefined]
**ocr** | [**OcrConfig**](OcrConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SiteConfig } from 'formkiq-ts-client';

const instance: SiteConfig = {
    maxContentLengthBytes,
    maxDocuments,
    maxWebhooks,
    ocr,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
