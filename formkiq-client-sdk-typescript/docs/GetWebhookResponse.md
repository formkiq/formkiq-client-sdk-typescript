# GetWebhookResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**siteId** | **string** | Site Identifier | [optional] [default to undefined]
**name** | **string** | Webhook name | [optional] [default to undefined]
**url** | **string** | Webhook url | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**webhookId** | **string** | Webhook Identifier | [optional] [default to undefined]
**userId** | **string** | User who added document | [optional] [default to undefined]
**enabled** | **string** | Is webhook enabled | [optional] [default to undefined]
**ttl** | **string** | Webhook time to live (expiry in seconds) | [optional] [default to undefined]

## Example

```typescript
import { GetWebhookResponse } from 'formkiq-client-sdk-typescript';

const instance: GetWebhookResponse = {
    siteId,
    name,
    url,
    insertedDate,
    webhookId,
    userId,
    enabled,
    ttl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
