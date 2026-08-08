# WorkflowStepConditionCriterion

A single criterion used to evaluate whether a workflow condition matches.  A criterion compares a document-derived source value against one or more provided values using the specified operator.  Supported sources include: - document attributes - document attribute value comparisons - document content type - document path  Typical examples: - attribute `status` equals `approved` - attribute `amount` greater than `1000` - attribute `invoiceTotal` equals attribute `approvedTotal` - attribute `invoiceTotal` equals the sum of attribute `lineItemAmount` - content type equals `application/pdf` - path contains `/invoices/`  Use the appropriate typed value field for the comparison: - `stringValue` for string comparisons - `numberValue` for numeric comparisons - `booleanValue` for boolean comparisons - `stringValues` for multi-value comparisons such as `IN` and `NOT_IN`  Literal value fields should be omitted when `source` is an attribute value comparison. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**WorkflowStepConditionSource**](WorkflowStepConditionSource.md) |  | [default to undefined]
**operator** | [**WorkflowStepConditionOperator**](WorkflowStepConditionOperator.md) |  | [default to undefined]
**stringValue** | **string** | String comparison value | [optional] [default to undefined]
**numberValue** | **number** | Numeric comparison value | [optional] [default to undefined]
**booleanValue** | **boolean** | Boolean comparison value | [optional] [default to undefined]
**stringValues** | **Array&lt;string&gt;** | String values used for IN or NOT_IN comparisons | [optional] [default to undefined]

## Example

```typescript
import { WorkflowStepConditionCriterion } from 'formkiq-client-sdk-typescript';

const instance: WorkflowStepConditionCriterion = {
    source,
    operator,
    stringValue,
    numberValue,
    booleanValue,
    stringValues,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
