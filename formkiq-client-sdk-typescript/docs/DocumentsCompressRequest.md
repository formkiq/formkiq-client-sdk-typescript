# DocumentsCompressRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentIds** | **Array&lt;string&gt;** | Documents to compress | [optional] [default to undefined]
**documents** | [**Array&lt;DocumentsCompressDocument&gt;**](DocumentsCompressDocument.md) | Documents to compress with optional artifact identifiers | [optional] [default to undefined]

## Example

```typescript
import { DocumentsCompressRequest } from 'formkiq-client-sdk-typescript';

const instance: DocumentsCompressRequest = {
    documentIds,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
