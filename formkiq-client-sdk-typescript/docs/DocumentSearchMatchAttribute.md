# DocumentSearchMatchAttribute

Attribute that supplied the match. For JSON attributes, jsonValue contains the entire stored object, and jsonPath identifies the nested field used by the driving criterion when a path was supplied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | Attribute key | [optional] [default to undefined]
**jsonValue** | **{ [key: string]: any; }** | One JSON object stored as a single attribute value. Arrays, scalars, and null are not accepted at the top level. Nested values may include objects, arrays, strings, numbers, booleans, and null. Empty objects and nested empty arrays are accepted. Object property order and original number formatting are not preserved.  The complete stored DynamoDB item, including metadata and attribute names, must fit within 400 KB. Stored document nesting must not exceed 32 levels, including the wrapper. Numbers must fit within DynamoDB\&#39;s supported range and 38 digits of precision. | [optional] [default to undefined]
**jsonPath** | **string** | Path relative to jsonValue, beginning with $. Use dot notation for identifier-like property names, quoted bracket notation for other property names, and zero-based brackets for array positions. Examples: $.customer.name, $[\&#39;customer.name\&#39;], and $.lineItems[0].quantity. Quoted names may escape characters using a backslash. At least one property or array position is required. Wildcards, recursive descent, slices, and filter expressions are not supported. For /searchFulltext, only property paths are supported: $.lineItems.sku matches any array element, while $.lineItems[0].sku is rejected. Dotted property names are treated as OpenSearch field paths rather than distinct literal keys. | [optional] [default to undefined]
**stringValue** | **string** | Attribute with string value | [optional] [default to undefined]
**numberValue** | **number** | Attribute with number value | [optional] [default to undefined]
**booleanValue** | **boolean** | Attribute with boolean value | [optional] [default to undefined]
**dateValue** | **string** | Attribute with date value | [optional] [default to undefined]

## Example

```typescript
import { DocumentSearchMatchAttribute } from 'formkiq-client-sdk-typescript';

const instance: DocumentSearchMatchAttribute = {
    key,
    jsonValue,
    jsonPath,
    stringValue,
    numberValue,
    booleanValue,
    dateValue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
