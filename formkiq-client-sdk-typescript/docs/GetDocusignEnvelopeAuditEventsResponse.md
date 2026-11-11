# GetDocusignEnvelopeAuditEventsResponse

DocuSign\'s envelope audit events response returned unchanged. Additional fields at every level are preserved. Optional collections and fields are returned only when supplied by DocuSign; no events are synthesized.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auditEvents** | [**Array&lt;DocusignEnvelopeAuditEvent&gt;**](DocusignEnvelopeAuditEvent.md) | Envelope audit events recorded by DocuSign | [optional] [default to undefined]
**paymentEvents** | [**Array&lt;DocusignEnvelopePaymentEvent&gt;**](DocusignEnvelopePaymentEvent.md) | Payment events returned by DocuSign, when present | [optional] [default to undefined]

## Example

```typescript
import { GetDocusignEnvelopeAuditEventsResponse } from 'formkiq-client-sdk-typescript';

const instance: GetDocusignEnvelopeAuditEventsResponse = {
    auditEvents,
    paymentEvents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
