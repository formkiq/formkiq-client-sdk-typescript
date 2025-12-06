# OpenSearchIndex


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**numberOfReplicas** | **string** | The number of replicas per shard | [optional] [default to undefined]
**numberOfShards** | **string** | The number of shards in index | [optional] [default to undefined]
**documentCount** | **string** | The number of documents in index | [optional] [default to undefined]
**storeSize** | **string** | The store size of the index | [optional] [default to undefined]
**name** | **string** | Name of Index | [optional] [default to undefined]
**aliases** | [**Array&lt;OpenSearchAlias&gt;**](OpenSearchAlias.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OpenSearchIndex } from 'formkiq-ts-client';

const instance: OpenSearchIndex = {
    numberOfReplicas,
    numberOfShards,
    documentCount,
    storeSize,
    name,
    aliases,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
