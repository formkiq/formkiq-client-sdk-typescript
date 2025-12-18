# DocusignInpersonSigner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hostEmail** | **string** | The email of the signing host | [default to undefined]
**hostName** | **string** | The name of the signing host | [default to undefined]
**signerName** | **string** | The full legal name of a signer | [default to undefined]
**signerEmail** | **string** | The in-person signer\&#39;s email address | [optional] [default to undefined]
**recipientId** | **string** | A reference used to map recipients to other objects, such as specific document tabs. | [optional] [default to undefined]
**routingOrder** | **string** | Specifies the routing order of the recipient in the envelope. | [optional] [default to undefined]
**suppressEmails** | **string** | When true, email notifications are suppressed for the recipient, and they must access envelopes and documents from their Docusign inbox. | [optional] [default to undefined]
**tabs** | [**DocusignSigningTabs**](DocusignSigningTabs.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DocusignInpersonSigner } from 'formkiq-client-sdk-typescript';

const instance: DocusignInpersonSigner = {
    hostEmail,
    hostName,
    signerName,
    signerEmail,
    recipientId,
    routingOrder,
    suppressEmails,
    tabs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
