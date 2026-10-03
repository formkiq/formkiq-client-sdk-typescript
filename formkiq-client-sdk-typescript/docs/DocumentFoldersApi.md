# DocumentFoldersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addFolder**](#addfolder) | **POST** /folders | Add document folder|
|[**deleteFolder**](#deletefolder) | **DELETE** /folders/{indexKey} | Delete document folder|
|[**getFolderDocuments**](#getfolderdocuments) | **GET** /folders | Get document folders|
|[**getFolderPermissions**](#getfolderpermissions) | **GET** /folders/{indexKey}/permissions | Get folder permissions|
|[**moveFolder**](#movefolder) | **POST** /folders/{indexKey}/moves | Move document folder|
|[**setFolderPermissions**](#setfolderpermissions) | **PUT** /folders/permissions | Sets Folder Permissions|

# **addFolder**
> AddFolderResponse addFolder(addFolderRequest)

Creates a new folder

### Example

```typescript
import {
    DocumentFoldersApi,
    Configuration,
    AddFolderRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentFoldersApi(configuration);

let addFolderRequest: AddFolderRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let shareKey: string; //Share Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addFolder(
    addFolderRequest,
    siteId,
    shareKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addFolderRequest** | **AddFolderRequest**|  | |
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **shareKey** | [**string**] | Share Identifier | (optional) defaults to undefined|


### Return type

**AddFolderResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | 201 CREATED |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteFolder**
> DeleteFolderResponse deleteFolder()

Delete a specific folder; folder must be empty

### Example

```typescript
import {
    DocumentFoldersApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentFoldersApi(configuration);

let indexKey: string; //Index Key Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let shareKey: string; //Share Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteFolder(
    indexKey,
    siteId,
    shareKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **indexKey** | [**string**] | Index Key Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **shareKey** | [**string**] | Share Identifier | (optional) defaults to undefined|


### Return type

**DeleteFolderResponse**

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

# **getFolderDocuments**
> GetFoldersResponse getFolderDocuments()

Get list of documents in a folder

### Example

```typescript
import {
    DocumentFoldersApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentFoldersApi(configuration);

let siteId: string; //Site Identifier (optional) (default to undefined)
let indexKey: string; //Index Key Identifier (optional) (default to undefined)
let path: string; //Path query parameter (must be URL Encoded) (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let shareKey: string; //Share Identifier (optional) (default to undefined)
let next: string; //Next page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.getFolderDocuments(
    siteId,
    indexKey,
    path,
    limit,
    shareKey,
    next
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **indexKey** | [**string**] | Index Key Identifier | (optional) defaults to undefined|
| **path** | [**string**] | Path query parameter (must be URL Encoded) | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|
| **shareKey** | [**string**] | Share Identifier | (optional) defaults to undefined|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|


### Return type

**GetFoldersResponse**

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

# **getFolderPermissions**
> GetFolderPermissionsResponse getFolderPermissions()

Get list of permissions for a folder

### Example

```typescript
import {
    DocumentFoldersApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentFoldersApi(configuration);

let indexKey: string; //Index Key Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getFolderPermissions(
    indexKey,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **indexKey** | [**string**] | Index Key Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**GetFolderPermissionsResponse**

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

# **moveFolder**
> MoveFolderResponse moveFolder(moveFolderRequest)

Creates an asynchronous folder move request

### Example

```typescript
import {
    DocumentFoldersApi,
    Configuration,
    MoveFolderRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentFoldersApi(configuration);

let indexKey: string; //Index Key Identifier (default to undefined)
let moveFolderRequest: MoveFolderRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.moveFolder(
    indexKey,
    moveFolderRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **moveFolderRequest** | **MoveFolderRequest**|  | |
| **indexKey** | [**string**] | Index Key Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**MoveFolderResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | 201 CREATED |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setFolderPermissions**
> SetResponse setFolderPermissions(setFolderPermissionsRequest)

Sets a folders permissions  NOTE: Can only be called be ADMIN or GOVERN.

### Example

```typescript
import {
    DocumentFoldersApi,
    Configuration,
    SetFolderPermissionsRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentFoldersApi(configuration);

let setFolderPermissionsRequest: SetFolderPermissionsRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.setFolderPermissions(
    setFolderPermissionsRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setFolderPermissionsRequest** | **SetFolderPermissionsRequest**|  | |
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**SetResponse**

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

