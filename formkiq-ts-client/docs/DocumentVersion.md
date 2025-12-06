# DocumentVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**checksum** | **string** | Document checksum, changes when document file changes | [optional] [default to undefined]
**checksumType** | [**ChecksumType**](ChecksumType.md) |  | [optional] [default to undefined]
**contentType** | **string** | Document Content-Type | [optional] [default to undefined]
**userId** | **string** | User who added document | [optional] [default to undefined]
**contentLength** | **number** | Document size | [optional] [default to undefined]
**versionKey** | **string** | Document Version Identifier | [optional] [default to undefined]
**s3version** | **string** | Document storage version | [optional] [default to undefined]

## Example

```typescript
import { DocumentVersion } from 'formkiq-ts-client';

const instance: DocumentVersion = {
    insertedDate,
    checksum,
    checksumType,
    contentType,
    userId,
    contentLength,
    versionKey,
    s3version,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
