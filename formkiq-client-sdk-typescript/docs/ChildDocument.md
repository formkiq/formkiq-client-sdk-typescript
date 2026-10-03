# ChildDocument


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **string** | Path or Name of document | [optional] [default to undefined]
**width** | **string** | Document Content Width property | [optional] [default to undefined]
**height** | **string** | Document Content Height property | [optional] [default to undefined]
**deepLinkPath** | **string** | Path or Name of deep link | [optional] [default to undefined]
**resourceType** | [**DocumentResourceType**](DocumentResourceType.md) |  | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**lastModifiedDate** | **string** | Last Modified Timestamp | [optional] [default to undefined]
**checksum** | **string** | Document checksum, changes when document file changes | [optional] [default to undefined]
**documentId** | **string** | Document Identifier | [default to undefined]
**hasArtifacts** | **boolean** | Whether the document has artifact documents | [optional] [default to undefined]
**contentType** | **string** | Document Content-Type | [optional] [default to undefined]
**userId** | **string** | User who added document | [optional] [default to undefined]
**contentLength** | **number** | Document size | [optional] [default to undefined]
**versionId** | **string** | Document version | [optional] [default to undefined]
**belongsToDocumentId** | **string** | Parent Document Identifier | [optional] [default to undefined]
**attributes** | [**Array&lt;DocumentAttribute&gt;**](DocumentAttribute.md) | List of document attributes | [optional] [default to undefined]

## Example

```typescript
import { ChildDocument } from 'formkiq-client-sdk-typescript';

const instance: ChildDocument = {
    path,
    width,
    height,
    deepLinkPath,
    resourceType,
    insertedDate,
    lastModifiedDate,
    checksum,
    documentId,
    hasArtifacts,
    contentType,
    userId,
    contentLength,
    versionId,
    belongsToDocumentId,
    attributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
