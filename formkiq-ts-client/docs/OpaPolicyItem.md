# OpaPolicyItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | **string** | OPA Policy in REGO format | [optional] [default to undefined]
**allRoles** | **Array&lt;string&gt;** | User must match all roles | [optional] [default to undefined]
**anyRoles** | **Array&lt;string&gt;** | User must match any role | [optional] [default to undefined]
**excludedRoles** | **Array&lt;string&gt;** | User must NOT have these roles | [optional] [default to undefined]
**attributes** | [**Array&lt;OpaPolicyAttribute&gt;**](OpaPolicyAttribute.md) |  | [optional] [default to undefined]
**input** | [**OpaPolicyInput**](OpaPolicyInput.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OpaPolicyItem } from 'formkiq-ts-client';

const instance: OpaPolicyItem = {
    policy,
    allRoles,
    anyRoles,
    excludedRoles,
    attributes,
    input,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
