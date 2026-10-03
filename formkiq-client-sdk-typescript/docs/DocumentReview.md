# DocumentReview


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentId** | **string** | Document Identifier | [optional] [default to undefined]
**artifactId** | **string** | Artifact Identifier | [optional] [default to undefined]
**reviewId** | **string** | Review Identifier | [optional] [default to undefined]
**reviewCategory** | **string** | Review category | [optional] [default to undefined]
**reviewStatus** | [**DocumentReviewStatus**](DocumentReviewStatus.md) |  | [optional] [default to undefined]
**approvalGroups** | **Array&lt;string&gt;** | Optional approval groups used for additional credential verification when submitting a decision to POST /documents/{documentId}/reviews/{reviewId}/decisions. The caller must belong to at least one of the listed groups, in addition to satisfying the existing authorization requirements. | [optional] [default to undefined]
**requiredDecisions** | **number** | Number of decisions required to complete the review | [optional] [default to undefined]
**userId** | **string** | User who added review | [optional] [default to undefined]
**comments** | **string** | Review comments | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**lastModifiedDate** | **string** | Last Modified Timestamp | [optional] [default to undefined]

## Example

```typescript
import { DocumentReview } from 'formkiq-client-sdk-typescript';

const instance: DocumentReview = {
    documentId,
    artifactId,
    reviewId,
    reviewCategory,
    reviewStatus,
    approvalGroups,
    requiredDecisions,
    userId,
    comments,
    insertedDate,
    lastModifiedDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
