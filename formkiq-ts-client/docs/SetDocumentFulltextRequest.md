# SetDocumentFulltextRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contentType** | **string** | Document Content-Type | [optional] [default to undefined]
**content** | **string** | Document content | [optional] [default to undefined]
**contentUrls** | **Array&lt;string&gt;** | URL(s) which contain document content | [optional] [default to undefined]
**path** | **string** | Path or Name of document | [optional] [default to undefined]
**width** | **string** | Document Content Width property | [optional] [default to undefined]
**height** | **string** | Document Content Height property | [optional] [default to undefined]
**deepLinkPath** | **string** | Path or Name of deep link | [optional] [default to undefined]
**checksum** | **string** | Document checksum, changes when document file changes | [optional] [default to undefined]
**checksumType** | [**ChecksumType**](ChecksumType.md) |  | [optional] [default to undefined]
**tags** | [**Array&lt;AddDocumentTag&gt;**](AddDocumentTag.md) | List of document tags | [optional] [default to undefined]
**metadata** | [**Array&lt;AddDocumentMetadata&gt;**](AddDocumentMetadata.md) | List of document Metadata | [optional] [default to undefined]
**attributes** | [**{ [key: string]: FulltextAttribute; }**](FulltextAttribute.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SetDocumentFulltextRequest } from 'formkiq-ts-client';

const instance: SetDocumentFulltextRequest = {
    contentType,
    content,
    contentUrls,
    path,
    width,
    height,
    deepLinkPath,
    checksum,
    checksumType,
    tags,
    metadata,
    attributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
