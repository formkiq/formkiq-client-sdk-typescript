# DocusignNotification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**useAccountDefaults** | **string** | When true, the account default notification settings are used for the envelope, overriding the reminders and expirations settings. When false, the reminders and expirations settings specified in this request are used. The default value is false. | [optional] [default to undefined]
**expirations** | [**DocusignNotificationExpirations**](DocusignNotificationExpirations.md) |  | [optional] [default to undefined]
**reminders** | [**DocusignNotificationReminders**](DocusignNotificationReminders.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DocusignNotification } from 'formkiq-ts-client';

const instance: DocusignNotification = {
    useAccountDefaults,
    expirations,
    reminders,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
