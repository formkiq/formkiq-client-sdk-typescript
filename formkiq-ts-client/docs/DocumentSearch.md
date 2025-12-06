# DocumentSearch

Document tag search criteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | Full text search | [optional] [default to undefined]
**meta** | [**DocumentSearchMeta**](DocumentSearchMeta.md) |  | [optional] [default to undefined]
**attribute** | [**DocumentSearchAttribute**](DocumentSearchAttribute.md) |  | [optional] [default to undefined]
**attributes** | [**Array&lt;DocumentSearchAttribute&gt;**](DocumentSearchAttribute.md) | List of Composite Key attributes to filter search results on | [optional] [default to undefined]
**tag** | [**DocumentSearchTag**](DocumentSearchTag.md) |  | [optional] [default to undefined]
**tags** | [**Array&lt;DocumentSearchTags&gt;**](DocumentSearchTags.md) | List of Composite Key tags to filter search results on | [optional] [default to undefined]
**documentIds** | **Array&lt;string&gt;** | List of DocumentIds to filter search results on | [optional] [default to undefined]

## Example

```typescript
import { DocumentSearch } from 'formkiq-ts-client';

const instance: DocumentSearch = {
    text,
    meta,
    attribute,
    attributes,
    tag,
    tags,
    documentIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
