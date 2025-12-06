# WebhooksApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addWebhook**](#addwebhook) | **POST** /webhooks | Add webhook|
|[**addWebhookDocument**](#addwebhookdocument) | **POST** /private/webhooks/{webhooks+} | Add webhook|
|[**addWebhookTag**](#addwebhooktag) | **POST** /webhooks/{webhookId}/tags | Add webhook tag|
|[**deleteWebhook**](#deletewebhook) | **DELETE** /webhooks/{webhookId} | Delete webhook|
|[**getWebhook**](#getwebhook) | **GET** /webhooks/{webhookId} | Get webhook|
|[**getWebhookTags**](#getwebhooktags) | **GET** /webhooks/{webhookId}/tags | Get webhook tags|
|[**getWebhooks**](#getwebhooks) | **GET** /webhooks | Get webhooks|
|[**updateWebhook**](#updatewebhook) | **PATCH** /webhooks/{webhookId} | Update webhook|

# **addWebhook**
> AddWebhookResponse addWebhook(addWebhookRequest)

Create a new webhook; once created, a webhook\'s id can be provided to an external service, allowing data to be sent, received, and processed via that webhook

### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    AddWebhookRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let addWebhookRequest: AddWebhookRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addWebhook(
    addWebhookRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addWebhookRequest** | **AddWebhookRequest**|  | |
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**AddWebhookResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | 201 CREATED |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addWebhookDocument**
> DocumentId addWebhookDocument(body)

Receive an incoming private webhook and creates a document based on the webhook\'s body; requires authentication

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhooks: string; //Web Hook Param (default to undefined)
let body: object; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addWebhookDocument(
    webhooks,
    body,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **webhooks** | [**string**] | Web Hook Param | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**DocumentId**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addWebhookTag**
> addWebhookTag(addWebhookTagRequest)

Add a tag to a webhook

### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    AddWebhookTagRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookId: string; //Web Hook Param (default to undefined)
let addWebhookTagRequest: AddWebhookTagRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addWebhookTag(
    webhookId,
    addWebhookTagRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addWebhookTagRequest** | **AddWebhookTagRequest**|  | |
| **webhookId** | [**string**] | Web Hook Param | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteWebhook**
> DeleteResponse deleteWebhook()

Delete a webhook; this will disable sending, receiving, or processing of data from external services to this webhook

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookId: string; //Web Hook Param (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteWebhook(
    webhookId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**string**] | Web Hook Param | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**DeleteResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebhook**
> GetWebhookResponse getWebhook()

Return a webhook\'s details, i.e., its metadata

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookId: string; //Web Hook Param (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getWebhook(
    webhookId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**string**] | Web Hook Param | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**GetWebhookResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebhookTags**
> GetWebhookTagsResponse getWebhookTags()

Get a webhook\'s tags

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookId: string; //Web Hook Param (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getWebhookTags(
    webhookId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**string**] | Web Hook Param | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**GetWebhookTagsResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebhooks**
> GetWebhooksResponse getWebhooks()

Return a list of webhooks; each webhook\'s id can be provided to an external service, allowing data to be sent, received, and processed via that webhook

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let siteId: string; //Site Identifier (optional) (default to undefined)
let next: string; //Next page of results token (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')

const { status, data } = await apiInstance.getWebhooks(
    siteId,
    next,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|


### Return type

**GetWebhooksResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWebhook**
> UpdateResponse updateWebhook(addWebhookRequest)

Updates a webhook\'s details, i.e., its metadata

### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    AddWebhookRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookId: string; //Web Hook Param (default to undefined)
let addWebhookRequest: AddWebhookRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.updateWebhook(
    webhookId,
    addWebhookRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addWebhookRequest** | **AddWebhookRequest**|  | |
| **webhookId** | [**string**] | Web Hook Param | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**UpdateResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

