# AddWorkflowStep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stepId** | **string** | Workflow Step Identifier | [optional] [default to undefined]
**description** | **string** | Workflow Step description | [optional] [default to undefined]
**action** | [**AddAction**](AddAction.md) |  | [optional] [default to undefined]
**queue** | [**AddWorkflowStepQueue**](AddWorkflowStepQueue.md) |  | [optional] [default to undefined]
**mappings** | [**Array&lt;WorkflowStepMapping&gt;**](WorkflowStepMapping.md) |  | [optional] [default to undefined]
**decision** | [**WorkflowStepDecision**](WorkflowStepDecision.md) |  | [optional] [default to undefined]
**decisions** | [**Array&lt;AddWorkflowStepDecision&gt;**](AddWorkflowStepDecision.md) | Deprecated; use \&#39;decision\&#39; instead | [optional] [default to undefined]

## Example

```typescript
import { AddWorkflowStep } from 'formkiq-client-sdk-typescript';

const instance: AddWorkflowStep = {
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
