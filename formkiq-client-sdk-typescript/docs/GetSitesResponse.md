# GetSitesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **string** | Username of request caller | [optional] [default to undefined]
**roles** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**samlGroups** | **Array&lt;string&gt;** | List of User Saml Groups | [optional] [default to undefined]
**userClaims** | **{ [key: string]: any; }** | Custom claims for the authenticated caller, from a JWT or API key. Values retain their JSON types, including strings, numbers, Booleans, arrays, and objects. Null-valued object fields are omitted. | [optional] [default to undefined]
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
