# DocusignConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | **string** | Docusign UserId | [optional] [default to undefined]
**integrationKey** | **string** | Docusign Integration Key or ClientId | [optional] [default to undefined]
**rsaPrivateKey** | **string** | Docusign Rsa Private Key | [optional] [default to undefined]
**hmacSignature** | **string** | Enabled security with Docusign Connect using HMAC keys. When enabled these keys are known only by Docusign and your app, and will be used to sign all Connect messages sent from your Docusign account to your application. | [optional] [default to undefined]

## Example

```typescript
import { DocusignConfig } from 'formkiq-ts-client';

const instance: DocusignConfig = {
    userId,
    integrationKey,
    rsaPrivateKey,
    hmacSignature,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
