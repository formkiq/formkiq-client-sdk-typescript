# WorkflowStepDecision


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**Array&lt;WorkflowStepCondition&gt;**](WorkflowStepCondition.md) | Workflow Step Conditions | [optional] [default to undefined]
**defaultTransition** | [**WorkflowStepTransition**](WorkflowStepTransition.md) |  | [optional] [default to undefined]

## Example

```typescript
import { WorkflowStepDecision } from 'formkiq-client-sdk-typescript';

const instance: WorkflowStepDecision = {
    conditions,
    defaultTransition,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
