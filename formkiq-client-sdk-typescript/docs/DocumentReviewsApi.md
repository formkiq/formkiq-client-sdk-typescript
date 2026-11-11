# DocumentReviewsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addDocumentReview**](#adddocumentreview) | **POST** /documents/{documentId}/reviews | Add document review|
|[**addDocumentReviewDecision**](#adddocumentreviewdecision) | **POST** /documents/{documentId}/reviews/{reviewId}/decisions | Add document review decision|
|[**getDocumentReview**](#getdocumentreview) | **GET** /documents/{documentId}/reviews/{reviewId} | Get document review|
|[**getDocumentReviewDecisions**](#getdocumentreviewdecisions) | **GET** /documents/{documentId}/reviews/{reviewId}/decisions | Get document review decisions|
|[**getDocumentReviews**](#getdocumentreviews) | **GET** /documents/{documentId}/reviews | Get document reviews|
|[**updateDocumentReview**](#updatedocumentreview) | **PATCH** /documents/{documentId}/reviews/{reviewId} | Update document review|

# **addDocumentReview**
> AddDocumentReviewResponse addDocumentReview(addDocumentReviewRequest)

Add a review to a document. When notifications are supplied, queue each notification for delivery when the review is created. Omitted or null countedDecisionTypes defaults to [APPROVAL]. Only decision records of the configured types count toward requiredDecisions; other supported types may still be submitted. The same counting policy applies to document-level and artifact-scoped reviews.

### Example

```typescript
import {
    DocumentReviewsApi,
    Configuration,
    AddDocumentReviewRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentReviewsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let addDocumentReviewRequest: AddDocumentReviewRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addDocumentReview(
    documentId,
    addDocumentReviewRequest,
    siteId,
    artifactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocumentReviewRequest** | **AddDocumentReviewRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


### Return type

**AddDocumentReviewResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | 201 CREATED |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
|**400** | Invalid review configuration, including empty, duplicate, unknown, or non-string countedDecisionTypes entries. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addDocumentReviewDecision**
> AddDocumentReviewDecisionResponse addDocumentReviewDecision(addDocumentReviewDecisionRequest)

Add a decision to a document review. When approvalGroups is set on the review, the caller must belong to at least one of those groups, in addition to satisfying the existing authorization requirements, before the decision is added. Every accepted submission is retained with its own decision ID, author, timestamp, and content. countedDecisionTypes selects records that contribute to requiredDecisions; it does not restrict which supported types may be submitted. Counting uses decision records, not distinct reviewers. APPROVAL records count regardless of their decision value. With the default [APPROVAL] policy, COMMENT, RECOMMENDATION, and ACKNOWLEDGMENT may be submitted repeatedly by the same authorized user while the review is open. A non-counting submission may move PENDING to IN_PROGRESS, but cannot complete the review or trigger completion-dependent processing. It does not automatically create a follow-up review or downstream action; an explicitly supplied follow-up review uses the same counting-policy defaults and validation as ordinary review creation. Completion occurs when the qualifying count reaches or exceeds requiredDecisions. Decisions submitted to a review that is already COMPLETED return 409 Conflict without creating a decision, follow-up review, notification, or activity record.

### Example

```typescript
import {
    DocumentReviewsApi,
    Configuration,
    AddDocumentReviewDecisionRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentReviewsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let reviewId: string; //Review Identifier (default to undefined)
let addDocumentReviewDecisionRequest: AddDocumentReviewDecisionRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addDocumentReviewDecision(
    documentId,
    reviewId,
    addDocumentReviewDecisionRequest,
    siteId,
    artifactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocumentReviewDecisionRequest** | **AddDocumentReviewDecisionRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **reviewId** | [**string**] | Review Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


### Return type

**AddDocumentReviewDecisionResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | 201 CREATED |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
|**400** | Invalid decision or explicitly requested follow-up review configuration. |  -  |
|**409** | The review is already complete. No decision was created. |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDocumentReview**
> GetDocumentReviewResponse getDocumentReview()

Get a document review by review id, including its effective countedDecisionTypes policy. Reviews stored without an explicit policy return [APPROVAL]; historical completed reviews retain their status.

### Example

```typescript
import {
    DocumentReviewsApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentReviewsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let reviewId: string; //Review Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentReview(
    documentId,
    reviewId,
    siteId,
    artifactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **reviewId** | [**string**] | Review Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


### Return type

**GetDocumentReviewResponse**

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

# **getDocumentReviewDecisions**
> GetDocumentReviewDecisionsResponse getDocumentReviewDecisions()

Get a listing of all decisions for a document review, including records whose types do not count toward completion.

### Example

```typescript
import {
    DocumentReviewsApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentReviewsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let reviewId: string; //Review Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let next: string; //Next page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentReviewDecisions(
    documentId,
    reviewId,
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
| **reviewId** | [**string**] | Review Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|


### Return type

**GetDocumentReviewDecisionsResponse**

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

# **getDocumentReviews**
> GetDocumentReviewsResponse getDocumentReviews()

Get a listing of reviews for a document, including the effective countedDecisionTypes policy for each review.

### Example

```typescript
import {
    DocumentReviewsApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentReviewsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let next: string; //Next page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentReviews(
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

**GetDocumentReviewsResponse**

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

# **updateDocumentReview**
> UpdateResponse updateDocumentReview(updateDocumentReviewRequest)

Update a document review by review id. Omitted properties retain their existing values. Changes to countedDecisionTypes or requiredDecisions apply when subsequent counted decisions are submitted. Updating the counting configuration does not change reviewStatus.

### Example

```typescript
import {
    DocumentReviewsApi,
    Configuration,
    UpdateDocumentReviewRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new DocumentReviewsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let reviewId: string; //Review Identifier (default to undefined)
let updateDocumentReviewRequest: UpdateDocumentReviewRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.updateDocumentReview(
    documentId,
    reviewId,
    updateDocumentReviewRequest,
    siteId,
    artifactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateDocumentReviewRequest** | **UpdateDocumentReviewRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **reviewId** | [**string**] | Review Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


### Return type

**UpdateResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
|**400** | Invalid review configuration, including empty, duplicate, unknown, or non-string countedDecisionTypes entries. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

