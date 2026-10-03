# DocumentNotification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityTypeId** | **string** | Reminder Policy entity type identifier | [optional] [default to undefined]
**entityId** | **string** | Reminder Policy entity identifier | [optional] [default to undefined]
**cc** | **Array&lt;string&gt;** | Normalized CC recipient email addresses | [optional] [default to undefined]
**bcc** | **Array&lt;string&gt;** | Normalized BCC recipient email addresses | [optional] [default to undefined]
**notificationType** | [**DocumentNotificationType**](DocumentNotificationType.md) |  | [optional] [default to undefined]
**notificationDate** | **string** | Scheduled notification occurrence date | [optional] [default to undefined]
**status** | [**DocumentNotificationStatus**](DocumentNotificationStatus.md) |  | [optional] [default to undefined]
**action** | [**DocumentAction**](DocumentAction.md) |  | [optional] [default to undefined]
**insertedDate** | **string** | Inserted timestamp | [optional] [default to undefined]

## Example

```typescript
import { DocumentNotification } from 'formkiq-client-sdk-typescript';

const instance: DocumentNotification = {
    entityTypeId,
    entityId,
    cc,
    bcc,
    notificationType,
    notificationDate,
    status,
    action,
    insertedDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
