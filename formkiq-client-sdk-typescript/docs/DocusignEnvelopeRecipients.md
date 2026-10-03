# DocusignEnvelopeRecipients

Recipient information returned by DocuSign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipientCount** | **string** | Number of recipients, represented as a DocuSign string | [optional] [default to undefined]
**currentRoutingOrder** | **string** | Current routing step. Match this to recipient routingOrder and inspect recipient status to identify outstanding actions. Multiple recipients can share a routing order. Also check envelope status before treating a recipient as awaiting action. | [optional] [default to undefined]
**signers** | [**Array&lt;DocusignEnvelopeRecipient&gt;**](DocusignEnvelopeRecipient.md) |  | [optional] [default to undefined]
**inPersonSigners** | [**Array&lt;DocusignEnvelopeRecipient&gt;**](DocusignEnvelopeRecipient.md) |  | [optional] [default to undefined]
**agents** | [**Array&lt;DocusignEnvelopeRecipient&gt;**](DocusignEnvelopeRecipient.md) |  | [optional] [default to undefined]
**editors** | [**Array&lt;DocusignEnvelopeRecipient&gt;**](DocusignEnvelopeRecipient.md) |  | [optional] [default to undefined]
**intermediaries** | [**Array&lt;DocusignEnvelopeRecipient&gt;**](DocusignEnvelopeRecipient.md) |  | [optional] [default to undefined]
**carbonCopies** | [**Array&lt;DocusignEnvelopeRecipient&gt;**](DocusignEnvelopeRecipient.md) |  | [optional] [default to undefined]
**certifiedDeliveries** | [**Array&lt;DocusignEnvelopeRecipient&gt;**](DocusignEnvelopeRecipient.md) |  | [optional] [default to undefined]
**witnesses** | [**Array&lt;DocusignEnvelopeRecipient&gt;**](DocusignEnvelopeRecipient.md) |  | [optional] [default to undefined]
**seals** | [**Array&lt;DocusignEnvelopeRecipient&gt;**](DocusignEnvelopeRecipient.md) |  | [optional] [default to undefined]
**notaries** | [**Array&lt;DocusignEnvelopeRecipient&gt;**](DocusignEnvelopeRecipient.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DocusignEnvelopeRecipients } from 'formkiq-client-sdk-typescript';

const instance: DocusignEnvelopeRecipients = {
    recipientCount,
    currentRoutingOrder,
    signers,
    inPersonSigners,
    agents,
    editors,
    intermediaries,
    carbonCopies,
    certifiedDeliveries,
    witnesses,
    seals,
    notaries,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
