# ReindexApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addReindexDocument**](#addreindexdocument) | **POST** /reindex/documents/{documentId} | Reindex metadata on a document|

# **addReindexDocument**
> AddResponse addReindexDocument(addReindexDocumentRequest)

The API allows for the reindexing of a document\'s metadata determined by the target.  ATTRIBUTE target will regenerate the composite keys for a document based on the Classification / SiteSchema

### Example

```typescript
import {
    ReindexApi,
    Configuration,
    AddReindexDocumentRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ReindexApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let addReindexDocumentRequest: AddReindexDocumentRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addReindexDocument(
    documentId,
    addReindexDocumentRequest,
    siteId,
    artifactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addReindexDocumentRequest** | **AddReindexDocumentRequest**|  | |
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
|**201** | 201 CREATED |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
|**400** | 400 OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

