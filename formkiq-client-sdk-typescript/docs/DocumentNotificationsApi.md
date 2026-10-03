# DocumentNotificationsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addDocumentNotification**](#adddocumentnotification) | **POST** /documents/{documentId}/notifications | Add an ad hoc document notification|
|[**getDocumentNotifications**](#getdocumentnotifications) | **GET** /documents/{documentId}/notifications | Get document notifications|
|[**getUserNotifications**](#getusernotifications) | **GET** /userNotifications | Get user notifications|

# **addDocumentNotification**
> AddDocumentNotificationResponse addDocumentNotification(addDocumentNotificationRequest)

Queue an ad hoc notification for a document or one of its artifacts

### Example

```typescript
import {
    DocumentNotificationsApi,
    Configuration,
    AddDocumentNotificationRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentNotificationsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let addDocumentNotificationRequest: AddDocumentNotificationRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addDocumentNotification(
    documentId,
    addDocumentNotificationRequest,
    siteId,
    artifactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocumentNotificationRequest** | **AddDocumentNotificationRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


### Return type

**AddDocumentNotificationResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** | Notification accepted for delivery |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
|**400** | Invalid notification request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDocumentNotifications**
> GetDocumentNotificationsResponse getDocumentNotifications()

Get notifications attached to a document or one of its artifacts

### Example

```typescript
import {
    DocumentNotificationsApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentNotificationsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let next: string; //Next page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentNotifications(
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

**GetDocumentNotificationsResponse**

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

# **getUserNotifications**
> GetUserNotificationsResponse getUserNotifications()

Retrieve notifications where the authenticated user\'s email is a CC or BCC recipient

### Example

```typescript
import {
    DocumentNotificationsApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentNotificationsApi(configuration);

let siteId: string; //Site Identifier (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let next: string; //Next page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.getUserNotifications(
    siteId,
    limit,
    next
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|


### Return type

**GetUserNotificationsResponse**

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

