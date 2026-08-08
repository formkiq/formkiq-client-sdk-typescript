# AddDocumentCertificationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target** | [**DocumentCertificationTarget**](DocumentCertificationTarget.md) |  | [default to undefined]
**certificates** | [**Array&lt;DocumentCertification&gt;**](DocumentCertification.md) | One or more certificates used to certify/sign the document (in order). | [default to undefined]

## Example

```typescript
import { AddDocumentCertificationRequest } from 'formkiq-client-sdk-typescript';

const instance: AddDocumentCertificationRequest = {
    target,
    certificates,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
