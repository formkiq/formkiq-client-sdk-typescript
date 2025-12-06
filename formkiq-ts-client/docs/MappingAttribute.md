# MappingAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributeKey** | **string** | Attribute Key | [optional] [default to undefined]
**sourceType** | [**MappingAttributeSourceType**](MappingAttributeSourceType.md) |  | [optional] [default to undefined]
**defaultValue** | **string** | Default value | [optional] [default to undefined]
**defaultValues** | **Array&lt;string&gt;** | Default values | [optional] [default to undefined]
**labelTexts** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**labelMatchingType** | [**MappingAttributeLabelMatchingType**](MappingAttributeLabelMatchingType.md) |  | [optional] [default to undefined]
**metadataField** | [**MappingAttributeMetadataField**](MappingAttributeMetadataField.md) |  | [optional] [default to undefined]
**validationRegex** | **string** | Attribute Value Regex Validation | [optional] [default to undefined]

## Example

```typescript
import { MappingAttribute } from 'formkiq-ts-client';

const instance: MappingAttribute = {
    attributeKey,
    sourceType,
    defaultValue,
    defaultValues,
    labelTexts,
    labelMatchingType,
    metadataField,
    validationRegex,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
