# DocumentSearchMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folder** | **string** | Searches for a folder | [optional] [default to undefined]
**path** | **string** | Searches for a Path of document | [optional] [default to undefined]
**eq** | **string** | Searches for strings that eq | [optional] [default to undefined]
**indexType** | **string** | Searches in an index | [optional] [default to undefined]
**indexFilterBeginsWith** | **string** | Returns index records that begins with a particular substring | [optional] [default to undefined]

## Example

```typescript
import { DocumentSearchMeta } from 'formkiq-client-sdk-typescript';

const instance: DocumentSearchMeta = {
    folder,
    path,
    eq,
    indexType,
    indexFilterBeginsWith,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
