# DocumentAiPromptResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysisCategory** | **string** | Analysis Category | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**content** | **string** | Result content | [optional] [default to undefined]
**userId** | **string** | UserId that created Result | [optional] [default to undefined]
**values** | [**Array&lt;DocumentAiPromptValue&gt;**](DocumentAiPromptValue.md) | Document AI prompt values | [optional] [default to undefined]

## Example

```typescript
import { DocumentAiPromptResult } from 'formkiq-client-sdk-typescript';

const instance: DocumentAiPromptResult = {
    analysisCategory,
    insertedDate,
    content,
    userId,
    values,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
