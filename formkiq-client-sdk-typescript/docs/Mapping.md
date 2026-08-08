# Mapping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mappingId** | **string** | Mapping Identifier | [default to undefined]
**name** | **string** | Name of Mapping | [optional] [default to undefined]
**description** | **string** | Description of Mapping | [optional] [default to undefined]
**attributes** | [**Array&lt;MappingAttribute&gt;**](MappingAttribute.md) | List of attributes | [optional] [default to undefined]
**classifications** | [**Array&lt;MappingClassification&gt;**](MappingClassification.md) | List of classifications | [optional] [default to undefined]

## Example

```typescript
import { Mapping } from 'formkiq-client-sdk-typescript';

const instance: Mapping = {
    mappingId,
    name,
    description,
    attributes,
    classifications,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
