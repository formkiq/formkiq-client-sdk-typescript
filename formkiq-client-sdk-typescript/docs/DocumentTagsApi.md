# DocumentTagsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addDocumentTags**](#adddocumenttags) | **POST** /documents/{documentId}/tags | Add tag to document|
|[**deleteDocumentTag**](#deletedocumenttag) | **DELETE** /documents/{documentId}/tags/{tagKey} | Delete document tag|
|[**deleteDocumentTagAndValue**](#deletedocumenttagandvalue) | **DELETE** /documents/{documentId}/tags/{tagKey}/{tagValue} | Delete document\&#39;s tag value|
|[**getDocumentTag**](#getdocumenttag) | **GET** /documents/{documentId}/tags/{tagKey} | Get document tag by key|
|[**getDocumentTags**](#getdocumenttags) | **GET** /documents/{documentId}/tags | Get document\&#39;s tags|
|[**setDocumentTag**](#setdocumenttag) | **PUT** /documents/{documentId}/tags/{tagKey} | Update document tag value(s)|
|[**setDocumentTags**](#setdocumenttags) | **PUT** /documents/{documentId}/tags | Set document\&#39;s tags|
|[**updateDocumentTags**](#updatedocumenttags) | **PATCH** /documents/{documentId}/tags | Update document tags|
|[**updateMatchingDocumentTags**](#updatematchingdocumenttags) | **PATCH** /documents/tags | Mass Update document tag(s)|

# **addDocumentTags**
> AddResponse addDocumentTags(addDocumentTagsRequest)

Add multiple tags to a document; this endpoint also accepts a different body parameter for adding a single tag

### Example

```typescript
import {
    DocumentTagsApi,
    Configuration,
    AddDocumentTagsRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentTagsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let addDocumentTagsRequest: AddDocumentTagsRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addDocumentTags(
    documentId,
    addDocumentTagsRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocumentTagsRequest** | **AddDocumentTagsRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**AddResponse**

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

# **deleteDocumentTag**
> DeleteResponse deleteDocumentTag()

Delete a document tag by using its key

### Example

```typescript
import {
    DocumentTagsApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentTagsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let tagKey: string; //Tag Key (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteDocumentTag(
    documentId,
    tagKey,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **tagKey** | [**string**] | Tag Key | defaults to undefined|
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

# **deleteDocumentTagAndValue**
> DeleteResponse deleteDocumentTagAndValue()

Delete a specific document tag\'s key/value combination; the request will be ignored if there is no valid key/value combination found

### Example

```typescript
import {
    DocumentTagsApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentTagsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let tagKey: string; //Tag Key (default to undefined)
let tagValue: string; //Tag Key Value (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let shareKey: string; //Share Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteDocumentTagAndValue(
    documentId,
    tagKey,
    tagValue,
    siteId,
    shareKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **tagKey** | [**string**] | Tag Key | defaults to undefined|
| **tagValue** | [**string**] | Tag Key Value | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **shareKey** | [**string**] | Share Identifier | (optional) defaults to undefined|


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

# **getDocumentTag**
> GetDocumentTagResponse getDocumentTag()

Get a document tag by using its key

### Example

```typescript
import {
    DocumentTagsApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentTagsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let tagKey: string; //Tag Key (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let shareKey: string; //Share Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentTag(
    documentId,
    tagKey,
    siteId,
    shareKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **tagKey** | [**string**] | Tag Key | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **shareKey** | [**string**] | Share Identifier | (optional) defaults to undefined|


### Return type

**GetDocumentTagResponse**

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

# **getDocumentTags**
> GetDocumentTagsResponse getDocumentTags()

Get a listing of a document\'s tags

### Example

```typescript
import {
    DocumentTagsApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentTagsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let shareKey: string; //Share Identifier (optional) (default to undefined)
let next: string; //Next page of results token (optional) (default to undefined)
let previous: string; //Previous page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentTags(
    documentId,
    siteId,
    limit,
    shareKey,
    next,
    previous
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|
| **shareKey** | [**string**] | Share Identifier | (optional) defaults to undefined|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|
| **previous** | [**string**] | Previous page of results token | (optional) defaults to undefined|


### Return type

**GetDocumentTagsResponse**

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

# **setDocumentTag**
> setDocumentTag(setDocumentTagKeyRequest)

Update any and all values of a document tag, by using its key; you can supply one tag value or a list of tag values in the request body

### Example

```typescript
import {
    DocumentTagsApi,
    Configuration,
    SetDocumentTagKeyRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentTagsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let tagKey: string; //Tag Key (default to undefined)
let setDocumentTagKeyRequest: SetDocumentTagKeyRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.setDocumentTag(
    documentId,
    tagKey,
    setDocumentTagKeyRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setDocumentTagKeyRequest** | **SetDocumentTagKeyRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **tagKey** | [**string**] | Tag Key | defaults to undefined|
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
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setDocumentTags**
> setDocumentTags(addDocumentTagsRequest)

Set multiple tags to a document; this endpoint also accepts a different body parameter for setting a single tag

### Example

```typescript
import {
    DocumentTagsApi,
    Configuration,
    AddDocumentTagsRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentTagsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let addDocumentTagsRequest: AddDocumentTagsRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.setDocumentTags(
    documentId,
    addDocumentTagsRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocumentTagsRequest** | **AddDocumentTagsRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
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
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateDocumentTags**
> updateDocumentTags(addDocumentTagsRequest)

Updates multiple tags to a document; this endpoint also accepts a different body parameter for updating a single tag

### Example

```typescript
import {
    DocumentTagsApi,
    Configuration,
    AddDocumentTagsRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentTagsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let addDocumentTagsRequest: AddDocumentTagsRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.updateDocumentTags(
    documentId,
    addDocumentTagsRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocumentTagsRequest** | **AddDocumentTagsRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
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
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateMatchingDocumentTags**
> UpdateMatchingDocumentTagsResponse updateMatchingDocumentTags(updateMatchingDocumentTagsRequest)

This API request allows the adding/updating of multiple document tag(s) based on document(s) that have the matching tag.

### Example

```typescript
import {
    DocumentTagsApi,
    Configuration,
    UpdateMatchingDocumentTagsRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentTagsApi(configuration);

let updateMatchingDocumentTagsRequest: UpdateMatchingDocumentTagsRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.updateMatchingDocumentTags(
    updateMatchingDocumentTagsRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMatchingDocumentTagsRequest** | **UpdateMatchingDocumentTagsRequest**|  | |
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**UpdateMatchingDocumentTagsResponse**

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

