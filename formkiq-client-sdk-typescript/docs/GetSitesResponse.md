# GetSitesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **string** | Username of request caller | [optional] [default to undefined]
**roles** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**samlGroups** | **Array&lt;string&gt;** | List of User Saml Groups | [optional] [default to undefined]
**userClaims** | **{ [key: string]: object; }** | Map of custom JWT claims | [optional] [default to undefined]
**sites** | [**Array&lt;Site&gt;**](Site.md) | List of sites | [optional] [default to undefined]

## Example

```typescript
import { GetSitesResponse } from 'formkiq-client-sdk-typescript';

const instance: GetSitesResponse = {
    username,
    roles,
    samlGroups,
    userClaims,
    sites,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
