# AddDocusignEnvelopesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emailSubject** | **string** | The subject line of the email message that is sent to all recipients | [optional] [default to undefined]
**environment** | [**DocusignEnvironment**](DocusignEnvironment.md) |  | [optional] [default to undefined]
**status** | [**DocusignEnvelopeStatus**](DocusignEnvelopeStatus.md) |  | [optional] [default to undefined]
**signers** | [**Array&lt;DocusignSigner&gt;**](DocusignSigner.md) | List of DocuSign Signers | [optional] [default to undefined]
**inpersonSigners** | [**Array&lt;DocusignInpersonSigner&gt;**](DocusignInpersonSigner.md) | List of DocuSign Inperson Signers | [optional] [default to undefined]
**notification** | [**DocusignNotification**](DocusignNotification.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AddDocusignEnvelopesRequest } from 'formkiq-client-sdk-typescript';

const instance: AddDocusignEnvelopesRequest = {
    emailSubject,
    environment,
    status,
    signers,
    inpersonSigners,
    notification,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
