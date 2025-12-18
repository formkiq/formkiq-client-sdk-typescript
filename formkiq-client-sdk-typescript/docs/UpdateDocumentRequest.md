# UpdateDocumentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **string** | Path or Name of document | [optional] [default to undefined]
**width** | **string** | Document Content Width property | [optional] [default to undefined]
**height** | **string** | Document Content Height property | [optional] [default to undefined]
**deepLinkPath** | **string** | Path or Name of deep link | [optional] [default to undefined]
**contentType** | **string** | Document media type | [optional] [default to undefined]
**isBase64** | **boolean** | Is the content Base64-encoded? | [optional] [default to undefined]
**content** | **string** | Document content | [optional] [default to undefined]
**checksum** | **string** | Document checksum, changes when document file changes | [optional] [default to undefined]
**checksumType** | [**ChecksumType**](ChecksumType.md) |  | [optional] [default to undefined]
**tags** | [**Array&lt;AddDocumentTag&gt;**](AddDocumentTag.md) | List of document tags | [optional] [default to undefined]
**metadata** | [**Array&lt;AddDocumentMetadata&gt;**](AddDocumentMetadata.md) | List of document Metadata | [optional] [default to undefined]
**attributes** | [**Array&lt;AddDocumentAttribute&gt;**](AddDocumentAttribute.md) | List of document attributes | [optional] [default to undefined]
**actions** | [**Array&lt;AddAction&gt;**](AddAction.md) | List of Actions | [optional] [default to undefined]
**documents** | [**Array&lt;AddChildDocument&gt;**](AddChildDocument.md) | List of child documents | [optional] [default to undefined]

## Example

```typescript
import { UpdateDocumentRequest } from 'formkiq-client-sdk-typescript';

const instance: UpdateDocumentRequest = {
    path,
    width,
    height,
    deepLinkPath,
    contentType,
    isBase64,
    content,
    checksum,
    checksumType,
    tags,
    metadata,
    attributes,
    actions,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
