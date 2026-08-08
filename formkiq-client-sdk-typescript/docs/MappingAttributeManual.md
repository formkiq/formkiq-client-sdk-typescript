# MappingAttributeManual

Mapping Attribute with manually configured default values

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributeKey** | **string** | Attribute Key | [default to undefined]
**sourceType** | [**MappingAttributeSourceType**](MappingAttributeSourceType.md) |  | [default to undefined]
**defaultValue** | **string** | Default value | [optional] [default to undefined]
**defaultValues** | **Array&lt;string&gt;** | Default values | [optional] [default to undefined]

## Example

```typescript
import { MappingAttributeManual } from 'formkiq-client-sdk-typescript';

const instance: MappingAttributeManual = {
    attributeKey,
    sourceType,
    defaultValue,
    defaultValues,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
