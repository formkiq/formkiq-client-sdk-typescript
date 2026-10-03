# DocusignReminderRecipient


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipientId** | **string** | Selected DocuSign signer ID from the request | [default to undefined]
**status** | **string** | accepted means DocuSign accepted the reminder request for this recipient, not confirmed delivery. failed means DocuSign returned a definitive recipient-level failure. | [default to undefined]
**message** | **string** | Explanation of a recipient-level failure, when available | [optional] [default to undefined]

## Example

```typescript
import { DocusignReminderRecipient } from 'formkiq-client-sdk-typescript';

const instance: DocusignReminderRecipient = {
    recipientId,
    status,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
