# UpdateDocumentReview


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reviewStatus** | [**DocumentReviewStatus**](DocumentReviewStatus.md) |  | [optional] [default to undefined]
**requiredDecisions** | **number** | Number of decisions required to complete the review | [optional] [default to undefined]
**comments** | **string** | Review comments | [optional] [default to undefined]

## Example

```typescript
import { UpdateDocumentReview } from 'formkiq-client-sdk-typescript';

const instance: UpdateDocumentReview = {
    reviewStatus,
    requiredDecisions,
    comments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
