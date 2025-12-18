# TagIndexApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**indexSearch**](#indexsearch) | **POST** /indices/search | |

# **indexSearch**
> IndexSearchResponse indexSearch(indexSearchRequest)

Perform a search on a index; this is currently available for both folder and tag indices

### Example

```typescript
import {
    TagIndexApi,
    Configuration,
    IndexSearchRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new TagIndexApi(configuration);

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

