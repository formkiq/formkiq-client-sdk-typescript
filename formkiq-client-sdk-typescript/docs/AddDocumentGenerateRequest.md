# AddDocumentGenerateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | [**LocaleInfo**](LocaleInfo.md) |  | [optional] [default to undefined]
**insertDocuments** | [**Array&lt;DocumentGenerateInsertDocument&gt;**](DocumentGenerateInsertDocument.md) | List of documents to insert | [optional] [default to undefined]
**datasources** | [**Array&lt;DocumentGenerateDataSource&gt;**](DocumentGenerateDataSource.md) | List of data sources | [optional] [default to undefined]
**outputType** | [**DocumentGenerateOutputType**](DocumentGenerateOutputType.md) |  | [optional] [default to undefined]
**saveAsDocumentId** | **string** | Save the generated document with a specific documentId | [optional] [default to undefined]
**saveAsArtifact** | **boolean** | Create the output as a new artifact of saveAsDocumentId | [optional] [default to false]
**saveAsArtifactId** | **string** | Save the output as a new version of an existing artifact | [optional] [default to undefined]
**artifactCategory** | **string** | Optional caller-defined category for artifact output | [optional] [default to undefined]
**path** | **string** | The path of the generated document | [optional] [default to undefined]

## Example

```typescript
import { AddDocumentGenerateRequest } from 'formkiq-client-sdk-typescript';

const instance: AddDocumentGenerateRequest = {
    locale,
    insertDocuments,
    datasources,
    outputType,
    saveAsDocumentId,
    saveAsArtifact,
    saveAsArtifactId,
    artifactCategory,
    path,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
