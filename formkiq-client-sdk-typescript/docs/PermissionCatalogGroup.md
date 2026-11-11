# PermissionCatalogGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**ApiPermissionGroup**](ApiPermissionGroup.md) |  | [default to undefined]
**label** | **string** | Display label for the permission group | [default to undefined]
**permissions** | [**Set&lt;PermissionCatalogPermission&gt;**](PermissionCatalogPermission.md) | Scoped permissions and their descriptions in this group | [default to undefined]

## Example

```typescript
import { PermissionCatalogGroup } from 'formkiq-client-sdk-typescript';

const instance: PermissionCatalogGroup = {
    name,
    label,
    permissions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
