# Site


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**siteId** | **string** | Site Identifier | [optional] [default to undefined]
**title** | **string** | Site Title | [optional] [default to undefined]
**status** | [**SiteStatus**](SiteStatus.md) |  | [optional] [default to undefined]
**permission** | **string** | SiteId permission level | [optional] [default to undefined]
**permissions** | [**Array&lt;SiteGroupPermissions&gt;**](SiteGroupPermissions.md) |  | [optional] [default to undefined]
**uploadEmail** | **string** | SiteId document upload email address | [optional] [default to undefined]
**config** | [**SiteConfig**](SiteConfig.md) |  | [optional] [default to undefined]
**usage** | [**SiteUsage**](SiteUsage.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Site } from 'formkiq-ts-client';

const instance: Site = {
    siteId,
    title,
    status,
    permission,
    permissions,
    uploadEmail,
    config,
    usage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
