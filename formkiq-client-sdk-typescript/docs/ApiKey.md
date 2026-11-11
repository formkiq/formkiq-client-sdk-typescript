# ApiKey

An API key and its permission configuration. roleType is optional for legacy records. A missing roleType means permissions contains explicit CUSTOM grants. A predefined roleType determines the effective role grants, which can be discovered in the catalog.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of API Key | [optional] [default to undefined]
**apiKey** | **string** | API Key value | [optional] [default to undefined]
**userId** | **string** |  | [optional] [default to undefined]
**siteId** | **string** |  | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**roleType** | [**ApiPermissionRoleType**](ApiPermissionRoleType.md) |  | [optional] [default to undefined]
**permissions** | [**Set&lt;ApiPermissionGrant&gt;**](ApiPermissionGrant.md) | Explicit CUSTOM or legacy permission grants. | [optional] [default to undefined]
**groups** | **Array&lt;string&gt;** | List of groups to add as custom claims to API Key | [optional] [default to undefined]
**customClaims** | **{ [key: string]: any; }** | Custom claims associated with the API key and exposed in the requesting caller\&#39;s userClaims. Values may be strings, numbers, Booleans, arrays, or objects. Null-valued object fields are omitted. These claims do not override the key\&#39;s username, site, groups, role, or permissions. Keys created without custom claims have an empty claims map. | [optional] [default to undefined]

## Example

```typescript
import { ApiKey } from 'formkiq-client-sdk-typescript';

const instance: ApiKey = {
    name,
    apiKey,
    userId,
    siteId,
    insertedDate,
    roleType,
    permissions,
    groups,
    customClaims,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
