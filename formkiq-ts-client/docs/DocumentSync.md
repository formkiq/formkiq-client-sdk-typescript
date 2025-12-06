# DocumentSync


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service** | [**DocumentSyncService**](DocumentSyncService.md) |  | [optional] [default to undefined]
**status** | [**DocumentSyncStatus**](DocumentSyncStatus.md) |  | [optional] [default to undefined]
**type** | [**DocumentSyncType**](DocumentSyncType.md) |  | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**syncDate** | **string** | Timestamp of synchronization | [optional] [default to undefined]
**userId** | **string** | User who added document | [optional] [default to undefined]
**message** | **string** | Document sync message | [optional] [default to undefined]

## Example

```typescript
import { DocumentSync } from 'formkiq-ts-client';

const instance: DocumentSync = {
    service,
    status,
    type,
    insertedDate,
    syncDate,
    userId,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
