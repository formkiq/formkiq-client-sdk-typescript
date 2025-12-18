# AddDocumentAttributeRelationship

Document Relationship

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documentId** | **string** | Relationship To Document Identifier | [default to undefined]
**relationship** | [**DocumentRelationshipType**](DocumentRelationshipType.md) |  | [default to undefined]
**inverseRelationship** | [**DocumentRelationshipType**](DocumentRelationshipType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AddDocumentAttributeRelationship } from 'formkiq-client-sdk-typescript';

const instance: AddDocumentAttributeRelationship = {
    documentId,
    relationship,
    inverseRelationship,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
