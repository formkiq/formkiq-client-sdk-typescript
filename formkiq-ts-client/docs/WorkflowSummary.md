# WorkflowSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of Workflow | [optional] [default to undefined]
**workflowId** | **string** | Workflow identifier | [optional] [default to undefined]
**description** | **string** | Description of Workflow | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**userId** | **string** | User who created workflow | [optional] [default to undefined]
**inUse** | **boolean** | Whether the Workflow is in use | [optional] [default to undefined]
**status** | [**WorkflowStatus**](WorkflowStatus.md) |  | [optional] [default to undefined]

## Example

```typescript
import { WorkflowSummary } from 'formkiq-ts-client';

const instance: WorkflowSummary = {
    name,
    workflowId,
    description,
    insertedDate,
    userId,
    inUse,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
