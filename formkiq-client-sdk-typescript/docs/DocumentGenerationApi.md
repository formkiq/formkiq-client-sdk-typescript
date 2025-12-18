# DocumentGenerationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addDocumentGenerate**](#adddocumentgenerate) | **POST** /documents/{documentId}/generate | Add Document Generate|

# **addDocumentGenerate**
> AddDocumentGenerateResponse addDocumentGenerate(addDocumentGenerateRequest)

Generates a new document using a specified template file and data sources. This operation allows users to merge data from multiple documents into a template to create a new document in the desired output format (e.g., DOCX).  By Default data source must include a `data` object, which contains key-value pairs that will be merged into the template. The value can be any valid JSON object. { \"data\":{}}. The data path can be adjusted via the \"dataRoot\" field.  ; available as an Add-On Module

### Example

```typescript
import {
    DocumentGenerationApi,
    Configuration,
    AddDocumentGenerateRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentGenerationApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let addDocumentGenerateRequest: AddDocumentGenerateRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addDocumentGenerate(
    documentId,
    addDocumentGenerateRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocumentGenerateRequest** | **AddDocumentGenerateRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**AddDocumentGenerateResponse**

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

