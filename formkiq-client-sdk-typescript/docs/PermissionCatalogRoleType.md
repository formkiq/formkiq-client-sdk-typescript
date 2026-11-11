# PermissionCatalogRoleType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**ApiPermissionRoleType**](ApiPermissionRoleType.md) |  | [default to undefined]
**groups** | [**Array&lt;PermissionCatalogGroup&gt;**](PermissionCatalogGroup.md) | Nonempty groups of effective permissions for a predefined role type. For CUSTOM, these groups contain all selectable scoped permissions. | [default to undefined]

## Example

```typescript
import { PermissionCatalogRoleType } from 'formkiq-client-sdk-typescript';

const instance: PermissionCatalogRoleType = {
    name,
    groups,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
