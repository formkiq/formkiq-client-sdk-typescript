# AddDocumentUploadRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentId** | **string** | optional Document Identifier, if skipped one will be assigned | [optional] [default to undefined]
**path** | **string** | Path or Name of document | [optional] [default to undefined]
**contentType** | **string** | Document media type | [optional] [default to undefined]
**width** | **string** | Document Content Width property | [optional] [default to undefined]
**height** | **string** | Document Content Height property | [optional] [default to undefined]
**deepLinkPath** | **string** | Path or Name of deep link | [optional] [default to undefined]
**checksumType** | [**ChecksumType**](ChecksumType.md) |  | [optional] [default to undefined]
**checksum** | **string** | The checksum value to validate the file against | [optional] [default to undefined]
**attributes** | [**Array&lt;AddDocumentAttribute&gt;**](AddDocumentAttribute.md) | List of Attributes to add to document | [optional] [default to undefined]
**tags** | [**Array&lt;AddDocumentTag&gt;**](AddDocumentTag.md) | List of document tags | [optional] [default to undefined]
**actions** | [**Array&lt;AddAction&gt;**](AddAction.md) | List of Actions | [optional] [default to undefined]

## Example

```typescript
import { AddDocumentUploadRequest } from 'formkiq-client-sdk-typescript';

const instance: AddDocumentUploadRequest = {
    documentId,
    path,
    contentType,
    width,
    height,
    deepLinkPath,
    checksumType,
    checksum,
    attributes,
    tags,
    actions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
