# DocumentGenerationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addDocumentCertification**](#adddocumentcertification) | **POST** /documents/{documentId}/certifications | Add Document Certification|
|[**addDocumentGenerate**](#adddocumentgenerate) | **POST** /documents/{documentId}/generate | Add Document Generate|

# **addDocumentCertification**
> AddDocumentCertificationResponse addDocumentCertification(addDocumentCertificationRequest)

Applies one or more certifications (digital signatures) to a document using one or more certificates. Target determines whether a presigned download is returned, a new version is created, or a new document is created. ; available as an Add-On Module

### Example

```typescript
import {
    DocumentGenerationApi,
    Configuration,
    AddDocumentCertificationRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentGenerationApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let addDocumentCertificationRequest: AddDocumentCertificationRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addDocumentCertification(
    documentId,
    addDocumentCertificationRequest,
    siteId,
    artifactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocumentCertificationRequest** | **AddDocumentCertificationRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


### Return type

**AddDocumentCertificationResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | 201 CREATED |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
|**400** | 400 BAD REQUEST |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

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
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addDocumentGenerate(
    documentId,
    addDocumentGenerateRequest,
    siteId,
    artifactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocumentGenerateRequest** | **AddDocumentGenerateRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


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

