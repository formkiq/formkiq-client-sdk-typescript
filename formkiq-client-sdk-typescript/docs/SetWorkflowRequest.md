# SetWorkflowRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Workflow name | [default to undefined]
**description** | **string** | Workflow description | [optional] [default to undefined]
**status** | [**WorkflowStatus**](WorkflowStatus.md) |  | [default to undefined]
**steps** | [**Array&lt;AddWorkflowStep&gt;**](AddWorkflowStep.md) | Workflow Steps | [default to undefined]

## Example

```typescript
import { SetWorkflowRequest } from 'formkiq-client-sdk-typescript';

const instance: SetWorkflowRequest = {
    name,
    description,
    status,
    steps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
