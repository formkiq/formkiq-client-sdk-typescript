# Rule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ruleId** | **string** | Workflow to start on matching of conditions | [optional] [default to undefined]
**priority** | **number** | Rule priority | [optional] [default to undefined]
**description** | **string** | Ruleset description | [optional] [default to undefined]
**workflowId** | **string** | Workflow to start on matching of conditions | [optional] [default to undefined]
**status** | [**RulesetStatus**](RulesetStatus.md) |  | [optional] [default to undefined]
**conditions** | [**RuleCondition**](RuleCondition.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Rule } from 'formkiq-ts-client';

const instance: Rule = {
    ruleId,
    priority,
    description,
    workflowId,
    status,
    conditions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
