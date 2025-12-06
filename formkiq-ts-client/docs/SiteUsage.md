# SiteUsage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentCount** | **number** | The number of documents in the site (only tracked when using MaxDocuments) | [optional] [default to undefined]
**ocrTransactionCount** | **number** | The number of ocr tx requests in the site (only tracked when using OCR MaxTransactions) | [optional] [default to undefined]

## Example

```typescript
import { SiteUsage } from 'formkiq-ts-client';

const instance: SiteUsage = {
    documentCount,
    ocrTransactionCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
