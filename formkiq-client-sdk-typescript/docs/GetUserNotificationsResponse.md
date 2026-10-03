# GetUserNotificationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next** | **string** | Next page of results token | [optional] [default to undefined]
**notifications** | [**Array&lt;UserNotification&gt;**](UserNotification.md) | List of notifications where the authenticated user\&#39;s email is a CC or BCC recipient | [optional] [default to undefined]

## Example

```typescript
import { GetUserNotificationsResponse } from 'formkiq-client-sdk-typescript';

const instance: GetUserNotificationsResponse = {
    next,
    notifications,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
