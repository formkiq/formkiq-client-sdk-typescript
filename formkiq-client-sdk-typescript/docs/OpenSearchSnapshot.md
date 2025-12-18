# OpenSearchSnapshot


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**snapshot** | **string** | Snapshot name | [optional] [default to undefined]
**uuid** | **string** | Snapshot’s universally unique identifier (UUID) | [optional] [default to undefined]
**version** | **string** | Open Search version that created the snapshot | [optional] [default to undefined]
**indices** | **Array&lt;string&gt;** | Indices in the snapshot | [optional] [default to undefined]
**shards** | [**OpenSearchSnapshotShard**](OpenSearchSnapshotShard.md) |  | [optional] [default to undefined]
**failures** | [**Array&lt;OpenSearchSnapshotFailure&gt;**](OpenSearchSnapshotFailure.md) |  | [optional] [default to undefined]
**state** | **string** | Snapshot status. Possible values: IN_PROGRESS, SUCCESS, FAILED, PARTIAL | [optional] [default to undefined]
**start_time** | **string** | Date/time when the snapshot creation process began | [optional] [default to undefined]
**start_time_in_millis** | **number** | Time (in milliseconds) when the snapshot creation process began | [optional] [default to undefined]
**end_time** | **string** | Date/time when the snapshot creation process ended | [optional] [default to undefined]
**end_time_in_millis** | **number** | Time (in milliseconds) when the snapshot creation process ended | [optional] [default to undefined]
**duration_in_millis** | **number** | Total time (in milliseconds) that the snapshot creation process lasted | [optional] [default to undefined]

## Example

```typescript
import { OpenSearchSnapshot } from 'formkiq-client-sdk-typescript';

const instance: OpenSearchSnapshot = {
    snapshot,
    uuid,
    version,
    indices,
    shards,
    failures,
    state,
    start_time,
    start_time_in_millis,
    end_time,
    end_time_in_millis,
    duration_in_millis,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
