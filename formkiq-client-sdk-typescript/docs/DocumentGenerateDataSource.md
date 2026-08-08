# DocumentGenerateDataSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The data source name | [optional] [default to undefined]
**documentId** | **string** | Document Identifier of the data source document | [default to undefined]
**artifactId** | **string** | Document Artifact Identifier of the data source document | [optional] [default to undefined]
**dataRoot** | **string** | The default JSON object path for the data object | [optional] [default to 'data']

## Example

```typescript
import { DocumentGenerateDataSource } from 'formkiq-client-sdk-typescript';

const instance: DocumentGenerateDataSource = {
    name,
    documentId,
    artifactId,
    dataRoot,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
