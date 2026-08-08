# MappingAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributeKey** | **string** | Attribute Key | [default to undefined]
**sourceType** | [**MappingAttributeSourceType**](MappingAttributeSourceType.md) |  | [default to undefined]
**defaultValue** | **string** | Default value | [optional] [default to undefined]
**defaultValues** | **Array&lt;string&gt;** | Default values | [optional] [default to undefined]
**labelTexts** | **Array&lt;string&gt;** | Label Texts | [default to undefined]
**labelMatchingType** | [**MappingAttributeLabelMatchingType**](MappingAttributeLabelMatchingType.md) |  | [default to undefined]
**validationRegex** | **string** | Attribute Value Regex Validation | [optional] [default to undefined]
**metadataField** | [**MappingAttributeMetadataField**](MappingAttributeMetadataField.md) |  | [default to undefined]
**llmPromptEntityName** | **string** | LLM prompt entity name | [default to undefined]

## Example

```typescript
import { MappingAttribute } from 'formkiq-client-sdk-typescript';

const instance: MappingAttribute = {
    attributeKey,
    sourceType,
    defaultValue,
    defaultValues,
    labelTexts,
    labelMatchingType,
    validationRegex,
    metadataField,
    llmPromptEntityName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
