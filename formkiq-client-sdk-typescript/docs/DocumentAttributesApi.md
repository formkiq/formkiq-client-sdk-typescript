# DocumentAttributesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addDocumentAttributes**](#adddocumentattributes) | **POST** /documents/{documentId}/attributes | Add attribute to document|
|[**deleteDocumentAttribute**](#deletedocumentattribute) | **DELETE** /documents/{documentId}/attributes/{attributeKey} | Delete document attribute|
|[**deleteDocumentAttributeAndValue**](#deletedocumentattributeandvalue) | **DELETE** /documents/{documentId}/attributes/{attributeKey}/{attributeValue} | Delete document\&#39;s attribute value|
|[**generateDocumentAttributeValue**](#generatedocumentattributevalue) | **POST** /documents/{documentId}/attributes/{attributeKey}/generate | Generate document attribute value|
|[**getDocumentAttribute**](#getdocumentattribute) | **GET** /documents/{documentId}/attributes/{attributeKey} | Get document attribute by key|
|[**getDocumentAttributes**](#getdocumentattributes) | **GET** /documents/{documentId}/attributes | Get document\&#39;s attributes|
|[**setDocumentAttributeValue**](#setdocumentattributevalue) | **PUT** /documents/{documentId}/attributes/{attributeKey} | Set document\&#39;s attributes value|
|[**setDocumentAttributes**](#setdocumentattributes) | **PUT** /documents/{documentId}/attributes | Set document\&#39;s attributes|

# **addDocumentAttributes**
> AddResponse addDocumentAttributes(addDocumentAttributesRequest)

Add multiple attributes to a document; this endpoint also accepts a different body parameter for adding a single attribute  For an attribute defined with dataType JSON, supply one object in jsonValue. Do not combine jsonValue with scalar, entity, classification, or relationship value fields.  Requires WRITE_DOCUMENT_ATTRIBUTES or WRITE. ADMIN retains access.

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
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addDocumentAttributes(
    documentId,
    addDocumentAttributesRequest,
    siteId,
    artifactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocumentAttributesRequest** | **AddDocumentAttributesRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


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

Delete a document attribute by using its key. For a JSON attribute, this deletes the entire JSON object, subject to authorization and required-attribute validation.  Requires DELETE_DOCUMENT_ATTRIBUTES or DELETE. ADMIN retains access.

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
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteDocumentAttribute(
    documentId,
    attributeKey,
    siteId,
    artifactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **attributeKey** | [**string**] | Attribute Key | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


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

Delete a specific document attribute key/value combination; the request will be ignored if there is no valid key/value combination found.  Attributes defined with dataType JSON are rejected with 400 Bad Request, regardless of the supplied attributeValue. No data is changed. Delete the entire JSON attribute using DELETE /documents/{documentId}/attributes/{attributeKey} instead.  Requires DELETE_DOCUMENT_ATTRIBUTES or DELETE. ADMIN retains access.

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
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteDocumentAttributeAndValue(
    documentId,
    attributeKey,
    attributeValue,
    siteId,
    artifactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **attributeKey** | [**string**] | Attribute Key | defaults to undefined|
| **attributeValue** | [**string**] | Attribute Value | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


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
|**400** | JSON attributes must be deleted by attribute key, or attribute validation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generateDocumentAttributeValue**
> GenerateDocumentAttributeValueResponse generateDocumentAttributeValue()

Allocates the next value from the numbering sequence configured for the attribute key and stores it on the document. If the document already has a value for the attribute key, the existing value is returned.  Requires WRITE_DOCUMENT_ATTRIBUTES or WRITE. ADMIN retains access.

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

const { status, data } = await apiInstance.generateDocumentAttributeValue(
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

**GenerateDocumentAttributeValueResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
|**400** | Attribute key is not eligible for generated values |  -  |
|**404** | Document or numbering sequence not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDocumentAttribute**
> GetDocumentAttributeResponse getDocumentAttribute()

Get a document attribute by using its key  Requires READ_DOCUMENT_ATTRIBUTES or READ. ADMIN retains access.

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
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentAttribute(
    documentId,
    attributeKey,
    siteId,
    artifactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **attributeKey** | [**string**] | Attribute Key | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


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

Get a listing of a document\'s attributes  Requires READ_DOCUMENT_ATTRIBUTES or READ. ADMIN retains access.

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
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let next: string; //Next page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentAttributes(
    documentId,
    siteId,
    artifactId,
    limit,
    next
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|
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

Set an attribute value on a document. For an attribute defined with dataType JSON, supply jsonValue to replace the entire object. Nested fields are not merged.  Requires WRITE_DOCUMENT_ATTRIBUTES or WRITE. ADMIN retains access.

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
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.setDocumentAttributeValue(
    documentId,
    attributeKey,
    setDocumentAttributeRequest,
    siteId,
    artifactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setDocumentAttributeRequest** | **SetDocumentAttributeRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **attributeKey** | [**string**] | Attribute Key | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


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

Set multiple attributes to a document; this endpoint also accepts a different body parameter for setting a single attribute  Note: - attributes in the request will overwrite existing attributes. - jsonValue replaces the entire JSON object; nested fields are not merged.  Requires WRITE_DOCUMENT_ATTRIBUTES or WRITE. ADMIN retains access.

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
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.setDocumentAttributes(
    documentId,
    setDocumentAttributesRequest,
    siteId,
    artifactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setDocumentAttributesRequest** | **SetDocumentAttributesRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


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

