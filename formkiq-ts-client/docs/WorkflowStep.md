# WorkflowStep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stepId** | **string** | Workflow Step Identifier | [optional] [default to undefined]
**action** | [**DocumentAction**](DocumentAction.md) |  | [optional] [default to undefined]
**queue** | [**WorkflowQueue**](WorkflowQueue.md) |  | [optional] [default to undefined]
**decisions** | [**Array&lt;WorkflowStepDecision&gt;**](WorkflowStepDecision.md) | Workflow Decisions | [optional] [default to undefined]

## Example

```typescript
import { WorkflowStep } from 'formkiq-ts-client';

const instance: WorkflowStep = {
    stepId,
    action,
    queue,
    decisions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
