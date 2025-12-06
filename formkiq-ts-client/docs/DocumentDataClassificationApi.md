# DocumentDataClassificationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getDocumentDataClassification**](#getdocumentdataclassification) | **GET** /documents/{documentId}/dataClassification | Get document\&#39;s data classification|
|[**setDocumentDataClassification**](#setdocumentdataclassification) | **PUT** /documents/{documentId}/dataClassification | Set document\&#39;s data classification|

# **getDocumentDataClassification**
> GetDocumentDataClassificationResponse getDocumentDataClassification()

Retrieve an document\'s data classification; available as an Add-On Module

### Example

```typescript
import {
    DocumentDataClassificationApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentDataClassificationApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let next: string; //Next page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentDataClassification(
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

**GetDocumentDataClassificationResponse**

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

# **setDocumentDataClassification**
> SetDocumentDataClassificationResponse setDocumentDataClassification()

Generate Data Classfication attributes within a document; available as an Add-On Module

### Example

```typescript
import {
    DocumentDataClassificationApi,
    Configuration,
    SetDocumentDataClassificationRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentDataClassificationApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let setDocumentDataClassificationRequest: SetDocumentDataClassificationRequest; // (optional)

const { status, data } = await apiInstance.setDocumentDataClassification(
    documentId,
    siteId,
    setDocumentDataClassificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setDocumentDataClassificationRequest** | **SetDocumentDataClassificationRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**SetDocumentDataClassificationResponse**

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

