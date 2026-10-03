# NotificationConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | Email address to use as the From address for notifications | [optional] [default to undefined]
**provider** | [**NotificationEmailProvider**](NotificationEmailProvider.md) |  | [optional] [default to undefined]
**smtp** | [**NotificationEmailSmtpConfig**](NotificationEmailSmtpConfig.md) |  | [optional] [default to undefined]

## Example

```typescript
import { NotificationConfig } from 'formkiq-client-sdk-typescript';

const instance: NotificationConfig = {
    email,
    provider,
    smtp,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
