# DocumentSearchTags


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eq** | **string** | Searches for strings that eq | [optional] [default to undefined]
**beginsWith** | **string** | Searches for strings that begin with | [optional] [default to undefined]
**range** | [**DocumentSearchRange**](DocumentSearchRange.md) |  | [optional] [default to undefined]
**key** | **string** | Tag key to search | [default to undefined]

## Example

```typescript
import { DocumentSearchTags } from 'formkiq-ts-client';

const instance: DocumentSearchTags = {
    eq,
    beginsWith,
    range,
    key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
