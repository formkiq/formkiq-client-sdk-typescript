# Nigo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nigoId** | **string** | Nigo Identifier | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**name** | **string** | Name of Nigo | [optional] [default to undefined]
**description** | **string** | Description of Nigo | [optional] [default to undefined]
**plannedStartDate** | **string** | Planned Start Date | [optional] [default to undefined]
**startDate** | **string** | Start Date | [optional] [default to undefined]
**endDate** | **string** | End Date | [optional] [default to undefined]
**dueDate** | **string** | Due Date | [optional] [default to undefined]
**userId** | **string** | User who added Nigo | [optional] [default to undefined]
**status** | [**NigoStatus**](NigoStatus.md) |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: object; }** |  | [optional] [default to undefined]

## Example

```typescript
import { Nigo } from 'formkiq-client-sdk-typescript';

const instance: Nigo = {
    nigoId,
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
