# AddCase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Case Name | [default to undefined]
**status** | [**CaseStatus**](CaseStatus.md) |  | [optional] [default to undefined]
**plannedStartDate** | **string** | Planned Start Date | [optional] [default to undefined]
**startDate** | **string** | Start Date | [optional] [default to undefined]
**endDate** | **string** | End Date | [optional] [default to undefined]
**dueDate** | **string** | Due Date | [optional] [default to undefined]
**description** | **string** | Case Description | [optional] [default to undefined]
**documentNumberFormat** | [**Array&lt;StringFormat&gt;**](StringFormat.md) | Format of Document Number | [optional] [default to undefined]
**caseNumberFormat** | [**Array&lt;StringFormat&gt;**](StringFormat.md) | Format of Case Number | [optional] [default to undefined]
**metadata** | **{ [key: string]: object; }** |  | [optional] [default to undefined]
**documentIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { AddCase } from 'formkiq-ts-client';

const instance: AddCase = {
    name,
    status,
    plannedStartDate,
    startDate,
    endDate,
    dueDate,
    description,
    documentNumberFormat,
    caseNumberFormat,
    metadata,
    documentIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
