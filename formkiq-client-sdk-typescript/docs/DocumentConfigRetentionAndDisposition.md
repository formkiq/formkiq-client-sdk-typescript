# DocumentConfigRetentionAndDisposition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dispositionAction** | [**DocumentConfigDispositionAction**](DocumentConfigDispositionAction.md) |  | [optional] [default to undefined]
**softDeleteRetentionInDays** | **number** | Number of days to retain soft deleted documents before permanent deletion. Use -1 to retain soft deleted documents until trash is cleared manually. | [optional] [default to -1]

## Example

```typescript
import { DocumentConfigRetentionAndDisposition } from 'formkiq-client-sdk-typescript';

const instance: DocumentConfigRetentionAndDisposition = {
    dispositionAction,
    softDeleteRetentionInDays,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
