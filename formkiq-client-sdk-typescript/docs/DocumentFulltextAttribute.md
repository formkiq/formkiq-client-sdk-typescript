# DocumentFulltextAttribute

Full-text attribute search criteria. Use eq or eqOr for scalar attributes and json for nested fields of JSON attributes. json cannot be combined with eq or eqOr. To compare multiple paths in one JSON attribute, use separate criteria with the same key. JSON searches use native OpenSearch indexes. Property paths through arrays match any element; array positions are not supported, and criteria may match different elements. Dotted property names use OpenSearch field-path semantics. Field types are inferred from stored values and must remain compatible across documents. Date-like strings may be indexed as dates, and numeric comparisons use the inferred numeric precision. Exact string and prefix searches use keyword fields; the default dynamic mapping does not index strings longer than 256 characters in keyword fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eq** | [**DocumentFulltextAttributeEq**](DocumentFulltextAttributeEq.md) |  | [optional] [default to undefined]
**eqOr** | [**Array&lt;DocumentFulltextAttributeEq&gt;**](DocumentFulltextAttributeEq.md) | Searches for any of the supplied typed attribute values | [optional] [default to undefined]
**json** | [**JsonAttributeSearchFilter**](JsonAttributeSearchFilter.md) |  | [optional] [default to undefined]
**key** | **string** | Attribute key to search | [default to undefined]

## Example

```typescript
import { DocumentFulltextAttribute } from 'formkiq-client-sdk-typescript';

const instance: DocumentFulltextAttribute = {
    eq,
    eqOr,
    json,
    key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
