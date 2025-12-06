# DocumentActionsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addDocumentActions**](#adddocumentactions) | **POST** /documents/{documentId}/actions | Add document action|
|[**addDocumentRetryAction**](#adddocumentretryaction) | **POST** /documents/{documentId}/actions/retry | Retries failed document action(s)|
|[**getDocumentActions**](#getdocumentactions) | **GET** /documents/{documentId}/actions | Get document actions|

# **addDocumentActions**
> AddDocumentActionsResponse addDocumentActions()

Add one or more actions to a document; this appends actions and does not replace previous actions  Each action type supports a different set of parameters as shown in the table below:  ### Action Parameters  | ActionType | Parameter | Description | Example | | -------- | ------- | ------- | ------- | | OCR  | ocrParseTypes | Ocr Parsing strategy to use | TEXT, FORMS, TABLES, QUERIES (requires \'ocrTextractQueries\') | | OCR  | ocrTextractQueries | Required for \"QUERIES\", questions to ask Textract | | OCR | ocrEngine     | Ocr Engine to use | tesseract or textract | | OCR | ocrOutputType     | Convert OCR result to an Output format (textract table only) | true | | OCR | ocrNumberOfPages  | Number of pages to OCR (from start) | -1 | | OCR    | addPdfDetectedCharactersAsText | PDF Documents convert images to text | true or false | | DATA_CLASSIFICATION | llmPromptEntityName | LLM Prompt Entity Name | | FULLTEXT    | characterMax    | Maximum number of characters to add to Fulltext destination | -1 | | DOCUMENTTAGGING    | engine    | Tagging Engine to use | chatgpt | | DOCUMENTTAGGING    | tags    | Comma-deliminted list of keywords | author,title,description | | WEBHOOK    | url    | Webhook URL | https://yourdomain.com/webhook-endpoint | | NOTIFICATION    | notificationType | Type of Notification | email | | NOTIFICATION    | notificationToCc    | Notification Carbon Copy | email@yourdomain.com | | NOTIFICATION    | notificationToBcc    | Notification Blind Carbon Copy | email@yourdomain.com | | NOTIFICATION    | notificationSubject    | Notification Subject | Email Subject | | NOTIFICATION    | notificationText    | Notification as Text | Email Text | | NOTIFICATION    | notificationHtml    | Notification as Html | Email HTML Text | | QUEUE    | queueId    | Id of Queue | | | IDP    | mappingId    | Id of Mapping | | | EVENTBRIDGE    | eventBusName    | The name or ARN of the Amazon EventBridge to receive the event. | | | RESIZE    | width    | The width of the image to resize (or \'auto\'). | | | RESIZE    | height    | The height of the image to resize (or \'auto\'). | | | RESIZE    | outputType    | The output type of the image (optional). | | | RESIZE    | path    | The path to use when creating resized document (optional). | |

### Example

```typescript
import {
    DocumentActionsApi,
    Configuration,
    AddDocumentActionsRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentActionsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let addDocumentActionsRequest: AddDocumentActionsRequest; // (optional)

const { status, data } = await apiInstance.addDocumentActions(
    documentId,
    siteId,
    addDocumentActionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocumentActionsRequest** | **AddDocumentActionsRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**AddDocumentActionsResponse**

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

# **addDocumentRetryAction**
> AddDocumentActionsRetryResponse addDocumentRetryAction()

Retries all failed document action(s). Failed action status changes to \"FAILED_RETRY\" and a new \"PENDING\" action is created.

### Example

```typescript
import {
    DocumentActionsApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentActionsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addDocumentRetryAction(
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

**AddDocumentActionsRetryResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
|**400** | 400 OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDocumentActions**
> GetDocumentActionsResponse getDocumentActions()

Get document actions and their status

### Example

```typescript
import {
    DocumentActionsApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentActionsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let shareKey: string; //Share Identifier (optional) (default to undefined)
let next: string; //Next page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentActions(
    documentId,
    siteId,
    limit,
    shareKey,
    next
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|
| **shareKey** | [**string**] | Share Identifier | (optional) defaults to undefined|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|


### Return type

**GetDocumentActionsResponse**

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

