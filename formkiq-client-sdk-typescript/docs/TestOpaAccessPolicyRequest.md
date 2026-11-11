# TestOpaAccessPolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policyItems** | [**Array&lt;OpaPolicyItem&gt;**](OpaPolicyItem.md) | Draft OPA policy items to test without persisting them. When omitted, the site\&#39;s saved OPA access policy is tested. An explicitly empty array tests the generated deny-all policy. | [optional] [default to undefined]
**input** | [**OpaPolicyTestInput**](OpaPolicyTestInput.md) |  | [default to undefined]

## Example

```typescript
import { TestOpaAccessPolicyRequest } from 'formkiq-client-sdk-typescript';

const instance: TestOpaAccessPolicyRequest = {
    policyItems,
    input,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
