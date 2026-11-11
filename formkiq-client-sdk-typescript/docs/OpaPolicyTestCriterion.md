# OpaPolicyTestCriterion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | Document attribute key referenced by the partial criterion. | [default to undefined]
**operator** | [**OpaPolicyTestOperator**](OpaPolicyTestOperator.md) |  | [default to undefined]
**value** | **any** | String, number, boolean, array, or null value used by the criterion. | [default to undefined]

## Example

```typescript
import { OpaPolicyTestCriterion } from 'formkiq-client-sdk-typescript';

const instance: OpaPolicyTestCriterion = {
    key,
    operator,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
