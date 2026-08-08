# IntelligentDocumentProcessingApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addDocumentAiPrompt**](#adddocumentaiprompt) | **POST** /documents/{documentId}/ai/prompts/{llmPromptEntityName} | Add document AI result from LLM prompt|
|[**addDocumentMetadataExtractionResult**](#adddocumentmetadataextractionresult) | **POST** /documents/{documentId}/metadataExtractionResults/{llmPromptEntityName} | Add document\&#39;s metadata extraction result|
|[**getAllDocumentMetadataExtractionResults**](#getalldocumentmetadataextractionresults) | **GET** /documents/{documentId}/metadataExtractionResults | Get all document\&#39;s metadata extraction results|
|[**getDocumentAiPromptResults**](#getdocumentaipromptresults) | **GET** /documents/{documentId}/ai/prompts/{llmPromptEntityName} | Get document AI results from LLM prompt|
|[**getDocumentAiPromptsResults**](#getdocumentaipromptsresults) | **GET** /documents/{documentId}/ai/prompts | Get document AI results from LLM prompts|
|[**getDocumentDataClassification**](#getdocumentdataclassification) | **GET** /documents/{documentId}/dataClassification | Get document\&#39;s data classification|
|[**getDocumentMetadataExtractionResults**](#getdocumentmetadataextractionresults) | **GET** /documents/{documentId}/metadataExtractionResults/{llmPromptEntityName} | Get document\&#39;s metadata extraction results|
|[**setDocumentDataClassification**](#setdocumentdataclassification) | **PUT** /documents/{documentId}/dataClassification | Set document\&#39;s data classification|

# **addDocumentAiPrompt**
> AddDocumentAiResponse addDocumentAiPrompt()

Run an LLM prompt against a document; available as an Add-On Module

### Example

```typescript
import {
    IntelligentDocumentProcessingApi,
    Configuration,
    AddDocumentAiPromptRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new IntelligentDocumentProcessingApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let llmPromptEntityName: string; //LlmPrompt Entity Name (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)
let addDocumentAiPromptRequest: AddDocumentAiPromptRequest; // (optional)

const { status, data } = await apiInstance.addDocumentAiPrompt(
    documentId,
    llmPromptEntityName,
    siteId,
    artifactId,
    addDocumentAiPromptRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocumentAiPromptRequest** | **AddDocumentAiPromptRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **llmPromptEntityName** | [**string**] | LlmPrompt Entity Name | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


### Return type

**AddDocumentAiResponse**

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

# **addDocumentMetadataExtractionResult**
> AddDocumentMetadataExtractionResponse addDocumentMetadataExtractionResult()

Create a document Metadatq Extraction Result attributes within a document; available as an Add-On Module. **Deprecated**. This endpoint is no longer recommended. Please use **`/documents/{documentId}/ai/prompts/{llmPromptEntityName}`** instead. 

### Example

```typescript
import {
    IntelligentDocumentProcessingApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new IntelligentDocumentProcessingApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let llmPromptEntityName: string; //LlmPrompt Entity Name (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addDocumentMetadataExtractionResult(
    documentId,
    llmPromptEntityName,
    siteId,
    artifactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **llmPromptEntityName** | [**string**] | LlmPrompt Entity Name | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


### Return type

**AddDocumentMetadataExtractionResponse**

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

# **getAllDocumentMetadataExtractionResults**
> GetDocumentMetadataExtractionResponse getAllDocumentMetadataExtractionResults()

Retrieve all document\'s metadata extraction; available as an Add-On Module. **Deprecated**. This endpoint is no longer recommended. Please use **`/documents/{documentId}/ai/prompts/{llmPromptEntityName}`** instead. 

### Example

```typescript
import {
    IntelligentDocumentProcessingApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new IntelligentDocumentProcessingApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let next: string; //Next page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.getAllDocumentMetadataExtractionResults(
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

**GetDocumentMetadataExtractionResponse**

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

# **getDocumentAiPromptResults**
> GetDocumentAiPromptResultsResponse getDocumentAiPromptResults()

Retrieve document AI results from an LLM prompt; available as an Add-On Module

### Example

```typescript
import {
    IntelligentDocumentProcessingApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new IntelligentDocumentProcessingApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let llmPromptEntityName: string; //LlmPrompt Entity Name (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)
let analysisCategory: string; //Analysis Category (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let next: string; //Next page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentAiPromptResults(
    documentId,
    llmPromptEntityName,
    siteId,
    artifactId,
    analysisCategory,
    limit,
    next
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **llmPromptEntityName** | [**string**] | LlmPrompt Entity Name | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|
| **analysisCategory** | [**string**] | Analysis Category | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|


### Return type

**GetDocumentAiPromptResultsResponse**

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

# **getDocumentAiPromptsResults**
> GetDocumentAiPromptsResultsResponse getDocumentAiPromptsResults()

Retrieve document AI results from LLM prompts; available as an Add-On Module

### Example

```typescript
import {
    IntelligentDocumentProcessingApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new IntelligentDocumentProcessingApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)
let analysisCategory: string; //Analysis Category (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let next: string; //Next page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentAiPromptsResults(
    documentId,
    siteId,
    artifactId,
    analysisCategory,
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
| **analysisCategory** | [**string**] | Analysis Category | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|


### Return type

**GetDocumentAiPromptsResultsResponse**

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

# **getDocumentDataClassification**
> GetDocumentDataClassificationResponse getDocumentDataClassification()

Retrieve an document\'s data classification; available as an Add-On Module. **Deprecated**. This endpoint is no longer recommended. Please use **`/documents/{documentId}/ai/prompts/{llmPromptEntityName}`** instead. 

### Example

```typescript
import {
    IntelligentDocumentProcessingApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new IntelligentDocumentProcessingApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let next: string; //Next page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentDataClassification(
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

# **getDocumentMetadataExtractionResults**
> GetDocumentMetadataExtractionResponse getDocumentMetadataExtractionResults()

Retrieve an document\'s metadata extraction; available as an Add-On Module. **Deprecated**. This endpoint is no longer recommended. Please use **`/documents/{documentId}/ai/prompts/{llmPromptEntityName}`** instead. 

### Example

```typescript
import {
    IntelligentDocumentProcessingApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new IntelligentDocumentProcessingApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let llmPromptEntityName: string; //LlmPrompt Entity Name (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let next: string; //Next page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentMetadataExtractionResults(
    documentId,
    llmPromptEntityName,
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
| **llmPromptEntityName** | [**string**] | LlmPrompt Entity Name | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|


### Return type

**GetDocumentMetadataExtractionResponse**

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

Generate Data Classfication attributes within a document; available as an Add-On Module. **Deprecated**. This endpoint is no longer recommended. Please use **`/documents/{documentId}/ai/prompts/{llmPromptEntityName}`** instead. 

### Example

```typescript
import {
    IntelligentDocumentProcessingApi,
    Configuration,
    SetDocumentDataClassificationRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new IntelligentDocumentProcessingApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)
let setDocumentDataClassificationRequest: SetDocumentDataClassificationRequest; // (optional)

const { status, data } = await apiInstance.setDocumentDataClassification(
    documentId,
    siteId,
    artifactId,
    setDocumentDataClassificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setDocumentDataClassificationRequest** | **SetDocumentDataClassificationRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


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

