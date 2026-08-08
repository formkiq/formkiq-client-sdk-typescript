# DocumentReviewDecision


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentId** | **string** | Document Identifier | [optional] [default to undefined]
**artifactId** | **string** | Artifact Identifier | [optional] [default to undefined]
**reviewId** | **string** | Review Identifier | [optional] [default to undefined]
**decisionId** | **string** | Decision Identifier | [optional] [default to undefined]
**type** | [**ReviewDecisionType**](ReviewDecisionType.md) |  | [optional] [default to undefined]
**decision** | **string** | Review decision | [optional] [default to undefined]
**comment** | **string** | Review decision comment | [optional] [default to undefined]
**userId** | **string** | User who added decision | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]

## Example

```typescript
import { DocumentReviewDecision } from 'formkiq-client-sdk-typescript';

const instance: DocumentReviewDecision = {
    documentId,
    artifactId,
    reviewId,
    decisionId,
    type,
    decision,
    comment,
    userId,
    insertedDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
