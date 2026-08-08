# AddDocumentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentId** | **string** | optional Document Identifier (Version 4 UUID), if skipped one will be assigned | [optional] [default to undefined]
**artifacts** | **boolean** | Whether the document supports artifact documents | [optional] [default to undefined]
**artifactCategory** | **string** | Artifact Category | [optional] [default to undefined]
**path** | **string** | Path or Name of document | [optional] [default to undefined]
**checksumType** | [**ChecksumType**](ChecksumType.md) |  | [optional] [default to undefined]
**checksum** | **string** | The checksum value to validate the file against | [optional] [default to undefined]
**width** | **string** | Document Content Width property | [optional] [default to undefined]
**height** | **string** | Document Content Height property | [optional] [default to undefined]
**deepLinkPath** | **string** | Path or Name of deep link | [optional] [default to undefined]
**contentType** | **string** | Document media type | [optional] [default to undefined]
**isBase64** | **boolean** | Is the content Base64-encoded? | [optional] [default to undefined]
**content** | **string** | Document content | [default to undefined]
**tags** | [**Array&lt;AddDocumentTag&gt;**](AddDocumentTag.md) | List of document tags | [optional] [default to undefined]
**metadata** | [**Array&lt;AddDocumentMetadata&gt;**](AddDocumentMetadata.md) | List of document Metadata | [optional] [default to undefined]
**actions** | [**Array&lt;AddAction&gt;**](AddAction.md) | List of Actions | [optional] [default to undefined]
**attributes** | [**Array&lt;AddDocumentAttribute&gt;**](AddDocumentAttribute.md) | List of Attributes to add to document | [optional] [default to undefined]
**documents** | [**Array&lt;AddChildDocument&gt;**](AddChildDocument.md) | List of child documents | [optional] [default to undefined]

## Example

```typescript
import { AddDocumentRequest } from 'formkiq-client-sdk-typescript';

const instance: AddDocumentRequest = {
    documentId,
    artifacts,
    artifactCategory,
    path,
    checksumType,
    checksum,
    width,
    height,
    deepLinkPath,
    contentType,
    isBase64,
    content,
    tags,
    metadata,
    actions,
    attributes,
    documents,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
