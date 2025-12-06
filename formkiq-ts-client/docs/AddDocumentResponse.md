# AddDocumentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentId** | **string** | Document Identifier | [optional] [default to undefined]
**siteId** | **string** | Site Identifier | [optional] [default to undefined]
**uploadUrl** | **string** | Url to upload document to | [optional] [default to undefined]
**headers** | **{ [key: string]: object; }** |  | [optional] [default to undefined]
**documents** | [**Array&lt;AddChildDocumentResponse&gt;**](AddChildDocumentResponse.md) | List of child documents | [optional] [default to undefined]

## Example

```typescript
import { AddDocumentResponse } from 'formkiq-ts-client';

const instance: AddDocumentResponse = {
    documentId,
    siteId,
    uploadUrl,
    headers,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
