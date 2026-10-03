# DocusignSignerReadyToSignNotification

Configuration for a FormKiQ-managed notification stored with status WAITING when the envelope is created. The Docusign recipient-completed callback for the immediately preceding signer in routing order releases it to PENDING. The callback updates the existing document notification without creating a separate user notification record. The notification is addressed to this signer\'s email address and does not require suppressEmails to be enabled. Requires a configured connectUrl, unique recipient IDs and unique positive integer routing orders for all signers, and at least one preceding signer. Only sequential signing is supported when readyToSignNotification is configured; parallel routing orders are rejected.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notificationType** | [**DocumentNotificationType**](DocumentNotificationType.md) |  | [default to undefined]
**subject** | **string** | Notification subject | [default to undefined]
**body** | **string** | Notification body | [default to undefined]

## Example

```typescript
import { DocusignSignerReadyToSignNotification } from 'formkiq-client-sdk-typescript';

const instance: DocusignSignerReadyToSignNotification = {
    notificationType,
    subject,
    body,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
