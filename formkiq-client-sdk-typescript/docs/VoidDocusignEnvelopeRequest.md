# VoidDocusignEnvelopeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**voidedReason** | **string** | Non-blank, recipient-facing explanation for voiding the DocuSign envelope. At most 200 characters, including spaces and line breaks; longer reasons are rejected without truncation. | [default to undefined]

## Example

```typescript
import { VoidDocusignEnvelopeRequest } from 'formkiq-client-sdk-typescript';

const instance: VoidDocusignEnvelopeRequest = {
    voidedReason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
