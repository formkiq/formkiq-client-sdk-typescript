# GetDocumentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**siteId** | **string** | Site Identifier | [optional] [default to undefined]
**path** | **string** | Path or Name of document | [optional] [default to undefined]
**width** | **string** | Document Content Width property | [optional] [default to undefined]
**height** | **string** | Document Content Height property | [optional] [default to undefined]
**deepLinkPath** | **string** | Path or Name of deep link | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**lastModifiedDate** | **string** | Last Modified Timestamp | [optional] [default to undefined]
**checksum** | **string** | Document checksum, changes when document file changes | [optional] [default to undefined]
**checksumType** | [**ChecksumType**](ChecksumType.md) |  | [optional] [default to undefined]
**documentId** | **string** | Document Identifier | [default to undefined]
**contentType** | **string** | Document Content-Type | [optional] [default to undefined]
**userId** | **string** | User who added document | [optional] [default to undefined]
**contentLength** | **number** | Document size | [optional] [default to undefined]
**versionId** | **string** | Document version | [optional] [default to undefined]
**documents** | [**Array&lt;ChildDocument&gt;**](ChildDocument.md) | List of child documents | [optional] [default to undefined]
**belongsToDocumentId** | **string** | Parent Document Identifier | [optional] [default to undefined]
**metadata** | [**Array&lt;DocumentMetadata&gt;**](DocumentMetadata.md) | List of document Metadata | [optional] [default to undefined]

## Example

```typescript
import { GetDocumentResponse } from 'formkiq-ts-client';

const instance: GetDocumentResponse = {
    siteId,
    path,
    width,
    height,
    deepLinkPath,
    insertedDate,
    lastModifiedDate,
    checksum,
    checksumType,
    documentId,
    contentType,
    userId,
    contentLength,
    versionId,
    documents,
    belongsToDocumentId,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
