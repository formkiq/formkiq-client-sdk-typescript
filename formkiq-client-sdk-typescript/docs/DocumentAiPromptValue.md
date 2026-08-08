# DocumentAiPromptValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resultType** | [**DocumentAiPromptResultType**](DocumentAiPromptResultType.md) |  | [default to undefined]
**entityType** | **string** | Entity type when resultType is ENTITY | [optional] [default to undefined]
**entityNamespace** | [**EntityTypeNamespace**](EntityTypeNamespace.md) |  | [optional] [default to undefined]
**attributes** | [**Array&lt;DocumentAiPromptResultAttribute&gt;**](DocumentAiPromptResultAttribute.md) | Attributes extracted from result content | [default to undefined]

## Example

```typescript
import { DocumentAiPromptValue } from 'formkiq-client-sdk-typescript';

const instance: DocumentAiPromptValue = {
    resultType,
    entityType,
    entityNamespace,
    attributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
