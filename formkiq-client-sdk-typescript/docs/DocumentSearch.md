# DocumentSearch

Document tag search criteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | Full text search | [optional] [default to undefined]
**meta** | [**DocumentSearchMeta**](DocumentSearchMeta.md) |  | [optional] [default to undefined]
**filename** | [**DocumentSearchFilename**](DocumentSearchFilename.md) |  | [optional] [default to undefined]
**folder** | [**DocumentSearchFolder**](DocumentSearchFolder.md) |  | [optional] [default to undefined]
**attribute** | [**DocumentSearchAttribute**](DocumentSearchAttribute.md) |  | [optional] [default to undefined]
**attributes** | [**Array&lt;DocumentSearchAttribute&gt;**](DocumentSearchAttribute.md) | Attributes combined with AND. DynamoDB uses a matching schema composite key when available. For index searches, a composite key covering only some attributes is also preferred: the largest usable composite key supplies the initial matches and the remaining attributes filter them. Otherwise, the first attribute supplies matches and the remaining attributes filter them; put the most selective attribute first. No composite key or reindex is required for this fallback. Each fallback index request examines at most 10,000 candidate attribute records. Multivalued attributes may consume multiple candidate records. Results use the first matching value of the driving attribute as matchedAttribute. All conditions must match the same document or artifact. A short or empty document page can still include a next token; continue until next is absent. COUNT can return fewer than 10,000 matches with truncated&#x3D;true when the record or time budget is reached. Existing composite-key ordering and operator restrictions still apply when a composite key is used. JSON path criteria are identified by key and json.path, so the same key may occur more than once with different paths. JSON path criteria do not implicitly participate in existing scalar composite keys. | [optional] [default to undefined]
**tag** | [**DocumentSearchTag**](DocumentSearchTag.md) |  | [optional] [default to undefined]
**tags** | [**Array&lt;DocumentSearchTags&gt;**](DocumentSearchTags.md) | List of Composite Key tags to filter search results on | [optional] [default to undefined]
**documentIds** | **Array&lt;string&gt;** | List of up to 100 document IDs to check against the search criteria. When supplied, the &#x60;limit&#x60; query parameter is ignored and all matching documents are returned. Cannot be combined with &#x60;filename&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { DocumentSearch } from 'formkiq-client-sdk-typescript';

const instance: DocumentSearch = {
    text,
    meta,
    filename,
    folder,
    attribute,
    attributes,
    tag,
    tags,
    documentIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
