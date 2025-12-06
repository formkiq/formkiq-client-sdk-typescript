# AttributeSchemaRequired


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributeKey** | **string** |  | [optional] [default to undefined]
**minNumberOfValues** | **number** | The minimum number of attribute values | [optional] [default to undefined]
**maxNumberOfValues** | **number** | The maximum number of attribute values | [optional] [default to undefined]
**defaultValue** | **string** | Default value | [optional] [default to undefined]
**defaultValues** | **Array&lt;string&gt;** | Default values | [optional] [default to undefined]
**allowedValues** | **Array&lt;string&gt;** | Only valid string values | [optional] [default to undefined]
**localizedAllowedValues** | **{ [key: string]: string; }** |  | [optional] [default to undefined]

## Example

```typescript
import { AttributeSchemaRequired } from 'formkiq-ts-client';

const instance: AttributeSchemaRequired = {
    attributeKey,
    minNumberOfValues,
    maxNumberOfValues,
    defaultValue,
    defaultValues,
    allowedValues,
    localizedAllowedValues,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
