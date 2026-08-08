# WorkflowStepConditionAttributeValueComparisonAggregate

Uses an aggregate over another document attribute\'s values as the right-side comparison value. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributeKey** | **string** | Document attribute key whose values are aggregated for comparison. | [default to undefined]
**aggregateType** | [**WorkflowStepConditionAttributeAggregateType**](WorkflowStepConditionAttributeAggregateType.md) |  | [default to undefined]

## Example

```typescript
import { WorkflowStepConditionAttributeValueComparisonAggregate } from 'formkiq-client-sdk-typescript';

const instance: WorkflowStepConditionAttributeValueComparisonAggregate = {
    attributeKey,
    aggregateType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
