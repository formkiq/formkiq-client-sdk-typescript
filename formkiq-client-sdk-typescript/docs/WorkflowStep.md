# WorkflowStep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stepId** | **string** | Workflow Step Identifier | [optional] [default to undefined]
**description** | **string** | Workflow Step description | [optional] [default to undefined]
**action** | [**DocumentAction**](DocumentAction.md) |  | [optional] [default to undefined]
**queue** | [**WorkflowQueue**](WorkflowQueue.md) |  | [optional] [default to undefined]
**mappings** | [**Array&lt;WorkflowStepMapping&gt;**](WorkflowStepMapping.md) |  | [optional] [default to undefined]
**decision** | [**WorkflowStepDecision**](WorkflowStepDecision.md) |  | [optional] [default to undefined]
**decisions** | [**Array&lt;WorkflowStepDecisions&gt;**](WorkflowStepDecisions.md) | Workflow Decisions | [optional] [default to undefined]

## Example

```typescript
import { WorkflowStep } from 'formkiq-client-sdk-typescript';

const instance: WorkflowStep = {
    stepId,
    description,
    action,
    queue,
    mappings,
    decision,
    decisions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
