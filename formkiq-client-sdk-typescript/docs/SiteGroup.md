# SiteGroup

A group\'s permission configuration for a site. roleType is optional for legacy records. A missing roleType means permissions contains explicit CUSTOM grants. A predefined roleType determines the effective role grants.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roleType** | [**ApiPermissionRoleType**](ApiPermissionRoleType.md) |  | [optional] [default to undefined]
**permissions** | [**Set&lt;ApiPermissionGrant&gt;**](ApiPermissionGrant.md) | Explicit CUSTOM or legacy permission grants. | [optional] [default to undefined]

## Example

```typescript
import { SiteGroup } from 'formkiq-client-sdk-typescript';

const instance: SiteGroup = {
    roleType,
    permissions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
