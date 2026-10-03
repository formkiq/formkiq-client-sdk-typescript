# FulltextSearchItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**siteId** | **string** | Site Identifier | [optional] [default to undefined]
**path** | **string** | Path or Name of document | [optional] [default to undefined]
**contentType** | **string** | Document Content-Type | [optional] [default to undefined]
**width** | **string** | Document Content Width property | [optional] [default to undefined]
**height** | **string** | Document Content Height property | [optional] [default to undefined]
**deepLinkPath** | **string** | Path or Name of deep link | [optional] [default to undefined]
**resourceType** | [**DocumentResourceType**](DocumentResourceType.md) |  | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**lastModifiedDate** | **string** | Last Modified Timestamp | [optional] [default to undefined]
**checksum** | **string** | Document checksum, changes when document file changes | [optional] [default to undefined]
**checksumType** | [**ChecksumType**](ChecksumType.md) |  | [optional] [default to undefined]
**documentId** | **string** | Document Identifier | [optional] [default to undefined]
**contentLength** | **number** | Document size | [optional] [default to undefined]
**createdBy** | **string** | User who added document | [optional] [default to undefined]
**tags** | **{ [key: string]: object; }** |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: object; }** |  | [optional] [default to undefined]
**attributes** | [**{ [key: string]: FulltextAttribute; }**](FulltextAttribute.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FulltextSearchItem } from 'formkiq-client-sdk-typescript';

const instance: FulltextSearchItem = {
    siteId,
    path,
    contentType,
    width,
    height,
    deepLinkPath,
    resourceType,
    insertedDate,
    lastModifiedDate,
    checksum,
    checksumType,
    documentId,
    contentLength,
    createdBy,
    tags,
    metadata,
    attributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
