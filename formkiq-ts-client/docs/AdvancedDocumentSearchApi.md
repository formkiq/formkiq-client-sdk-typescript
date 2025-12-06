# AdvancedDocumentSearchApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addDocumentFulltext**](#adddocumentfulltext) | **POST** /documents/{documentId}/fulltext | Add document\&#39;s full-text|
|[**deleteDocumentFulltext**](#deletedocumentfulltext) | **DELETE** /documents/{documentId}/fulltext | Delete document full-text|
|[**deleteDocumentFulltextTag**](#deletedocumentfulltexttag) | **DELETE** /documents/{documentId}/fulltext/tags/{tagKey} | Delete document full-text tag|
|[**deleteDocumentFulltextTagAndValue**](#deletedocumentfulltexttagandvalue) | **DELETE** /documents/{documentId}/fulltext/tags/{tagKey}/{tagValue} | Delete document full-text tag/value|
|[**getDocumentFulltext**](#getdocumentfulltext) | **GET** /documents/{documentId}/fulltext | Get document\&#39;s full-text|
|[**queryFulltext**](#queryfulltext) | **POST** /queryFulltext | Direct opensearch search API|
|[**searchFulltext**](#searchfulltext) | **POST** /searchFulltext | Document full-text search|
|[**setDocumentFulltext**](#setdocumentfulltext) | **PUT** /documents/{documentId}/fulltext | Set document\&#39;s full-text|
|[**updateDocumentFulltext**](#updatedocumentfulltext) | **PATCH** /documents/{documentId}/fulltext | Update document\&#39;s full-text|

# **addDocumentFulltext**
> AddDocumentFulltextResponse addDocumentFulltext()

Add a document to OpenSearch; available as an Add-On Module

### Example

```typescript
import {
    AdvancedDocumentSearchApi,
    Configuration,
    AddDocumentFulltextRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new AdvancedDocumentSearchApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let addDocumentFulltextRequest: AddDocumentFulltextRequest; // (optional)

const { status, data } = await apiInstance.addDocumentFulltext(
    documentId,
    siteId,
    addDocumentFulltextRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocumentFulltextRequest** | **AddDocumentFulltextRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**AddDocumentFulltextResponse**

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

# **deleteDocumentFulltext**
> DeleteFulltextResponse deleteDocumentFulltext()

Remove full text search for a document from OpenSearch; available as an Add-On Module

### Example

```typescript
import {
    AdvancedDocumentSearchApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new AdvancedDocumentSearchApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteDocumentFulltext(
    documentId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**DeleteFulltextResponse**

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

# **deleteDocumentFulltextTag**
> deleteDocumentFulltextTag()

Remove document tags from OpenSearch; available as an Add-On Module

### Example

```typescript
import {
    AdvancedDocumentSearchApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new AdvancedDocumentSearchApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let tagKey: string; //Tag Key (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let shareKey: string; //Share Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteDocumentFulltextTag(
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

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteDocumentFulltextTagAndValue**
> deleteDocumentFulltextTagAndValue()

Remove document tag/value from OpenSearch; available as an Add-On Module

### Example

```typescript
import {
    AdvancedDocumentSearchApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new AdvancedDocumentSearchApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let tagKey: string; //Tag Key (default to undefined)
let tagValue: string; //Tag Key Value (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let shareKey: string; //Share Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteDocumentFulltextTagAndValue(
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

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDocumentFulltext**
> GetDocumentFulltextResponse getDocumentFulltext()

Retrieve an OpenSearch document\'s details, i.e., metadata

### Example

```typescript
import {
    AdvancedDocumentSearchApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new AdvancedDocumentSearchApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let shareKey: string; //Share Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentFulltext(
    documentId,
    siteId,
    shareKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **shareKey** | [**string**] | Share Identifier | (optional) defaults to undefined|


### Return type

**GetDocumentFulltextResponse**

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

# **queryFulltext**
> QueryFulltextResponse queryFulltext(body)

Endpoint for allowing custom, complex queries using the OpenSearch search API (https://opensearch.org/docs/latest/opensearch/rest-api/search/); available as an Add-On Module  Example Request Body: { \"query\": { \"match_all\": {} }}

### Example

```typescript
import {
    AdvancedDocumentSearchApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new AdvancedDocumentSearchApi(configuration);

let body: object; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let indexName: string; //IndexName to query (optional) (default to undefined)

const { status, data } = await apiInstance.queryFulltext(
    body,
    siteId,
    indexName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **indexName** | [**string**] | IndexName to query | (optional) defaults to undefined|


### Return type

**QueryFulltextResponse**

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

# **searchFulltext**
> DocumentFulltextResponse searchFulltext(documentFulltextRequest)

Document full-text search (and more robust multi-tag search queries, powered by OpenSearch); available as an Add-On Module

### Example

```typescript
import {
    AdvancedDocumentSearchApi,
    Configuration,
    DocumentFulltextRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new AdvancedDocumentSearchApi(configuration);

let documentFulltextRequest: DocumentFulltextRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let indexName: string; //IndexName to query (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')

const { status, data } = await apiInstance.searchFulltext(
    documentFulltextRequest,
    siteId,
    indexName,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentFulltextRequest** | **DocumentFulltextRequest**|  | |
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **indexName** | [**string**] | IndexName to query | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|


### Return type

**DocumentFulltextResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
|**400** | 400 OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setDocumentFulltext**
> SetDocumentFulltextResponse setDocumentFulltext()

Set all text/tags found within a document to OpenSearch; available as an Add-On Module

### Example

```typescript
import {
    AdvancedDocumentSearchApi,
    Configuration,
    SetDocumentFulltextRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new AdvancedDocumentSearchApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let setDocumentFulltextRequest: SetDocumentFulltextRequest; // (optional)

const { status, data } = await apiInstance.setDocumentFulltext(
    documentId,
    siteId,
    setDocumentFulltextRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setDocumentFulltextRequest** | **SetDocumentFulltextRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**SetDocumentFulltextResponse**

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

# **updateDocumentFulltext**
> UpdateDocumentFulltextResponse updateDocumentFulltext()

Update a document in OpenSearch; available as an Add-On Module

### Example

```typescript
import {
    AdvancedDocumentSearchApi,
    Configuration,
    UpdateDocumentFulltextRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new AdvancedDocumentSearchApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let updateDocumentFulltextRequest: UpdateDocumentFulltextRequest; // (optional)

const { status, data } = await apiInstance.updateDocumentFulltext(
    documentId,
    siteId,
    updateDocumentFulltextRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateDocumentFulltextRequest** | **UpdateDocumentFulltextRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**UpdateDocumentFulltextResponse**

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

