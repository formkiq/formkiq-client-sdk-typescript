# AddDocumentNotificationRequest

At least one CC or BCC recipient is required

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notificationType** | [**DocumentNotificationType**](DocumentNotificationType.md) |  | [default to undefined]
**cc** | **Set&lt;string&gt;** | CC recipient email addresses | [optional] [default to undefined]
**bcc** | **Set&lt;string&gt;** | BCC recipient email addresses | [optional] [default to undefined]
**subject** | **string** | Notification subject | [default to undefined]
**body** | **string** | Notification body | [default to undefined]

## Example

```typescript
import { AddDocumentNotificationRequest } from 'formkiq-client-sdk-typescript';

const instance: AddDocumentNotificationRequest = {
    notificationType,
    cc,
    bcc,
    subject,
    body,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
