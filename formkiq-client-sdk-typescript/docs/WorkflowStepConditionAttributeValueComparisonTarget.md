# WorkflowStepConditionAttributeValueComparisonTarget

Defines the right-side comparison value for an attribute value comparison. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributeKey** | **string** | Document attribute key whose values are aggregated for comparison. | [default to undefined]
**aggregateType** | [**WorkflowStepConditionAttributeAggregateType**](WorkflowStepConditionAttributeAggregateType.md) |  | [default to undefined]

## Example

```typescript
import { WorkflowStepConditionAttributeValueComparisonTarget } from 'formkiq-client-sdk-typescript';

const instance: WorkflowStepConditionAttributeValueComparisonTarget = {
    attributeKey,
    aggregateType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
