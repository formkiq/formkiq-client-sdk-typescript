# Entity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityId** | **string** | Entity identifier | [optional] [default to undefined]
**entityTypeId** | **string** | Entity Type identifier | [optional] [default to undefined]
**name** | **string** | Entity Name | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**attributes** | [**Array&lt;EntityAttribute&gt;**](EntityAttribute.md) | List of Entity Attributes | [optional] [default to undefined]

## Example

```typescript
import { Entity } from 'formkiq-client-sdk-typescript';

const instance: Entity = {
    entityId,
    entityTypeId,
    name,
    insertedDate,
    attributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
