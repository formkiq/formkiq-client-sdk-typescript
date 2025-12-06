# GetWorkflowResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Workflow name | [optional] [default to undefined]
**description** | **string** | Workflow description | [optional] [default to undefined]
**inUse** | **boolean** | Whether the Workflow is in use | [optional] [default to undefined]
**status** | [**WorkflowStatus**](WorkflowStatus.md) |  | [optional] [default to undefined]
**steps** | [**Array&lt;WorkflowStep&gt;**](WorkflowStep.md) | Workflow steps | [optional] [default to undefined]

## Example

```typescript
import { GetWorkflowResponse } from 'formkiq-ts-client';

const instance: GetWorkflowResponse = {
    name,
    description,
    inUse,
    status,
    steps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
