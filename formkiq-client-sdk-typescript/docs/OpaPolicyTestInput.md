# OpaPolicyTestInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | **string** | API Gateway resource template, such as /documents/{documentId}. | [default to undefined]
**httpMethod** | [**OpaPolicyTestHttpMethod**](OpaPolicyTestHttpMethod.md) |  | [default to undefined]
**pathParameters** | **{ [key: string]: string; }** | Simulated API Gateway path parameters. Defaults to an empty object. | [optional] [default to undefined]
**_queryParameters** | **{ [key: string]: string; }** | Simulated API Gateway query parameters. The path siteId is added when siteId is omitted; a different siteId is rejected. | [optional] [default to undefined]
**user** | [**OpaPolicyTestInputUser**](OpaPolicyTestInputUser.md) |  | [default to undefined]

## Example

```typescript
import { OpaPolicyTestInput } from 'formkiq-client-sdk-typescript';

const instance: OpaPolicyTestInput = {
    resource,
    httpMethod,
    pathParameters,
    _queryParameters,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
