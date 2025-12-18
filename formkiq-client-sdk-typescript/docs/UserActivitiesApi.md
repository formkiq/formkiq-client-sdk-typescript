# UserActivitiesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getDocumentUserActivities**](#getdocumentuseractivities) | **GET** /documents/{documentId}/userActivities | Get user activities for a document|
|[**getResourceActivities**](#getresourceactivities) | **GET** /activities | Get resource activities|
|[**getUserActivities**](#getuseractivities) | **GET** /userActivities | Get user activities|

# **getDocumentUserActivities**
> GetUserActivitesResponse getDocumentUserActivities()

Retrieve a user\'s activities for a document

### Example

```typescript
import {
    UserActivitiesApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new UserActivitiesApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let next: string; //Next page of results token (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')

const { status, data } = await apiInstance.getDocumentUserActivities(
    documentId,
    siteId,
    next,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|


### Return type

**GetUserActivitesResponse**

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

# **getResourceActivities**
> GetActivitesResponse getResourceActivities()

Retrieve an resource activities

### Example

```typescript
import {
    UserActivitiesApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new UserActivitiesApi(configuration);

let siteId: string; //Site Identifier (optional) (default to undefined)
let documentId: string; //Document Identifier (optional) (default to undefined)
let entityTypeId: string; //EntityType Identifier (optional) (default to undefined)
let namespace: 'PRESET' | 'CUSTOM'; //Namespace Identifier (optional) (default to undefined)
let entityId: string; //Entity Identifier (optional) (default to undefined)
let start: string; //Start of date-time range (UTC) (optional) (default to undefined)
let end: string; //End of date-time range (UTC) (optional) (default to undefined)
let sort: 'ASC' | 'DESC'; //Sort order (default DESC) (optional) (default to undefined)
let next: string; //Next page of results token (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let userId: string; //Fetch specific user activities (optional) (default to undefined)

const { status, data } = await apiInstance.getResourceActivities(
    siteId,
    documentId,
    entityTypeId,
    namespace,
    entityId,
    start,
    end,
    sort,
    next,
    limit,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **documentId** | [**string**] | Document Identifier | (optional) defaults to undefined|
| **entityTypeId** | [**string**] | EntityType Identifier | (optional) defaults to undefined|
| **namespace** | [**&#39;PRESET&#39; | &#39;CUSTOM&#39;**]**Array<&#39;PRESET&#39; &#124; &#39;CUSTOM&#39;>** | Namespace Identifier | (optional) defaults to undefined|
| **entityId** | [**string**] | Entity Identifier | (optional) defaults to undefined|
| **start** | [**string**] | Start of date-time range (UTC) | (optional) defaults to undefined|
| **end** | [**string**] | End of date-time range (UTC) | (optional) defaults to undefined|
| **sort** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order (default DESC) | (optional) defaults to undefined|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|
| **userId** | [**string**] | Fetch specific user activities | (optional) defaults to undefined|


### Return type

**GetActivitesResponse**

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

# **getUserActivities**
> GetUserActivitesResponse getUserActivities()

Retrieve a user\'s activities

### Example

```typescript
import {
    UserActivitiesApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new UserActivitiesApi(configuration);

let siteId: string; //Site Identifier (optional) (default to undefined)
let next: string; //Next page of results token (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let userId: string; //Fetch specific user activities (optional) (default to undefined)

const { status, data } = await apiInstance.getUserActivities(
    siteId,
    next,
    limit,
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|
| **userId** | [**string**] | Fetch specific user activities | (optional) defaults to undefined|


### Return type

**GetUserActivitesResponse**

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

