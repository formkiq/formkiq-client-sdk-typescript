# DocumentSearchResponse

Document search response. The `DOCUMENTS` projection returns `documents`, `next`, `previous`, and `truncated`. The `COUNT` projection returns `count` and `truncated` instead.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next** | **string** | Next page of document results token; omitted for the COUNT projection | [optional] [default to undefined]
**previous** | **string** | Previous page of document results token; omitted for the COUNT projection | [optional] [default to undefined]
**documents** | [**Array&lt;SearchResultDocument&gt;**](SearchResultDocument.md) | List of search result documents; omitted for the COUNT projection | [optional] [default to undefined]
**count** | **number** | Number of matching documents counted, up to 10,000; only returned for the COUNT projection | [optional] [default to undefined]
**truncated** | **boolean** | For DOCUMENTS, true when the 10,000 attribute-record budget or the multi-attribute fallback time budget stops the request before the requested page size is reached and search work remains. The response contains matches found so far, possibly none, and a next token to continue with a fresh budget. False when the requested page size is reached or the search is exhausted, even if next is present for ordinary pagination. For COUNT, true when counting stops at the result limit or the attribute-record processing budget or multi-attribute fallback time budget before the search is exhausted. A truncated count is a lower bound, not an exact total; COUNT does not return continuation tokens. | [optional] [default to undefined]

## Example

```typescript
import { DocumentSearchResponse } from 'formkiq-client-sdk-typescript';

const instance: DocumentSearchResponse = {
    next,
    previous,
    documents,
    count,
    truncated,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
