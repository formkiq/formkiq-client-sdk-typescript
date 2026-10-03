# UserNotification

A document notification associated with the authenticated user\'s email address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentId** | **string** | Document identifier | [optional] [default to undefined]
**artifactId** | **string** | Document artifact identifier | [optional] [default to undefined]
**notification** | [**DocumentNotification**](DocumentNotification.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UserNotification } from 'formkiq-client-sdk-typescript';

const instance: UserNotification = {
    documentId,
    artifactId,
    notification,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
