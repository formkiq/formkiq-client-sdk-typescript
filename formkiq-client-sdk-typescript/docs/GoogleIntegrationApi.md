# GoogleIntegrationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addGoogleDocumentExport**](#addgoogledocumentexport) | **POST** /integrations/google/drive/documents/{documentId}/export | Add Google Document Export|

# **addGoogleDocumentExport**
> AddGoogleDocumentExportResponse addGoogleDocumentExport(addGoogleDocumentExportRequest)

Exports a Google Document; available as an Add-On Module

### Example

```typescript
import {
    GoogleIntegrationApi,
    Configuration,
    AddGoogleDocumentExportRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new GoogleIntegrationApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let addGoogleDocumentExportRequest: AddGoogleDocumentExportRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addGoogleDocumentExport(
    documentId,
    addGoogleDocumentExportRequest,
    siteId,
    artifactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addGoogleDocumentExportRequest** | **AddGoogleDocumentExportRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


### Return type

**AddGoogleDocumentExportResponse**

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

