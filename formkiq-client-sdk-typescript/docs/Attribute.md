# Attribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**AttributeType**](AttributeType.md) |  | [optional] [default to undefined]
**key** | **string** | Attribute Key | [default to undefined]
**dataType** | [**AttributeDataType**](AttributeDataType.md) |  | [optional] [default to undefined]
**validationRegex** | **string** | Attribute Value Regex Validation | [optional] [default to undefined]
**watermark** | [**Watermark**](Watermark.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Attribute } from 'formkiq-client-sdk-typescript';

const instance: Attribute = {
    type,
    key,
    dataType,
    validationRegex,
    watermark,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
