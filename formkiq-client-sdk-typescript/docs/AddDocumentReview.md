# AddDocumentReview


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reviewCategory** | **string** | Review category | [default to undefined]
**reviewStatus** | [**DocumentReviewStatus**](DocumentReviewStatus.md) |  | [optional] [default to undefined]
**requiredDecisions** | **number** | Number of decisions required to complete the review | [default to undefined]
**comments** | **string** | Review comments | [optional] [default to undefined]

## Example

```typescript
import { AddDocumentReview } from 'formkiq-client-sdk-typescript';

const instance: AddDocumentReview = {
    reviewCategory,
    reviewStatus,
    requiredDecisions,
    comments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
