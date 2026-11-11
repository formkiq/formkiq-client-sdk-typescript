# TestOpaAccessPolicyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decision** | [**OpaPolicyTestDecision**](OpaPolicyTestDecision.md) |  | [default to undefined]
**criteriaGroups** | [**Array&lt;OpaPolicyTestCriteriaGroup&gt;**](OpaPolicyTestCriteriaGroup.md) | OR groups containing AND document criteria returned by partial evaluation. Empty when decision is ALLOW or DENY. | [default to undefined]

## Example

```typescript
import { TestOpaAccessPolicyResponse } from 'formkiq-client-sdk-typescript';

const instance: TestOpaAccessPolicyResponse = {
    decision,
    criteriaGroups,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
