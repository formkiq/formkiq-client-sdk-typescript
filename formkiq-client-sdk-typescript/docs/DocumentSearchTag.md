# DocumentSearchTag


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beginsWith** | **string** | Searches for strings that begin with | [optional] [default to undefined]
**eq** | **string** | Searches for strings that eq | [optional] [default to undefined]
**eqOr** | **Array&lt;string&gt;** | Searches for ANY strings that eq | [optional] [default to undefined]
**range** | [**DocumentSearchRange**](DocumentSearchRange.md) |  | [optional] [default to undefined]
**key** | **string** | Tag key to search | [default to undefined]

## Example

```typescript
import { DocumentSearchTag } from 'formkiq-client-sdk-typescript';

const instance: DocumentSearchTag = {
    beginsWith,
    eq,
    eqOr,
    range,
    key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
