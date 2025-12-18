# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**username** | **string** | Username of user | [optional] [default to undefined]
**email** | **string** | Email of user | [optional] [default to undefined]
**enabled** | **boolean** | whether the user is enabled | [optional] [default to undefined]
**userStatus** | **string** | Status of user | [optional] [default to undefined]
**insertedDate** | **string** | Inserted timestamp of user | [optional] [default to undefined]
**lastModifiedDate** | **string** | Last nodified timestamp of user | [optional] [default to undefined]
**attributes** | [**UserAttributes**](UserAttributes.md) |  | [optional] [default to undefined]

## Example

```typescript
import { User } from 'formkiq-client-sdk-typescript';

const instance: User = {
    username,
    email,
    enabled,
    userStatus,
    insertedDate,
    lastModifiedDate,
    attributes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
