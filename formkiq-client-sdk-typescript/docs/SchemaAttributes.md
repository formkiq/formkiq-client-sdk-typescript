# SchemaAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compositeKeys** | [**Array&lt;AttributeSchemaCompositeKey&gt;**](AttributeSchemaCompositeKey.md) | List of Composite Keys | [optional] [default to undefined]
**required** | [**Array&lt;AttributeSchemaRequired&gt;**](AttributeSchemaRequired.md) | List of Required Attributes | [optional] [default to undefined]
**optional** | [**Array&lt;AttributeSchemaOptional&gt;**](AttributeSchemaOptional.md) | List of Optional Attribute | [optional] [default to undefined]
**allowAdditionalAttributes** | **boolean** |  | [optional] [default to true]

## Example

```typescript
import { SchemaAttributes } from 'formkiq-client-sdk-typescript';

const instance: SchemaAttributes = {
    compositeKeys,
    required,
    optional,
    allowAdditionalAttributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
