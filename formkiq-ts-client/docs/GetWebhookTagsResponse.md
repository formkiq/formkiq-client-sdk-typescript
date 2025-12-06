# GetWebhookTagsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next** | **string** | Next page of results token | [optional] [default to undefined]
**previous** | **string** | Previous page of results token | [optional] [default to undefined]
**tags** | [**Array&lt;WebhookTag&gt;**](WebhookTag.md) | List of webhook tags | [optional] [default to undefined]

## Example

```typescript
import { GetWebhookTagsResponse } from 'formkiq-ts-client';

const instance: GetWebhookTagsResponse = {
    next,
    previous,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
