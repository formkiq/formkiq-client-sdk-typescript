# DocumentOCRApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addDocumentOcr**](#adddocumentocr) | **POST** /documents/{documentId}/ocr | Perform document ocr|
|[**deleteDocumentOcr**](#deletedocumentocr) | **DELETE** /documents/{documentId}/ocr | Delete document ocr|
|[**getDocumentOcr**](#getdocumentocr) | **GET** /documents/{documentId}/ocr | Get document ocr content|
|[**setDocumentOcr**](#setdocumentocr) | **PUT** /documents/{documentId}/ocr | Set document ocr result|

# **addDocumentOcr**
> AddDocumentOcrResponse addDocumentOcr()

Document optical character recognition (OCR) request; extract text and data from a document;   Tesseract available for all editions, but Textract engine and tables and forms options available as an Add-On Module

### Example

```typescript
import {
    DocumentOCRApi,
    Configuration,
    AddDocumentOcrRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentOCRApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)
let addDocumentOcrRequest: AddDocumentOcrRequest; // (optional)

const { status, data } = await apiInstance.addDocumentOcr(
    documentId,
    siteId,
    artifactId,
    addDocumentOcrRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocumentOcrRequest** | **AddDocumentOcrRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


### Return type

**AddDocumentOcrResponse**

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

# **deleteDocumentOcr**
> DeleteResponse deleteDocumentOcr()

Delete a document\'s optical character recognition (OCR) result, if exists;   Tesseract available for all editions, but Textract engine and tables and forms options available as an Add-On Module

### Example

```typescript
import {
    DocumentOCRApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentOCRApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteDocumentOcr(
    documentId,
    siteId,
    artifactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
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

# **getDocumentOcr**
> GetDocumentOcrResponse getDocumentOcr()

Get a document\'s optical character recognition (OCR) result, if exists;   Tesseract available for all editions, but Textract engine and tables and forms options available as an Add-On Module

### Example

```typescript
import {
    DocumentOCRApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentOCRApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)
let outputType: 'TEXT' | 'KEY_VALUE' | 'CONTENT_URL' | 'TABLES'; //Output Format Type (optional) (default to undefined)
let contentUrl: string; //Whether to return a \"contentUrl\", set value to \'true\' (deprecated) (optional) (default to undefined)
let text: string; //Returns raw \'text\' of OCR content. e.g. AWS Textract returns JSON, setting parameter to \'true\' converts JSON to Text (deprecated) (optional) (default to undefined)
let shareKey: string; //Share Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentOcr(
    documentId,
    siteId,
    artifactId,
    outputType,
    contentUrl,
    text,
    shareKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|
| **outputType** | [**&#39;TEXT&#39; | &#39;KEY_VALUE&#39; | &#39;CONTENT_URL&#39; | &#39;TABLES&#39;**]**Array<&#39;TEXT&#39; &#124; &#39;KEY_VALUE&#39; &#124; &#39;CONTENT_URL&#39; &#124; &#39;TABLES&#39;>** | Output Format Type | (optional) defaults to undefined|
| **contentUrl** | [**string**] | Whether to return a \&quot;contentUrl\&quot;, set value to \&#39;true\&#39; (deprecated) | (optional) defaults to undefined|
| **text** | [**string**] | Returns raw \&#39;text\&#39; of OCR content. e.g. AWS Textract returns JSON, setting parameter to \&#39;true\&#39; converts JSON to Text (deprecated) | (optional) defaults to undefined|
| **shareKey** | [**string**] | Share Identifier | (optional) defaults to undefined|


### Return type

**GetDocumentOcrResponse**

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

# **setDocumentOcr**
> AddDocumentOcrResponse setDocumentOcr()

Set a document\'s optical character recognition (OCR) result for a document;   Tesseract available for all editions, but Textract engine and tables and forms options available as an Add-On Module

### Example

```typescript
import {
    DocumentOCRApi,
    Configuration,
    SetDocumentOcrRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentOCRApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)
let setDocumentOcrRequest: SetDocumentOcrRequest; // (optional)

const { status, data } = await apiInstance.setDocumentOcr(
    documentId,
    siteId,
    artifactId,
    setDocumentOcrRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setDocumentOcrRequest** | **SetDocumentOcrRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


### Return type

**AddDocumentOcrResponse**

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

