# DocumentAttributesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addDocumentAttributes**](#adddocumentattributes) | **POST** /documents/{documentId}/attributes | Add attribute to document|
|[**deleteDocumentAttribute**](#deletedocumentattribute) | **DELETE** /documents/{documentId}/attributes/{attributeKey} | Delete document attribute|
|[**deleteDocumentAttributeAndValue**](#deletedocumentattributeandvalue) | **DELETE** /documents/{documentId}/attributes/{attributeKey}/{attributeValue} | Delete document\&#39;s attribute value|
|[**getDocumentAttribute**](#getdocumentattribute) | **GET** /documents/{documentId}/attributes/{attributeKey} | Get document attribute by key|
|[**getDocumentAttributes**](#getdocumentattributes) | **GET** /documents/{documentId}/attributes | Get document\&#39;s attributes|
|[**setDocumentAttributeValue**](#setdocumentattributevalue) | **PUT** /documents/{documentId}/attributes/{attributeKey} | Set document\&#39;s attributes value|
|[**setDocumentAttributes**](#setdocumentattributes) | **PUT** /documents/{documentId}/attributes | Set document\&#39;s attributes|

# **addDocumentAttributes**
> AddResponse addDocumentAttributes(addDocumentAttributesRequest)

Add multiple attributes to a document; this endpoint also accepts a different body parameter for adding a single attribute

### Example

```typescript
import {
    DocumentAttributesApi,
    Configuration,
    AddDocumentAttributesRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentAttributesApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let addDocumentAttributesRequest: AddDocumentAttributesRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addDocumentAttributes(
    documentId,
    addDocumentAttributesRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocumentAttributesRequest** | **AddDocumentAttributesRequest**|  | |
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
|**201** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteDocumentAttribute**
> DeleteResponse deleteDocumentAttribute()

Delete a document attribute by using its key

### Example

```typescript
import {
    DocumentAttributesApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentAttributesApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let attributeKey: string; //Attribute Key (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteDocumentAttribute(
    documentId,
    attributeKey,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **attributeKey** | [**string**] | Attribute Key | defaults to undefined|
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

# **deleteDocumentAttributeAndValue**
> DeleteResponse deleteDocumentAttributeAndValue()

Delete a specific document attribute key/value combination; the request will be ignored if there is no valid key/value combination found

### Example

```typescript
import {
    DocumentAttributesApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentAttributesApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let attributeKey: string; //Attribute Key (default to undefined)
let attributeValue: string; //Attribute Value (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteDocumentAttributeAndValue(
    documentId,
    attributeKey,
    attributeValue,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **attributeKey** | [**string**] | Attribute Key | defaults to undefined|
| **attributeValue** | [**string**] | Attribute Value | defaults to undefined|
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

# **getDocumentAttribute**
> GetDocumentAttributeResponse getDocumentAttribute()

Get a document attribute by using its key

### Example

```typescript
import {
    DocumentAttributesApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentAttributesApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let attributeKey: string; //Attribute Key (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentAttribute(
    documentId,
    attributeKey,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **attributeKey** | [**string**] | Attribute Key | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**GetDocumentAttributeResponse**

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

# **getDocumentAttributes**
> GetDocumentAttributesResponse getDocumentAttributes()

Get a listing of a document\'s attributes

### Example

```typescript
import {
    DocumentAttributesApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentAttributesApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let next: string; //Next page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentAttributes(
    documentId,
    siteId,
    limit,
    next
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|


### Return type

**GetDocumentAttributesResponse**

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

# **setDocumentAttributeValue**
> SetResponse setDocumentAttributeValue(setDocumentAttributeRequest)

Set attributes value to a document

### Example

```typescript
import {
    DocumentAttributesApi,
    Configuration,
    SetDocumentAttributeRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentAttributesApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let attributeKey: string; //Attribute Key (default to undefined)
let setDocumentAttributeRequest: SetDocumentAttributeRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.setDocumentAttributeValue(
    documentId,
    attributeKey,
    setDocumentAttributeRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setDocumentAttributeRequest** | **SetDocumentAttributeRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **attributeKey** | [**string**] | Attribute Key | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**SetResponse**

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

# **setDocumentAttributes**
> SetResponse setDocumentAttributes(setDocumentAttributesRequest)

Set multiple attributes to a document; this endpoint also accepts a different body parameter for setting a single attribute  Note: - attributes in the request will overwrite existing attributes.

### Example

```typescript
import {
    DocumentAttributesApi,
    Configuration,
    SetDocumentAttributesRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentAttributesApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let setDocumentAttributesRequest: SetDocumentAttributesRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.setDocumentAttributes(
    documentId,
    setDocumentAttributesRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setDocumentAttributesRequest** | **SetDocumentAttributesRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**SetResponse**

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

