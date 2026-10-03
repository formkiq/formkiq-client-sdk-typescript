# NotificationEmailSmtpConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **string** | SMTP server hostname | [default to undefined]
**port** | **number** | SMTP server port | [default to undefined]
**connectionSecurity** | [**NotificationEmailSmtpConnectionSecurity**](NotificationEmailSmtpConnectionSecurity.md) |  | [default to undefined]
**credentialsSecretArn** | **string** | AWS Secrets Manager ARN for a secret whose value is a JSON object containing non-empty string properties named \&quot;username\&quot; and \&quot;password\&quot;, for example: {\&quot;username\&quot;:\&quot;smtp-user@example.com\&quot;,\&quot;password\&quot;:\&quot;smtp-password\&quot;}. | [default to undefined]

## Example

```typescript
import { NotificationEmailSmtpConfig } from 'formkiq-client-sdk-typescript';

const instance: NotificationEmailSmtpConfig = {
    host,
    port,
    connectionSecurity,
    credentialsSecretArn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
