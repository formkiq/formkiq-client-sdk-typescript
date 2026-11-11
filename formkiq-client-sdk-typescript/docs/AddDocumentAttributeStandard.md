# AddDocumentAttributeStandard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | Attribute key | [default to undefined]
**jsonValue** | **{ [key: string]: any; }** | One JSON object stored as a single attribute value. Arrays, scalars, and null are not accepted at the top level. Nested values may include objects, arrays, strings, numbers, booleans, and null. Empty objects and nested empty arrays are accepted. Object property order and original number formatting are not preserved.  The complete stored DynamoDB item, including metadata and attribute names, must fit within 400 KB. Stored document nesting must not exceed 32 levels, including the wrapper. Numbers must fit within DynamoDB\&#39;s supported range and 38 digits of precision. | [optional] [default to undefined]
**stringValue** | **string** | Attribute with string value | [optional] [default to undefined]
**stringValues** | **Array&lt;string&gt;** | Attribute with string values | [optional] [default to undefined]
**numberValue** | **number** | Attribute with number value | [optional] [default to undefined]
**numberValues** | **Array&lt;number&gt;** | Attribute with number values | [optional] [default to undefined]
**booleanValue** | **boolean** | Attribute with boolean value | [optional] [default to undefined]
**dateValue** | **string** | Attribute with date value | [optional] [default to undefined]
**dateValues** | **Array&lt;string&gt;** | Attribute with date values | [optional] [default to undefined]

## Example

```typescript
import { AddDocumentAttributeStandard } from 'formkiq-client-sdk-typescript';

const instance: AddDocumentAttributeStandard = {
    key,
    jsonValue,
    stringValue,
    stringValues,
    numberValue,
    numberValues,
    booleanValue,
    dateValue,
    dateValues,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
