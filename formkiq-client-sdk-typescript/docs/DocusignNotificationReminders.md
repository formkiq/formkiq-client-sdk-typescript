# DocusignNotificationReminders


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reminderDelay** | **string** | An integer specifying the number of days after the recipient receives the envelope that reminder emails are sent to the recipient. | [optional] [default to undefined]
**reminderEnabled** | **string** | When true, reminders are enabled. The default value is false. | [optional] [default to undefined]
**reminderFrequency** | **string** | An integer specifying the interval in days between reminder emails. | [optional] [default to undefined]

## Example

```typescript
import { DocusignNotificationReminders } from 'formkiq-client-sdk-typescript';

const instance: DocusignNotificationReminders = {
    reminderDelay,
    reminderEnabled,
    reminderFrequency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
