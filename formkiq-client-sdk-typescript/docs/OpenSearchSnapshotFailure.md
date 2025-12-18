# OpenSearchSnapshotFailure

Details about a failure for a specific shard in a snapshot.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **string** | The index name. | [optional] [default to undefined]
**index_uuid** | **string** | UUID of the index. | [optional] [default to undefined]
**shard_id** | **number** | Shard identifier. | [optional] [default to undefined]
**reason** | **string** | Full exception/message explaining why the failure occurred. | [optional] [default to undefined]
**node_id** | **string** | ID of the node handling that shard. | [optional] [default to undefined]
**status** | **string** | Status of the failure (e.g., INTERNAL_SERVER_ERROR). | [optional] [default to undefined]

## Example

```typescript
import { OpenSearchSnapshotFailure } from 'formkiq-client-sdk-typescript';

const instance: OpenSearchSnapshotFailure = {
    index,
    index_uuid,
    shard_id,
    reason,
    node_id,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
