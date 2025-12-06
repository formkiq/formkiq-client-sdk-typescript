# Ruleset


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rulesetId** | **string** | Ruleset identifier | [optional] [default to undefined]
**description** | **string** | Ruleset description | [optional] [default to undefined]
**priority** | **number** | Ruleset priority | [optional] [default to undefined]
**version** | **number** | Ruleset version | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**status** | [**RulesetStatus**](RulesetStatus.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Ruleset } from 'formkiq-ts-client';

const instance: Ruleset = {
    rulesetId,
    description,
    priority,
    version,
    insertedDate,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
