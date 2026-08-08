# MappingAttributeContent

Mapping Attribute from document content or content key-value data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributeKey** | **string** | Attribute Key | [default to undefined]
**sourceType** | [**MappingAttributeSourceType**](MappingAttributeSourceType.md) |  | [default to undefined]
**defaultValue** | **string** | Default value used when no matching value is found | [optional] [default to undefined]
**defaultValues** | **Array&lt;string&gt;** | Default values used when no matching value is found | [optional] [default to undefined]
**labelTexts** | **Array&lt;string&gt;** | Label Texts | [default to undefined]
**labelMatchingType** | [**MappingAttributeLabelMatchingType**](MappingAttributeLabelMatchingType.md) |  | [default to undefined]
**validationRegex** | **string** | Attribute Value Regex Validation | [optional] [default to undefined]

## Example

```typescript
import { MappingAttributeContent } from 'formkiq-client-sdk-typescript';

const instance: MappingAttributeContent = {
    attributeKey,
    sourceType,
    defaultValue,
    defaultValues,
    labelTexts,
    labelMatchingType,
    validationRegex,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
