# DocumentSearchAttribute

Attribute search criterion. Existing eq and eqOr operators accept strings. To compare a nested field of a JSON attribute, supply a json filter containing the path and comparisons. A json filter cannot be combined with the top-level eq, eqOr, beginsWith, or range operators in the same criterion. Use separate criteria in query.attributes to compare multiple JSON paths.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eq** | **string** | Searches for strings that eq | [optional] [default to undefined]
**eqOr** | **Array&lt;string&gt;** | Searches for strings equal to any provided value. Pagination is not supported when &#x60;eqOr&#x60; is used, so no &#x60;nextToken&#x60; is returned. The request limit is applied separately to each value.  | [optional] [default to undefined]
**beginsWith** | **string** | Searches for strings that begin with | [optional] [default to undefined]
**range** | [**DocumentSearchRange**](DocumentSearchRange.md) |  | [optional] [default to undefined]
**key** | **string** | Attribute key to search | [default to undefined]
**json** | [**JsonAttributeSearchFilter**](JsonAttributeSearchFilter.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DocumentSearchAttribute } from 'formkiq-client-sdk-typescript';

const instance: DocumentSearchAttribute = {
    eq,
    eqOr,
    beginsWith,
    range,
    key,
    json,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
