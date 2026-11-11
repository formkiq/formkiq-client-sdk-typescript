# OpaPolicyTestInputUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **string** | Simulated username placed at input.user.username. | [default to undefined]
**roles** | **Set&lt;string&gt;** | Simulated roles placed at input.user.roles. Defaults to an empty array. | [optional] [default to undefined]
**claims** | **{ [key: string]: any; }** | JSON-compatible simulated claims placed at input.user.claims. Defaults to an empty object. | [optional] [default to undefined]

## Example

```typescript
import { OpaPolicyTestInputUser } from 'formkiq-client-sdk-typescript';

const instance: OpaPolicyTestInputUser = {
    username,
    roles,
    claims,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
