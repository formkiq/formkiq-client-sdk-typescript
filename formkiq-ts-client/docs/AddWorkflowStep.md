# AddWorkflowStep


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stepId** | **string** | Workflow Step Identifier | [optional] [default to undefined]
**action** | [**AddAction**](AddAction.md) |  | [optional] [default to undefined]
**queue** | [**AddWorkflowStepQueue**](AddWorkflowStepQueue.md) |  | [optional] [default to undefined]
**decisions** | [**Array&lt;AddWorkflowStepDecision&gt;**](AddWorkflowStepDecision.md) | Workflow Decisions | [optional] [default to undefined]

## Example

```typescript
import { AddWorkflowStep } from 'formkiq-ts-client';

const instance: AddWorkflowStep = {
    stepId,
    action,
    queue,
    decisions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
