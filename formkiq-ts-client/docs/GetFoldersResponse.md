# GetFoldersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next** | **string** | Next page of results token | [optional] [default to undefined]
**previous** | **string** | Previous page of results token | [optional] [default to undefined]
**documents** | [**Array&lt;SearchResultDocument&gt;**](SearchResultDocument.md) | List of search result documents | [optional] [default to undefined]

## Example

```typescript
import { GetFoldersResponse } from 'formkiq-ts-client';

const instance: GetFoldersResponse = {
    next,
    previous,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
