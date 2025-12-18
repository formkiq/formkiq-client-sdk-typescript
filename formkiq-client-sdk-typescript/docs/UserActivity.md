# UserActivity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**UserActivityType**](UserActivityType.md) |  | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**userId** | **string** | User who added document | [optional] [default to undefined]
**document** | [**Document**](Document.md) |  | [optional] [default to undefined]
**changes** | [**{ [key: string]: UserActivityChanges; }**](UserActivityChanges.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UserActivity } from 'formkiq-client-sdk-typescript';

const instance: UserActivity = {
    type,
    insertedDate,
    userId,
    document,
    changes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
