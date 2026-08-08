# ShortlinksApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addShortlink**](#addshortlink) | **POST** /shortlinks | Add shortlink|

# **addShortlink**
> AddShortlinkResponse addShortlink(addShortlinkRequest)

Create a shortlink for a target URL

### Example

```typescript
import {
    ShortlinksApi,
    Configuration,
    AddShortlinkRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ShortlinksApi(configuration);

let addShortlinkRequest: AddShortlinkRequest; //

const { status, data } = await apiInstance.addShortlink(
    addShortlinkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addShortlinkRequest** | **AddShortlinkRequest**|  | |


### Return type

**AddShortlinkResponse**

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

