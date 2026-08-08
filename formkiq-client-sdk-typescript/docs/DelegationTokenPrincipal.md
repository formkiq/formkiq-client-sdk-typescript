# DelegationTokenPrincipal

User identity to store in the signed delegation token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **string** | Username to use for activity/audit attribution when the delegation token is applied. | [default to undefined]

## Example

```typescript
import { DelegationTokenPrincipal } from 'formkiq-client-sdk-typescript';

const instance: DelegationTokenPrincipal = {
    username,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
