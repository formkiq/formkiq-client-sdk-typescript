# DataClassification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**llmPromptEntityName** | **string** | Name of the LLM Prompt Entity | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**content** | **string** | Result content | [optional] [default to undefined]
**userId** | **string** | UserId that created Result | [optional] [default to undefined]
**attributes** | [**Array&lt;DataClassificationAttribute&gt;**](DataClassificationAttribute.md) | Attributes extracted from result content | [optional] [default to undefined]

## Example

```typescript
import { DataClassification } from 'formkiq-client-sdk-typescript';

const instance: DataClassification = {
    llmPromptEntityName,
    insertedDate,
    content,
    userId,
    attributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
