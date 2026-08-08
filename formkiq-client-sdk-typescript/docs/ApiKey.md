# ApiKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of API Key | [optional] [default to undefined]
**apiKey** | **string** | API Key value | [optional] [default to undefined]
**userId** | **string** |  | [optional] [default to undefined]
**siteId** | **string** |  | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**permissions** | **Array&lt;string&gt;** | List of permissions | [optional] [default to undefined]
**groups** | **Array&lt;string&gt;** | List of groups to add as custom claims to API Key | [optional] [default to undefined]

## Example

```typescript
import { ApiKey } from 'formkiq-client-sdk-typescript';

const instance: ApiKey = {
    name,
    apiKey,
    userId,
    siteId,
    insertedDate,
    permissions,
    groups,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
