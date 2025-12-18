# ExamineObjectsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getExaminePdf**](#getexaminepdf) | **GET** /objects/examine/{id}/pdf | Add Examine Pdf|
|[**getExaminePdfUrl**](#getexaminepdfurl) | **GET** /objects/examine/pdf | Add Examine Pdf|

# **getExaminePdf**
> GetExaminePdfResponse getExaminePdf()

Get PDF details  File must have been uploaded previously using the GET /objects/examine/pdf API.

### Example

```typescript
import {
    ExamineObjectsApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ExamineObjectsApi(configuration);

let id: string; //Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getExaminePdf(
    id,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**GetExaminePdfResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | 201 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getExaminePdfUrl**
> GetExaminePdfUrlResponse getExaminePdfUrl()

Get Signed URL for PDF Object Upload of a document to be examined by calling GET /objects/examine/{id}/pdf

### Example

```typescript
import {
    ExamineObjectsApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ExamineObjectsApi(configuration);

let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getExaminePdfUrl(
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**GetExaminePdfUrlResponse**

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

