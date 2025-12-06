# UpdateNigo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of Nigo | [optional] [default to undefined]
**description** | **string** | Description of Nigo | [optional] [default to undefined]
**plannedStartDate** | **string** | Planned Start Date | [optional] [default to undefined]
**startDate** | **string** | Start Date | [optional] [default to undefined]
**endDate** | **string** | End Date | [optional] [default to undefined]
**dueDate** | **string** | Due Date | [optional] [default to undefined]
**status** | [**NigoStatus**](NigoStatus.md) |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: object; }** |  | [optional] [default to undefined]
**documentIds** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateNigo } from 'formkiq-ts-client';

const instance: UpdateNigo = {
    name,
    description,
    plannedStartDate,
    startDate,
    endDate,
    dueDate,
    status,
    metadata,
    documentIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
