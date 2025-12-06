# CaseManagementApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addCase**](#addcase) | **POST** /cases | Add New Case|
|[**addNigo**](#addnigo) | **POST** /cases/{caseId}/nigos | Add New Nigo|
|[**addTask**](#addtask) | **POST** /cases/{caseId}/tasks | Add New Task|
|[**deleteCase**](#deletecase) | **DELETE** /cases/{caseId} | Delete Case|
|[**deleteCaseDocument**](#deletecasedocument) | **DELETE** /cases/{caseId}/documents/{documentId} | Delete Document from Case|
|[**deleteNigo**](#deletenigo) | **DELETE** /cases/{caseId}/nigos/{nigoId} | Delete Nigo|
|[**deleteNigoDocument**](#deletenigodocument) | **DELETE** /cases/{caseId}/nigos/{nigoId}/documents/{documentId} | Delete Document from Nigo|
|[**deleteTask**](#deletetask) | **DELETE** /cases/{caseId}/tasks/{taskId} | Delete Task|
|[**deleteTaskDocument**](#deletetaskdocument) | **DELETE** /cases/{caseId}/tasks/{taskId}/documents/{documentId} | Delete Document from Task|
|[**getCase**](#getcase) | **GET** /cases/{caseId} | Get Case details|
|[**getCaseDocuments**](#getcasedocuments) | **GET** /cases/{caseId}/documents | Get list of document in a case|
|[**getCaseNigo**](#getcasenigo) | **GET** /cases/{caseId}/nigos/{nigoId} | Get nigo in a case|
|[**getCaseNigos**](#getcasenigos) | **GET** /cases/{caseId}/nigos | Get list of Nigos in a case|
|[**getCaseTask**](#getcasetask) | **GET** /cases/{caseId}/tasks/{taskId} | Get task in a case|
|[**getCaseTasks**](#getcasetasks) | **GET** /cases/{caseId}/tasks | Get list of tasks in a case|
|[**getCases**](#getcases) | **GET** /cases | Get Case listing|
|[**getNigoDocuments**](#getnigodocuments) | **GET** /cases/{caseId}/nigos/{nigoId}/documents | Get list of document in a task|
|[**getTaskDocuments**](#gettaskdocuments) | **GET** /cases/{caseId}/tasks/{taskId}/documents | Get list of document in a task|
|[**updateCase**](#updatecase) | **PATCH** /cases/{caseId} | Update existing Case|
|[**updateNigo**](#updatenigo) | **PATCH** /cases/{caseId}/nigos/{nigoId} | Update existing Nigo|
|[**updateTask**](#updatetask) | **PATCH** /cases/{caseId}/tasks/{taskId} | Update existing Task|

# **addCase**
> AddCaseResponse addCase(addCaseRequest)

Adds new case; available as an Add-On Module

### Example

```typescript
import {
    CaseManagementApi,
    Configuration,
    AddCaseRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CaseManagementApi(configuration);

let addCaseRequest: AddCaseRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addCase(
    addCaseRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addCaseRequest** | **AddCaseRequest**|  | |
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**AddCaseResponse**

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

# **addNigo**
> AddNigoResponse addNigo(addNigoRequest)

Adds new nigo; available as an Add-On Module

### Example

```typescript
import {
    CaseManagementApi,
    Configuration,
    AddNigoRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CaseManagementApi(configuration);

let caseId: string; //Case Identifier (default to undefined)
let addNigoRequest: AddNigoRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addNigo(
    caseId,
    addNigoRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addNigoRequest** | **AddNigoRequest**|  | |
| **caseId** | [**string**] | Case Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**AddNigoResponse**

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

# **addTask**
> AddTaskResponse addTask(addTaskRequest)

Adds new task; available as an Add-On Module

### Example

```typescript
import {
    CaseManagementApi,
    Configuration,
    AddTaskRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CaseManagementApi(configuration);

let caseId: string; //Case Identifier (default to undefined)
let addTaskRequest: AddTaskRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addTask(
    caseId,
    addTaskRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addTaskRequest** | **AddTaskRequest**|  | |
| **caseId** | [**string**] | Case Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**AddTaskResponse**

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

# **deleteCase**
> DeleteCaseResponse deleteCase()

Delete Case

### Example

```typescript
import {
    CaseManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CaseManagementApi(configuration);

let caseId: string; //Case Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteCase(
    caseId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **caseId** | [**string**] | Case Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**DeleteCaseResponse**

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

# **deleteCaseDocument**
> DeleteCaseDocumentResponse deleteCaseDocument()

Delete Document from Case

### Example

```typescript
import {
    CaseManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CaseManagementApi(configuration);

let caseId: string; //Case Identifier (default to undefined)
let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteCaseDocument(
    caseId,
    documentId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **caseId** | [**string**] | Case Identifier | defaults to undefined|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**DeleteCaseDocumentResponse**

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

# **deleteNigo**
> DeleteCaseNigoResponse deleteNigo()

Delete Nigo

### Example

```typescript
import {
    CaseManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CaseManagementApi(configuration);

let caseId: string; //Case Identifier (default to undefined)
let nigoId: string; //Nigo Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteNigo(
    caseId,
    nigoId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **caseId** | [**string**] | Case Identifier | defaults to undefined|
| **nigoId** | [**string**] | Nigo Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**DeleteCaseNigoResponse**

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

# **deleteNigoDocument**
> DeleteCaseNigoDocumentResponse deleteNigoDocument()

Delete Document from Nigo

### Example

```typescript
import {
    CaseManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CaseManagementApi(configuration);

let caseId: string; //Case Identifier (default to undefined)
let nigoId: string; //Nigo Identifier (default to undefined)
let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteNigoDocument(
    caseId,
    nigoId,
    documentId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **caseId** | [**string**] | Case Identifier | defaults to undefined|
| **nigoId** | [**string**] | Nigo Identifier | defaults to undefined|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**DeleteCaseNigoDocumentResponse**

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

# **deleteTask**
> DeleteCaseTaskResponse deleteTask()

Delete Task

### Example

```typescript
import {
    CaseManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CaseManagementApi(configuration);

let caseId: string; //Case Identifier (default to undefined)
let taskId: string; //Task Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteTask(
    caseId,
    taskId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **caseId** | [**string**] | Case Identifier | defaults to undefined|
| **taskId** | [**string**] | Task Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**DeleteCaseTaskResponse**

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

# **deleteTaskDocument**
> DeleteCaseTaskDocumentResponse deleteTaskDocument()

Delete Document from Task

### Example

```typescript
import {
    CaseManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CaseManagementApi(configuration);

let caseId: string; //Case Identifier (default to undefined)
let taskId: string; //Task Identifier (default to undefined)
let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteTaskDocument(
    caseId,
    taskId,
    documentId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **caseId** | [**string**] | Case Identifier | defaults to undefined|
| **taskId** | [**string**] | Task Identifier | defaults to undefined|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**DeleteCaseTaskDocumentResponse**

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

# **getCase**
> GetCaseResponse getCase()

Returns a Case; available as an Add-On Module

### Example

```typescript
import {
    CaseManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CaseManagementApi(configuration);

let caseId: string; //Case Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getCase(
    caseId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **caseId** | [**string**] | Case Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**GetCaseResponse**

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

# **getCaseDocuments**
> GetCaseDocumentsResponse getCaseDocuments()

Returns documents in a Case; available as an Add-On Module

### Example

```typescript
import {
    CaseManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CaseManagementApi(configuration);

let caseId: string; //Case Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let next: string; //Next page of results token (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')

const { status, data } = await apiInstance.getCaseDocuments(
    caseId,
    siteId,
    next,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **caseId** | [**string**] | Case Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|


### Return type

**GetCaseDocumentsResponse**

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

# **getCaseNigo**
> GetCaseNigoResponse getCaseNigo()

Returns a Nigo in Case; available as an Add-On Module

### Example

```typescript
import {
    CaseManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CaseManagementApi(configuration);

let caseId: string; //Case Identifier (default to undefined)
let nigoId: string; //Nigo Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getCaseNigo(
    caseId,
    nigoId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **caseId** | [**string**] | Case Identifier | defaults to undefined|
| **nigoId** | [**string**] | Nigo Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**GetCaseNigoResponse**

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

# **getCaseNigos**
> GetCaseNigosResponse getCaseNigos()

Returns a Nigos of Case; available as an Add-On Module

### Example

```typescript
import {
    CaseManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CaseManagementApi(configuration);

let caseId: string; //Case Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let next: string; //Next page of results token (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')

const { status, data } = await apiInstance.getCaseNigos(
    caseId,
    siteId,
    next,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **caseId** | [**string**] | Case Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|


### Return type

**GetCaseNigosResponse**

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

# **getCaseTask**
> GetCaseTaskResponse getCaseTask()

Returns a Task in Case; available as an Add-On Module

### Example

```typescript
import {
    CaseManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CaseManagementApi(configuration);

let caseId: string; //Case Identifier (default to undefined)
let taskId: string; //Task Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getCaseTask(
    caseId,
    taskId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **caseId** | [**string**] | Case Identifier | defaults to undefined|
| **taskId** | [**string**] | Task Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**GetCaseTaskResponse**

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

# **getCaseTasks**
> GetCaseTasksResponse getCaseTasks()

Returns a Case; available as an Add-On Module

### Example

```typescript
import {
    CaseManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CaseManagementApi(configuration);

let caseId: string; //Case Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let next: string; //Next page of results token (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')

const { status, data } = await apiInstance.getCaseTasks(
    caseId,
    siteId,
    next,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **caseId** | [**string**] | Case Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|


### Return type

**GetCaseTasksResponse**

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

# **getCases**
> GetCasesResponse getCases()

Returns a list of the Cases; available as an Add-On Module

### Example

```typescript
import {
    CaseManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CaseManagementApi(configuration);

let siteId: string; //Site Identifier (optional) (default to undefined)
let next: string; //Next page of results token (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')

const { status, data } = await apiInstance.getCases(
    siteId,
    next,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|


### Return type

**GetCasesResponse**

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

# **getNigoDocuments**
> GetCaseDocumentsResponse getNigoDocuments()

Returns a list documents in a Case; available as an Add-On Module

### Example

```typescript
import {
    CaseManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CaseManagementApi(configuration);

let caseId: string; //Case Identifier (default to undefined)
let nigoId: string; //Nigo Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let next: string; //Next page of results token (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')

const { status, data } = await apiInstance.getNigoDocuments(
    caseId,
    nigoId,
    siteId,
    next,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **caseId** | [**string**] | Case Identifier | defaults to undefined|
| **nigoId** | [**string**] | Nigo Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|


### Return type

**GetCaseDocumentsResponse**

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

# **getTaskDocuments**
> GetCaseDocumentsResponse getTaskDocuments()

Returns a list documents in a Case; available as an Add-On Module

### Example

```typescript
import {
    CaseManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CaseManagementApi(configuration);

let caseId: string; //Case Identifier (default to undefined)
let taskId: string; //Task Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let next: string; //Next page of results token (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')

const { status, data } = await apiInstance.getTaskDocuments(
    caseId,
    taskId,
    siteId,
    next,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **caseId** | [**string**] | Case Identifier | defaults to undefined|
| **taskId** | [**string**] | Task Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|


### Return type

**GetCaseDocumentsResponse**

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

# **updateCase**
> UpdateCaseResponse updateCase(updateCaseRequest)

Updates existing case; available as an Add-On Module

### Example

```typescript
import {
    CaseManagementApi,
    Configuration,
    UpdateCaseRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CaseManagementApi(configuration);

let caseId: string; //Case Identifier (default to undefined)
let updateCaseRequest: UpdateCaseRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.updateCase(
    caseId,
    updateCaseRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCaseRequest** | **UpdateCaseRequest**|  | |
| **caseId** | [**string**] | Case Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**UpdateCaseResponse**

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

# **updateNigo**
> UpdateNigoResponse updateNigo(updateNigoRequest)

Updates existing nigo; available as an Add-On Module

### Example

```typescript
import {
    CaseManagementApi,
    Configuration,
    UpdateNigoRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CaseManagementApi(configuration);

let caseId: string; //Case Identifier (default to undefined)
let nigoId: string; //Nigo Identifier (default to undefined)
let updateNigoRequest: UpdateNigoRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.updateNigo(
    caseId,
    nigoId,
    updateNigoRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateNigoRequest** | **UpdateNigoRequest**|  | |
| **caseId** | [**string**] | Case Identifier | defaults to undefined|
| **nigoId** | [**string**] | Nigo Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**UpdateNigoResponse**

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

# **updateTask**
> UpdateTaskResponse updateTask(updateTaskRequest)

Updates existing task; available as an Add-On Module

### Example

```typescript
import {
    CaseManagementApi,
    Configuration,
    UpdateTaskRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CaseManagementApi(configuration);

let caseId: string; //Case Identifier (default to undefined)
let taskId: string; //Task Identifier (default to undefined)
let updateTaskRequest: UpdateTaskRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.updateTask(
    caseId,
    taskId,
    updateTaskRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateTaskRequest** | **UpdateTaskRequest**|  | |
| **caseId** | [**string**] | Case Identifier | defaults to undefined|
| **taskId** | [**string**] | Task Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**UpdateTaskResponse**

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

