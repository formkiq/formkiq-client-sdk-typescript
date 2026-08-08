# AddDelegationTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | [**Array&lt;DelegationTokenPermission&gt;**](DelegationTokenPermission.md) | Permissions to keep while the delegation token is applied. These must be a subset of the caller\&#39;s current permissions for the site and cannot include ADMIN. | [default to undefined]
**onBehalfOf** | [**DelegationTokenPrincipal**](DelegationTokenPrincipal.md) |  | [optional] [default to undefined]
**reason** | **string** | Reason the delegation token is being generated. Stored in the signed token for audit/support traceability. | [default to undefined]

## Example

```typescript
import { AddDelegationTokenRequest } from 'formkiq-client-sdk-typescript';

const instance: AddDelegationTokenRequest = {
    permissions,
    onBehalfOf,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
