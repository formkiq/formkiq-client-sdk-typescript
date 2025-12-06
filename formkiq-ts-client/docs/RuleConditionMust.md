# RuleConditionMust


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | [**RuleConditionAttribute**](RuleConditionAttribute.md) |  | [optional] [default to undefined]
**criterion** | [**RuleConditionCriterion**](RuleConditionCriterion.md) |  | [optional] [default to undefined]
**attributeKey** | **string** | Rule attribute key (only required for ATTRIBUTE criterion) | [optional] [default to undefined]
**fieldName** | **string** | Rule field name (only required for FIELD criterion) | [optional] [default to undefined]
**value** | **string** | Rule condition value | [optional] [default to undefined]
**operation** | [**RuleConditionOperation**](RuleConditionOperation.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RuleConditionMust } from 'formkiq-ts-client';

const instance: RuleConditionMust = {
    attribute,
    criterion,
    attributeKey,
    fieldName,
    value,
    operation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
