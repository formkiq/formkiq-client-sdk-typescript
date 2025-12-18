# AttributeSchemaOptional


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minNumberOfValues** | **number** | The minimum number of attribute values | [optional] [default to undefined]
**maxNumberOfValues** | **number** | The maximum number of attribute values | [optional] [default to undefined]
**attributeKey** | **string** |  | [optional] [default to undefined]
**allowedValues** | **Array&lt;string&gt;** | Only valid string values | [optional] [default to undefined]
**localizedAllowedValues** | **{ [key: string]: string; }** |  | [optional] [default to undefined]

## Example

```typescript
import { AttributeSchemaOptional } from 'formkiq-client-sdk-typescript';

const instance: AttributeSchemaOptional = {
    minNumberOfValues,
    maxNumberOfValues,
    attributeKey,
    allowedValues,
    localizedAllowedValues,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
