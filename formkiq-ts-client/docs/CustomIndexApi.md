# CustomIndexApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteIndex**](#deleteindex) | **DELETE** /indices/{indexType}/{indexKey} | |
|[**indexFolderMove**](#indexfoldermove) | **POST** /indices/{indexType}/move | |
|[**indexSearch**](#indexsearch) | **POST** /indices/search | |

# **deleteIndex**
> DeleteIndicesResponse deleteIndex()

Perform a delete on the Folder Index.  When deleting a file from the \"folder\" index, you can set the indexKey to a URLEncoded path variable.

### Example

```typescript
import {
    CustomIndexApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CustomIndexApi(configuration);

let indexKey: string; //Index Key Identifier (default to undefined)
let indexType: string; //Index Type (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteIndex(
    indexKey,
    indexType,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **indexKey** | [**string**] | Index Key Identifier | defaults to undefined|
| **indexType** | [**string**] | Index Type | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**DeleteIndicesResponse**

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

# **indexFolderMove**
> IndexFolderMoveResponse indexFolderMove(indexFolderMoveRequest)

Perform an Folder Index Move

### Example

```typescript
import {
    CustomIndexApi,
    Configuration,
    IndexFolderMoveRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CustomIndexApi(configuration);

let indexType: string; //Index Type (default to undefined)
let indexFolderMoveRequest: IndexFolderMoveRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.indexFolderMove(
    indexType,
    indexFolderMoveRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **indexFolderMoveRequest** | **IndexFolderMoveRequest**|  | |
| **indexType** | [**string**] | Index Type | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**IndexFolderMoveResponse**

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

# **indexSearch**
> IndexSearchResponse indexSearch(indexSearchRequest)

Perform a search on a index; this is currently available for both folder and tag indices

### Example

```typescript
import {
    CustomIndexApi,
    Configuration,
    IndexSearchRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new CustomIndexApi(configuration);

let indexSearchRequest: IndexSearchRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let next: string; //Next page of results token (optional) (default to undefined)
let previous: string; //Previous page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.indexSearch(
    indexSearchRequest,
    siteId,
    limit,
    next,
    previous
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **indexSearchRequest** | **IndexSearchRequest**|  | |
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|
| **previous** | [**string**] | Previous page of results token | (optional) defaults to undefined|


### Return type

**IndexSearchResponse**

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

