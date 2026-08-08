# WorkflowStepConditionAttributeValueComparison

Compares the value of one document attribute to another attribute-derived value on the same document.  The criterion operator is evaluated as: document.attribute[valueAttributeKey] OP comparison  Literal comparison value fields are not used with this source. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceType** | [**WorkflowStepConditionAttributeValueComparisonSourceType**](WorkflowStepConditionAttributeValueComparisonSourceType.md) |  | [default to undefined]
**valueAttributeKey** | **string** | Document attribute key containing the value to compare. | [default to undefined]
**comparison** | [**WorkflowStepConditionAttributeValueComparisonTarget**](WorkflowStepConditionAttributeValueComparisonTarget.md) |  | [default to undefined]

## Example

```typescript
import { WorkflowStepConditionAttributeValueComparison } from 'formkiq-client-sdk-typescript';

const instance: WorkflowStepConditionAttributeValueComparison = {
    sourceType,
    valueAttributeKey,
    comparison,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
