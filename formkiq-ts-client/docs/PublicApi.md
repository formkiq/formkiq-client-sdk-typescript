# PublicApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**publicAddDocument**](#publicadddocument) | **POST** /public/documents | Public add document|
|[**publicAddWebhook**](#publicaddwebhook) | **POST** /public/webhooks/{webhooks+} | Public add webhook|

# **publicAddDocument**
> AddDocumentResponse publicAddDocument(addDocumentRequest)

Allow unauthenticated creation of new documents; must be enabled during installation (disabled by default)  See POST /documents/{documentId}/tags for adding tags to document schema  See POST /documents/{documentId}/actions for adding actions to document schema

### Example

```typescript
import {
    PublicApi,
    Configuration,
    AddDocumentRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new PublicApi(configuration);

let addDocumentRequest: AddDocumentRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.publicAddDocument(
    addDocumentRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocumentRequest** | **AddDocumentRequest**|  | |
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**AddDocumentResponse**

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

# **publicAddWebhook**
> DocumentId publicAddWebhook(body)

Receive an incoming public post to a specified webhook and creates a document based on the data sent; must be enabled during installation (disabled by default)

### Example

```typescript
import {
    PublicApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new PublicApi(configuration);

let webhooks: string; //Web Hook Param (default to undefined)
let body: object; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.publicAddWebhook(
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

