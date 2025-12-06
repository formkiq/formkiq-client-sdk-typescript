# Case


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caseId** | **string** | Case Identifier | [optional] [default to undefined]
**caseNumber** | **string** | Case Number | [optional] [default to undefined]
**documentNumber** | **string** | Document Number | [optional] [default to undefined]
**plannedStartDate** | **string** | Planned Start Date | [optional] [default to undefined]
**startDate** | **string** | Start Date | [optional] [default to undefined]
**endDate** | **string** | End Date | [optional] [default to undefined]
**dueDate** | **string** | Due Date | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**name** | **string** | Case Name | [optional] [default to undefined]
**description** | **string** | Case Description | [optional] [default to undefined]
**metadata** | **{ [key: string]: object; }** |  | [optional] [default to undefined]
**status** | [**CaseStatus**](CaseStatus.md) |  | [optional] [default to undefined]
**userId** | **string** | User who added document | [optional] [default to undefined]

## Example

```typescript
import { Case } from 'formkiq-ts-client';

const instance: Case = {
    caseId,
    caseNumber,
    documentNumber,
    plannedStartDate,
    startDate,
    endDate,
    dueDate,
    insertedDate,
    name,
    description,
    metadata,
    status,
    userId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
