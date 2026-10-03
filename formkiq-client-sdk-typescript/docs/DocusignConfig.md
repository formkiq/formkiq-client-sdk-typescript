# DocusignConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | [**DocusignEnvironment**](DocusignEnvironment.md) |  | [optional] [default to undefined]
**userId** | **string** | Docusign UserId | [optional] [default to undefined]
**integrationKey** | **string** | Docusign Integration Key or ClientId | [optional] [default to undefined]
**rsaPrivateKey** | **string** | Docusign Rsa Private Key | [optional] [default to undefined]
**hmacSignature** | **string** | Optional HMAC secret used to validate Docusign Connect event notifications. When configured, callbacks must include a matching Docusign HMAC signature. When omitted or empty, callbacks are processed without HMAC validation, including when connectUrl is configured. | [optional] [default to undefined]
**connectUrl** | **string** | Public HTTPS URL that receives Docusign Connect event notifications. May be configured with or without hmacSignature. | [optional] [default to undefined]

## Example

```typescript
import { DocusignConfig } from 'formkiq-client-sdk-typescript';

const instance: DocusignConfig = {
    environment,
    userId,
    integrationKey,
    rsaPrivateKey,
    hmacSignature,
    connectUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
