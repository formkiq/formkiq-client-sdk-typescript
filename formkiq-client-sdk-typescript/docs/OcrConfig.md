# OcrConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxPagesPerTransaction** | **number** | Max number of OCR pages (-1 for unlimited) | [optional] [default to undefined]
**maxTransactions** | **number** | Max number of OCR actions that can be created (-1 for unlimited) | [optional] [default to undefined]

## Example

```typescript
import { OcrConfig } from 'formkiq-client-sdk-typescript';

const instance: OcrConfig = {
    maxPagesPerTransaction,
    maxTransactions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
