# DocumentSearchApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**documentSearch**](#documentsearch) | **POST** /search | Document search|

# **documentSearch**
> DocumentSearchResponse documentSearch(documentSearchRequest)

Document search query request;   Supports searching DynamoDB for document(s) by a single TAG key and/or value. Value can be \"exacted\" or \"begins_with\" matched. Search can be filtered to only check certain documentIds (up to 100 documentIds accepted).  If using Enteprise Composite Keys feature then multiple tag(s) can be searched for.  If Typesense is enabled, full text search is supported through the \"text\" parameter. Full text search will look for the text in the \"content\" and/or document \"metadata\".  DocumentIds parameter allows you to filter your results to a specific set of documents.   See requestBody examples below for commmon examples.

### Example

```typescript
import {
    DocumentSearchApi,
    Configuration,
    DocumentSearchRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentSearchApi(configuration);

let documentSearchRequest: DocumentSearchRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let next: string; //Next page of results token (optional) (default to undefined)
let previous: string; //Previous page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.documentSearch(
    documentSearchRequest,
    siteId,
    limit,
    next,
    previous
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentSearchRequest** | **DocumentSearchRequest**|  | |
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|
| **previous** | [**string**] | Previous page of results token | (optional) defaults to undefined|


### Return type

**DocumentSearchResponse**

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

