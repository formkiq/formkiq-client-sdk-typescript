# MappingClassificationCondition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceType** | [**MappingClassificationConditionSourceType**](MappingClassificationConditionSourceType.md) |  | [default to undefined]
**matchingType** | [**MappingClassificationConditionMatchingType**](MappingClassificationConditionMatchingType.md) |  | [default to undefined]
**text** | **string** | Text to match against the document content | [default to undefined]
**resultKey** | **string** | Result key | [default to undefined]
**resultValue** | **string** | Result value | [default to undefined]
**llmPromptEntityName** | **string** | LLM prompt entity name | [default to undefined]

## Example

```typescript
import { MappingClassificationCondition } from 'formkiq-client-sdk-typescript';

const instance: MappingClassificationCondition = {
    sourceType,
    matchingType,
    text,
    resultKey,
    resultValue,
    llmPromptEntityName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
