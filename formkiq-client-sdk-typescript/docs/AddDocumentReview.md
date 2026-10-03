# AddDocumentReview


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reviewCategory** | **string** | Review category | [default to undefined]
**reviewStatus** | [**DocumentReviewStatus**](DocumentReviewStatus.md) |  | [optional] [default to undefined]
**approvalGroups** | **Array&lt;string&gt;** | Optional approval groups used for additional credential verification when submitting a decision to POST /documents/{documentId}/reviews/{reviewId}/decisions. The caller must belong to at least one of the listed groups, in addition to satisfying the existing authorization requirements. | [optional] [default to undefined]
**requiredDecisions** | **number** | Number of decisions required to complete the review | [default to undefined]
**notifications** | [**Array&lt;AddDocumentNotificationRequest&gt;**](AddDocumentNotificationRequest.md) | Optional notifications to queue for delivery when the review is created. An empty list sends no notifications. | [optional] [default to undefined]
**comments** | **string** | Review comments | [optional] [default to undefined]

## Example

```typescript
import { AddDocumentReview } from 'formkiq-client-sdk-typescript';

const instance: AddDocumentReview = {
    reviewCategory,
    reviewStatus,
    approvalGroups,
    requiredDecisions,
    notifications,
    comments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
