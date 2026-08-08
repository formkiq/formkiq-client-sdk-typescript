# DocumentFulltextResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalCount** | **number** | Total number of documents that matched the search query. When the number of matches exceeds 10,000, this value will be reported as 10,000+ unless the search request explicitly enables exact total hit tracking.  | [optional] [default to undefined]
**documents** | [**Array&lt;FulltextSearchItem&gt;**](FulltextSearchItem.md) | List of search result documents | [optional] [default to undefined]

## Example

```typescript
import { DocumentFulltextResponse } from 'formkiq-client-sdk-typescript';

const instance: DocumentFulltextResponse = {
    totalCount,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
