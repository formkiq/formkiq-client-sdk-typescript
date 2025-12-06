# DocumentWorkflow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflowId** | **string** | Workflow identifier | [optional] [default to undefined]
**name** | **string** | Workflow name | [optional] [default to undefined]
**description** | **string** | Workflow description | [optional] [default to undefined]
**currentStepId** | **string** | The current step workflow is on | [optional] [default to undefined]
**status** | [**DocumentWorkflowStatus**](DocumentWorkflowStatus.md) |  | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]

## Example

```typescript
import { DocumentWorkflow } from 'formkiq-ts-client';

const instance: DocumentWorkflow = {
    workflowId,
    name,
    description,
    currentStepId,
    status,
    insertedDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
