# UpdateRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**priority** | **number** | Rule priority | [optional] [default to undefined]
**description** | **string** | Rule description | [optional] [default to undefined]
**status** | [**RulesetStatus**](RulesetStatus.md) |  | [optional] [default to undefined]
**workflowId** | **string** | Workflow to start on matching of conditions | [optional] [default to undefined]
**conditions** | [**RuleCondition**](RuleCondition.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateRule } from 'formkiq-ts-client';

const instance: UpdateRule = {
    priority,
    description,
    status,
    workflowId,
    conditions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
