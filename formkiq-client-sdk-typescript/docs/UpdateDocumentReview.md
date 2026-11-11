# UpdateDocumentReview


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reviewStatus** | [**DocumentReviewStatus**](DocumentReviewStatus.md) |  | [optional] [default to undefined]
**requiredDecisions** | **number** | Number of decision records matching countedDecisionTypes required to complete the review. Changes apply when subsequent counted decisions are submitted. | [optional] [default to undefined]
**countedDecisionTypes** | [**Set&lt;ReviewDecisionType&gt;**](ReviewDecisionType.md) | Replacement types of decision records that count toward requiredDecisions. Omission or null preserves the effective current policy; it does not reset it to [APPROVAL]. Changes apply when subsequent counted decisions are submitted, counting existing records against the updated policy. This does not restrict submissions. Empty arrays, duplicate entries, unknown types, and non-string entries are rejected. | [optional] [default to undefined]
**comments** | **string** | Review comments | [optional] [default to undefined]

## Example

```typescript
import { UpdateDocumentReview } from 'formkiq-client-sdk-typescript';

const instance: UpdateDocumentReview = {
    reviewStatus,
    requiredDecisions,
    countedDecisionTypes,
    comments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
