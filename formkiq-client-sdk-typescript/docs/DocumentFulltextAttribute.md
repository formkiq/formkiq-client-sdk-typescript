# DocumentFulltextAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eq** | [**DocumentFulltextAttributeEq**](DocumentFulltextAttributeEq.md) |  | [optional] [default to undefined]
**eqOr** | [**Array&lt;DocumentFulltextAttributeEq&gt;**](DocumentFulltextAttributeEq.md) | Searches for ANY strings that eq | [optional] [default to undefined]
**key** | **string** | Tag key to search | [default to undefined]

## Example

```typescript
import { DocumentFulltextAttribute } from 'formkiq-client-sdk-typescript';

const instance: DocumentFulltextAttribute = {
    eq,
    eqOr,
    key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
