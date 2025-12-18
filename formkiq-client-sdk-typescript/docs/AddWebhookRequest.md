# AddWebhookRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of webhook | [default to undefined]
**ttl** | **string** | Webhook time to live (expiry in seconds) | [optional] [default to undefined]
**enabled** | **string** | Is webhook enabled | [optional] [default to undefined]
**tags** | [**Array&lt;AddDocumentTag&gt;**](AddDocumentTag.md) | List of document tags | [optional] [default to undefined]

## Example

```typescript
import { AddWebhookRequest } from 'formkiq-client-sdk-typescript';

const instance: AddWebhookRequest = {
    name,
    ttl,
    enabled,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
