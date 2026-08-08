# Site


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**siteId** | **string** | Site Identifier | [optional] [default to undefined]
**title** | **string** | Site Title | [optional] [default to undefined]
**status** | [**SiteStatus**](SiteStatus.md) |  | [optional] [default to undefined]
**permission** | [**SitePermission**](SitePermission.md) |  | [optional] [default to undefined]
**roles** | **Array&lt;string&gt;** | List of roles used to get permissions | [optional] [default to undefined]
**permissions** | [**Array&lt;SiteGroupPermissions&gt;**](SiteGroupPermissions.md) |  | [optional] [default to undefined]
**uploadEmail** | **string** | SiteId document upload email address | [optional] [default to undefined]
**config** | [**SiteConfig**](SiteConfig.md) |  | [optional] [default to undefined]
**usage** | [**SiteUsage**](SiteUsage.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Site } from 'formkiq-client-sdk-typescript';

const instance: Site = {
    siteId,
    title,
    status,
    permission,
    roles,
    permissions,
    uploadEmail,
    config,
    usage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
