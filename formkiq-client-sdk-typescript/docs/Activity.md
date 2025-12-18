# Activity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | **string** | Resource of Activity | [optional] [default to undefined]
**type** | **string** | Type of Activity | [optional] [default to undefined]
**source** | **string** | The Source of the activity | [optional] [default to undefined]
**sourceIpAddress** | **string** | The Source IP address of the user | [optional] [default to undefined]
**message** | **string** | The activity message | [optional] [default to undefined]
**status** | [**ActivityStatus**](ActivityStatus.md) |  | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]
**userId** | **string** | User who added document | [optional] [default to undefined]
**documentId** | **any** | Document Identifier | [optional] [default to undefined]
**attributeKey** | **any** | Document Attribute Key | [optional] [default to undefined]
**entityTypeId** | **string** | Entity Type Identifier | [optional] [default to undefined]
**entityId** | **string** | Entity Identifier | [optional] [default to undefined]
**changes** | [**{ [key: string]: UserActivityChanges; }**](UserActivityChanges.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Activity } from 'formkiq-client-sdk-typescript';

const instance: Activity = {
    resource,
    type,
    source,
    sourceIpAddress,
    message,
    status,
    insertedDate,
    userId,
    documentId,
    attributeKey,
    entityTypeId,
    entityId,
    changes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
