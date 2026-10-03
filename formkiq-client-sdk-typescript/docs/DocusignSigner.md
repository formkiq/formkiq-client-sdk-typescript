# DocusignSigner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of Signer | [default to undefined]
**email** | **string** | Email of Signer | [optional] [default to undefined]
**clientUserId** | **string** | Specifies unique identifier for signer | [optional] [default to undefined]
**embeddedRecipientStartUrl** | **string** | Enables a Docusign signing invitation while retaining embedded signing through clientUserId. Requires clientUserId. When omitted, the existing signing behavior is unchanged. Hybrid recipients do not receive automated reminders or expiration notifications. | [optional] [default to undefined]
**recipientId** | **string** | A reference used to map recipients to other objects, such as specific document tabs. | [optional] [default to undefined]
**routingOrder** | **string** | Specifies the routing order of the recipient in the envelope. | [optional] [default to undefined]
**suppressEmails** | **string** | When true, email notifications are suppressed for the recipient, and they must access envelopes and documents from their Docusign inbox. | [optional] [default to undefined]
**readyToSignNotification** | [**DocusignSignerReadyToSignNotification**](DocusignSignerReadyToSignNotification.md) |  | [optional] [default to undefined]
**tabs** | [**DocusignSigningTabs**](DocusignSigningTabs.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DocusignSigner } from 'formkiq-client-sdk-typescript';

const instance: DocusignSigner = {
    name,
    email,
    clientUserId,
    embeddedRecipientStartUrl,
    recipientId,
    routingOrder,
    suppressEmails,
    readyToSignNotification,
    tabs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
