# DocumentAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | Attribute key | [optional] [default to undefined]
**jsonValue** | **{ [key: string]: any; }** | One JSON object stored as a single attribute value. Arrays, scalars, and null are not accepted at the top level. Nested values may include objects, arrays, strings, numbers, booleans, and null. Empty objects and nested empty arrays are accepted. Object property order and original number formatting are not preserved.  The complete stored DynamoDB item, including metadata and attribute names, must fit within 400 KB. Stored document nesting must not exceed 32 levels, including the wrapper. Numbers must fit within DynamoDB\&#39;s supported range and 38 digits of precision. | [optional] [default to undefined]
**stringValue** | **string** | Attribute with string value | [optional] [default to undefined]
**stringValues** | **Array&lt;string&gt;** | Attribute with string values | [optional] [default to undefined]
**numberValue** | **number** | Attribute with number value | [optional] [default to undefined]
**numberValues** | **Array&lt;number&gt;** | Attribute with number values | [optional] [default to undefined]
**booleanValue** | **boolean** | Attribute with boolean value | [optional] [default to undefined]
**dateValue** | **string** | Attribute with date value | [optional] [default to undefined]
**dateValues** | **Array&lt;string&gt;** | Attribute with date values | [optional] [default to undefined]
**insertedDate** | **string** | Earliest insertion timestamp across the attribute\&#39;s current values. Adding a value preserves this timestamp; removing values recomputes it from the remaining values. May be absent for older records. | [optional] [readonly] [default to undefined]
**lastModifiedDate** | **string** | Latest modification timestamp across the attribute\&#39;s current values. Removing values recomputes this timestamp from the remaining values; it does not track the time of removal. For older values without a modification timestamp, their insertion timestamp is used when available. May be absent when no timestamp is available. | [optional] [readonly] [default to undefined]
**userId** | **string** | User who added attribute | [optional] [default to undefined]
**valueType** | [**AttributeValueType**](AttributeValueType.md) |  | [optional] [default to undefined]
**entity** | [**Entity**](Entity.md) |  | [optional] [default to undefined]
**entities** | [**Array&lt;Entity&gt;**](Entity.md) | Attribute with entity values | [optional] [default to undefined]

## Example

```typescript
import { DocumentAttribute } from 'formkiq-client-sdk-typescript';

const instance: DocumentAttribute = {
    key,
    jsonValue,
    stringValue,
    stringValues,
    numberValue,
    numberValues,
    booleanValue,
    dateValue,
    dateValues,
    insertedDate,
    lastModifiedDate,
    userId,
    valueType,
    entity,
    entities,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
