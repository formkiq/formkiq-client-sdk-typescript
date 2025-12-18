# UserShare


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group** | **string** | Name of Share Group | [optional] [default to undefined]
**shareKey** | **string** | Share Identifier | [optional] [default to undefined]
**type** | **string** | Type of Document | [optional] [default to undefined]
**permissions** | [**Array&lt;UserSharePermission&gt;**](UserSharePermission.md) | List of share permissions | [optional] [default to undefined]
**siteId** | **string** | Site Identifier | [optional] [default to undefined]
**path** | **string** | Path or Name of document | [optional] [default to undefined]
**userId** | **string** | User who created share | [optional] [default to undefined]
**permissionType** | [**UserSharePermissionType**](UserSharePermissionType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UserShare } from 'formkiq-client-sdk-typescript';

const instance: UserShare = {
    group,
    shareKey,
    type,
    permissions,
    siteId,
    path,
    userId,
    permissionType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
