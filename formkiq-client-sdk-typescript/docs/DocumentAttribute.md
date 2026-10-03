# DocumentAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | Attribute key | [optional] [default to undefined]
**stringValue** | **string** | Attribute with string value | [optional] [default to undefined]
**stringValues** | **Array&lt;string&gt;** | Attribute with string values | [optional] [default to undefined]
**numberValue** | **number** | Attribute with number value | [optional] [default to undefined]
**numberValues** | **Array&lt;number&gt;** | Attribute with number values | [optional] [default to undefined]
**booleanValue** | **boolean** | Attribute with boolean value | [optional] [default to undefined]
**dateValue** | **string** | Attribute with date value | [optional] [default to undefined]
**dateValues** | **Array&lt;string&gt;** | Attribute with date values | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**userId** | **string** | User who added attribute | [optional] [default to undefined]
**valueType** | [**AttributeValueType**](AttributeValueType.md) |  | [optional] [default to undefined]
**entity** | [**Entity**](Entity.md) |  | [optional] [default to undefined]
**entities** | [**Array&lt;Entity&gt;**](Entity.md) | Attribute with entity values | [optional] [default to undefined]

## Example

```typescript
import { DocumentAttribute } from 'formkiq-client-sdk-typescript';

const instance: DocumentAttribute = {
    key,
    stringValue,
    stringValues,
    numberValue,
    numberValues,
    booleanValue,
    dateValue,
    dateValues,
    insertedDate,
    userId,
    valueType,
    entity,
    entities,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
