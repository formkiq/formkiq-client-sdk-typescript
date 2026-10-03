# GetDocusignEnvelopeResponse

The DocuSign Get Envelope response with include=recipients, returned without enrichment. Additional DocuSign fields are preserved. Optional fields are returned only when supplied by DocuSign. A completed envelope does not confirm that FormKiQ has stored the signed PDF.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**envelopeId** | **string** | DocuSign envelope identifier | [optional] [default to undefined]
**status** | **string** | Envelope status reported by DocuSign, such as created, sent, delivered, signed, completed, declined, or voided. | [optional] [default to undefined]
**statusChangedDateTime** | **string** | Time DocuSign reports the envelope status changed | [optional] [default to undefined]
**sentDateTime** | **string** |  | [optional] [default to undefined]
**deliveredDateTime** | **string** |  | [optional] [default to undefined]
**completedDateTime** | **string** |  | [optional] [default to undefined]
**declinedDateTime** | **string** |  | [optional] [default to undefined]
**voidedDateTime** | **string** |  | [optional] [default to undefined]
**recipients** | [**DocusignEnvelopeRecipients**](DocusignEnvelopeRecipients.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetDocusignEnvelopeResponse } from 'formkiq-client-sdk-typescript';

const instance: GetDocusignEnvelopeResponse = {
    envelopeId,
    status,
    statusChangedDateTime,
    sentDateTime,
    deliveredDateTime,
    completedDateTime,
    declinedDateTime,
    voidedDateTime,
    recipients,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
