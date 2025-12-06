# AddDocumentAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | Attribute key | [default to undefined]
**stringValue** | **string** | Attribute with string value | [optional] [default to undefined]
**stringValues** | **Array&lt;string&gt;** | Attribute with string values | [optional] [default to undefined]
**numberValue** | **number** | Attribute with number value | [optional] [default to undefined]
**numberValues** | **Array&lt;number&gt;** | Attribute with number values | [optional] [default to undefined]
**booleanValue** | **boolean** | Attribute with boolean value | [optional] [default to undefined]
**classificationId** | **string** | Classification Identifier | [default to undefined]
**documentId** | **string** | Relationship To Document Identifier | [default to undefined]
**relationship** | [**DocumentRelationshipType**](DocumentRelationshipType.md) |  | [default to undefined]
**inverseRelationship** | [**DocumentRelationshipType**](DocumentRelationshipType.md) |  | [optional] [default to undefined]
**entityTypeId** | **string** | EntityType Identifier or Entity Type Name | [default to undefined]
**entityId** | **string** | Entity Identifier | [default to undefined]
**namespace** | [**EntityTypeNamespace**](EntityTypeNamespace.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AddDocumentAttribute } from 'formkiq-ts-client';

const instance: AddDocumentAttribute = {
    key,
    stringValue,
    stringValues,
    numberValue,
    numberValues,
    booleanValue,
    classificationId,
    documentId,
    relationship,
    inverseRelationship,
    entityTypeId,
    entityId,
    namespace,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
