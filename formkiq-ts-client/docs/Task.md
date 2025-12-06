# Task


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskId** | **string** | Task Identifier | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**name** | **string** | Name of Task | [optional] [default to undefined]
**description** | **string** | Description of Task | [optional] [default to undefined]
**plannedStartDate** | **string** | Planned Start Date of Task | [optional] [default to undefined]
**startDate** | **string** | Start Date of Task | [optional] [default to undefined]
**endDate** | **string** | End Date of Task | [optional] [default to undefined]
**dueDate** | **string** | Due Date of Task | [optional] [default to undefined]
**userId** | **string** | User who added Task | [optional] [default to undefined]
**status** | [**TaskStatus**](TaskStatus.md) |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: object; }** |  | [optional] [default to undefined]

## Example

```typescript
import { Task } from 'formkiq-ts-client';

const instance: Task = {
    taskId,
    insertedDate,
    name,
    description,
    plannedStartDate,
    startDate,
    endDate,
    dueDate,
    userId,
    status,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
