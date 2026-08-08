# SearchResultDocument


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
**folder** | **boolean** | Is Result a Document Folder | [optional] [default to undefined]
**indexKey** | **string** | populated if search result are from an index | [optional] [default to undefined]
**checksum** | **string** | Document checksum, changes when document file changes | [optional] [default to undefined]
**checksumType** | [**ChecksumType**](ChecksumType.md) |  | [optional] [default to undefined]
**documentId** | **string** | Document Identifier | [optional] [default to undefined]
**artifactId** | **string** | Document Artifact Identifier | [optional] [default to undefined]
**promotedArtifactId** | **string** | Promoted Artifact Identifier | [optional] [default to undefined]
**artifactCategory** | **string** | Document Artifact Category | [optional] [default to undefined]
**hasArtifacts** | **boolean** | Whether the document has artifact documents | [optional] [default to undefined]
**contentType** | **string** | Document Content-Type | [optional] [default to undefined]
**userId** | **string** | User who added document | [optional] [default to undefined]
**contentLength** | **number** | Document size | [optional] [default to undefined]
**versionId** | **string** | Document version | [optional] [default to undefined]
**belongsToDocumentId** | **string** | Parent Document Identifier | [optional] [default to undefined]
**matchedAttribute** | [**DocumentSearchMatchAttribute**](DocumentSearchMatchAttribute.md) |  | [optional] [default to undefined]
**matchedTag** | [**DocumentSearchMatchTag**](DocumentSearchMatchTag.md) |  | [optional] [default to undefined]
**matchedTags** | [**Array&lt;DocumentSearchMatchTag&gt;**](DocumentSearchMatchTag.md) |  | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**attributes** | [**{ [key: string]: SearchResultDocumentAttribute; }**](SearchResultDocumentAttribute.md) |  | [optional] [default to undefined]
**metadata** | [**Array&lt;DocumentMetadata&gt;**](DocumentMetadata.md) | List of document Metadata | [optional] [default to undefined]

## Example

```typescript
import { SearchResultDocument } from 'formkiq-client-sdk-typescript';

const instance: SearchResultDocument = {
    siteId,
    path,
    width,
    height,
    deepLinkPath,
    insertedDate,
    lastModifiedDate,
    folder,
    indexKey,
    checksum,
    checksumType,
    documentId,
    artifactId,
    promotedArtifactId,
    artifactCategory,
    hasArtifacts,
    contentType,
    userId,
    contentLength,
    versionId,
    belongsToDocumentId,
    matchedAttribute,
    matchedTag,
    matchedTags,
    tags,
    attributes,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
