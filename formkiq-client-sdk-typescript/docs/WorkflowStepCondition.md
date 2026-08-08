# WorkflowStepCondition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all** | [**Array&lt;WorkflowStepConditionCriterion&gt;**](WorkflowStepConditionCriterion.md) | Workflow Step Condition Criteria | [optional] [default to undefined]
**any** | [**Array&lt;WorkflowStepConditionCriterion&gt;**](WorkflowStepConditionCriterion.md) | Workflow Step Condition Criteria | [optional] [default to undefined]
**transition** | [**WorkflowStepTransition**](WorkflowStepTransition.md) |  | [default to undefined]

## Example

```typescript
import { WorkflowStepCondition } from 'formkiq-client-sdk-typescript';

const instance: WorkflowStepCondition = {
    all,
    any,
    transition,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
