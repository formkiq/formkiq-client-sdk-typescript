# AddApiKeyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of API Key | [optional] [default to undefined]
**groups** | **Array&lt;string&gt;** | Optional list of groups to add as custom claims to API Key | [optional] [default to undefined]
**permissions** | [**Array&lt;ApiKeyPermission&gt;**](ApiKeyPermission.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AddApiKeyRequest } from 'formkiq-client-sdk-typescript';

const instance: AddApiKeyRequest = {
    name,
    groups,
    permissions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
