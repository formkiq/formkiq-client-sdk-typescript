# DocumentSearchApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**documentSearch**](#documentsearch) | **POST** /search | Document search|

# **documentSearch**
> DocumentSearchResponse documentSearch(documentSearchRequest)

Document search query request;   Supports searching DynamoDB for document(s) by a single TAG key and/or value. Value can be \"exacted\" or \"begins_with\" matched. Search can be filtered to only check certain documentIds (up to 100 documentIds accepted).  If using Enteprise Composite Keys feature then multiple tag(s) can be searched for.  For attributes defined with dataType JSON, use an attribute criterion\'s json filter with a path to compare a nested field. The eq and eqOr operators accept strings, including inside json filters. Match JSON boolean fields using the strings \"true\" or \"false\". Compare JSON numeric fields using gt, gte, lt, and lte. Paths support object properties and explicit array positions; wildcard, recursive, and array any-element matching are not supported. Multiple conditions on different paths under the same attribute key are supported. All conditions must match the same document or artifact.  JSON path filtering is applied after candidate records are read and does not reduce read capacity consumed for those candidates. A stored JSON value does not automatically create an index for its nested fields. Continue through empty filtered pages until the next token is absent; candidate and time-budget limits still apply.  If Typesense is enabled, full text search is supported through the \"text\" parameter. Full text search will look for the text in the \"content\" and/or document \"metadata\".  When `documentIds` is supplied, all supplied IDs are checked against the search criteria and all matching documents are returned. The `limit` query parameter is ignored. Up to 100 document IDs are accepted.  Use the `projection` parameter to return matching documents or a count of matching documents. Count responses are capped at 10,000 and indicate when the count was truncated. Multi-attribute searches requiring additional attribute filtering use a 25-second processing budget for index batches, attribute filtering, and document loading. The budget starts after index selection and empty-index prechecks. Searches with explicit `documentIds` or a composite key covering every search attribute are exempt. The budget is checked before starting each read; an in-flight read is allowed to finish. If the budget expires, document searches return completed matches with `truncated=true` and a `next` token; count searches return a partial lower bound with `truncated=true`.  See requestBody examples below for commmon examples.

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
let projection: 'DOCUMENTS' | 'COUNT'; //Controls the search response projection. `DOCUMENTS` returns matching documents and pagination tokens. `COUNT` returns `count` and `truncated`, and omits `documents`, `next`, and `previous`. (optional) (default to 'DOCUMENTS')

const { status, data } = await apiInstance.documentSearch(
    documentSearchRequest,
    siteId,
    limit,
    next,
    previous,
    projection
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
| **projection** | [**&#39;DOCUMENTS&#39; | &#39;COUNT&#39;**]**Array<&#39;DOCUMENTS&#39; &#124; &#39;COUNT&#39;>** | Controls the search response projection. &#x60;DOCUMENTS&#x60; returns matching documents and pagination tokens. &#x60;COUNT&#x60; returns &#x60;count&#x60; and &#x60;truncated&#x60;, and omits &#x60;documents&#x60;, &#x60;next&#x60;, and &#x60;previous&#x60;. | (optional) defaults to 'DOCUMENTS'|


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
|**400** | Invalid attribute search value, JSON path, or operator combination. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

