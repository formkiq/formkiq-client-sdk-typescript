# DocusignEnvelopeRecipient

Recipient fields returned by DocuSign. Fields depend on the recipient type; additional type-specific fields are preserved. This response schema is separate from FormKiQ\'s envelope creation request schemas.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipientId** | **string** |  | [optional] [default to undefined]
**recipientIdGuid** | **string** |  | [optional] [default to undefined]
**recipientType** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**signerName** | **string** |  | [optional] [default to undefined]
**signerEmail** | **string** |  | [optional] [default to undefined]
**hostName** | **string** |  | [optional] [default to undefined]
**hostEmail** | **string** |  | [optional] [default to undefined]
**routingOrder** | **string** |  | [optional] [default to undefined]
**status** | **string** | Recipient status reported by DocuSign | [optional] [default to undefined]
**sentDateTime** | **string** |  | [optional] [default to undefined]
**deliveredDateTime** | **string** |  | [optional] [default to undefined]
**signedDateTime** | **string** |  | [optional] [default to undefined]
**declinedDateTime** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { DocusignEnvelopeRecipient } from 'formkiq-client-sdk-typescript';

const instance: DocusignEnvelopeRecipient = {
    recipientId,
    recipientIdGuid,
    recipientType,
    name,
    email,
    signerName,
    signerEmail,
    hostName,
    hostEmail,
    routingOrder,
    status,
    sentDateTime,
    deliveredDateTime,
    signedDateTime,
    declinedDateTime,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
