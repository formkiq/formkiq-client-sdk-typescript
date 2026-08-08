# DocumentAiPromptNamedResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**llmPromptEntityName** | **string** | Name of the LLM Prompt Entity | [default to undefined]
**analysisCategory** | **string** | Analysis Category | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**content** | **string** | Result content | [optional] [default to undefined]
**userId** | **string** | UserId that created Result | [optional] [default to undefined]
**values** | [**Array&lt;DocumentAiPromptValue&gt;**](DocumentAiPromptValue.md) | Document AI prompt values | [optional] [default to undefined]

## Example

```typescript
import { DocumentAiPromptNamedResult } from 'formkiq-client-sdk-typescript';

const instance: DocumentAiPromptNamedResult = {
    llmPromptEntityName,
    analysisCategory,
    insertedDate,
    content,
    userId,
    values,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
