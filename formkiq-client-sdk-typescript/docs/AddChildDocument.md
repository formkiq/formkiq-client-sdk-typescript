# AddChildDocument

List of related documents

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **string** | Path or Name of document | [optional] [default to undefined]
**width** | **string** | Document Content Width property | [optional] [default to undefined]
**height** | **string** | Document Content Height property | [optional] [default to undefined]
**deepLinkPath** | **string** | Path or Name of deep link | [optional] [default to undefined]
**resourceType** | [**DocumentResourceType**](DocumentResourceType.md) |  | [optional] [default to undefined]
**contentType** | **string** | Document Content-Type | [optional] [default to undefined]
**checksumType** | [**ChecksumType**](ChecksumType.md) |  | [optional] [default to undefined]
**checksum** | **string** | The checksum value to validate the file against | [optional] [default to undefined]
**isBase64** | **boolean** | Is the content Base64-encoded? | [optional] [default to undefined]
**content** | **string** | Document content | [default to undefined]
**tags** | [**Array&lt;AddDocumentTag&gt;**](AddDocumentTag.md) | List of document tags | [optional] [default to undefined]
**metadata** | [**Array&lt;AddDocumentMetadata&gt;**](AddDocumentMetadata.md) | List of document Metadata | [optional] [default to undefined]
**attributes** | [**Array&lt;AddDocumentAttribute&gt;**](AddDocumentAttribute.md) | List of Attributes to add to document | [optional] [default to undefined]

## Example

```typescript
import { AddChildDocument } from 'formkiq-client-sdk-typescript';

const instance: AddChildDocument = {
    path,
    width,
    height,
    deepLinkPath,
    resourceType,
    contentType,
    checksumType,
    checksum,
    isBase64,
    content,
    tags,
    metadata,
    attributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
