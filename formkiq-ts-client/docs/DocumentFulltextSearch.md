# DocumentFulltextSearch

Document full text search criteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **number** | Result page to return (starting at 1) | [optional] [default to undefined]
**text** | **string** | Full text search | [optional] [default to undefined]
**tags** | [**Array&lt;DocumentFulltextTag&gt;**](DocumentFulltextTag.md) | List of search tags | [optional] [default to undefined]
**attributes** | [**Array&lt;DocumentFulltextAttribute&gt;**](DocumentFulltextAttribute.md) | List of search attributes | [optional] [default to undefined]

## Example

```typescript
import { DocumentFulltextSearch } from 'formkiq-ts-client';

const instance: DocumentFulltextSearch = {
    page,
    text,
    tags,
    attributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
