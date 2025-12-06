# DocumentAction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**DocumentActionStatus**](DocumentActionStatus.md) |  | [optional] [default to undefined]
**type** | [**DocumentActionType**](DocumentActionType.md) |  | [optional] [default to undefined]
**retryCount** | **number** | The number of times this action has already been attempted | [optional] [default to undefined]
**maxRetries** | **number** | The maximum number of retry attempts allowed for this action | [optional] [default to undefined]
**queueId** | **string** | Queue Id | [optional] [default to undefined]
**workflowId** | **string** | Workflow Id | [optional] [default to undefined]
**workflowStepId** | **string** | Workflow Step Id | [optional] [default to undefined]
**message** | **string** | Action message information | [optional] [default to undefined]
**userId** | **string** | User who requested the Action | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**startDate** | **string** | Started Timestamp | [optional] [default to undefined]
**completedDate** | **string** | Completed Timestamp | [optional] [default to undefined]
**parameters** | **{ [key: string]: object; }** | Action parameters | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** | Action metadata | [optional] [default to undefined]

## Example

```typescript
import { DocumentAction } from 'formkiq-ts-client';

const instance: DocumentAction = {
    status,
    type,
    retryCount,
    maxRetries,
    queueId,
    workflowId,
    workflowStepId,
    message,
    userId,
    insertedDate,
    startDate,
    completedDate,
    parameters,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
