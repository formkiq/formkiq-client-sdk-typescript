# WorkflowStepConditionSource

Defines the document-derived source value to evaluate for a workflow condition criterion.  The source identifies where the value comes from before applying the operator. Supported sources include: - a document attribute identified by `attributeKey` - a comparison between a document attribute value and another attribute-derived   value - the document content type - the document path 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributeKey** | **string** | Document attribute key | [default to undefined]
**sourceType** | [**WorkflowStepConditionAttributeValueComparisonSourceType**](WorkflowStepConditionAttributeValueComparisonSourceType.md) |  | [default to undefined]
**valueAttributeKey** | **string** | Document attribute key containing the value to compare. | [default to undefined]
**comparison** | [**WorkflowStepConditionAttributeValueComparisonTarget**](WorkflowStepConditionAttributeValueComparisonTarget.md) |  | [default to undefined]

## Example

```typescript
import { WorkflowStepConditionSource } from 'formkiq-client-sdk-typescript';

const instance: WorkflowStepConditionSource = {
    attributeKey,
    sourceType,
    valueAttributeKey,
    comparison,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
