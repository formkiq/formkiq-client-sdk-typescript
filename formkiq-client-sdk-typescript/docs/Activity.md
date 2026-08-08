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
**delegation** | [**ActivityDelegation**](ActivityDelegation.md) |  | [optional] [default to undefined]
**documentId** | **any** | Document Identifier | [optional] [default to undefined]
**artifactId** | **any** | Document Artifact Identifier | [optional] [default to undefined]
**attributeKey** | **any** | Document Attribute Key | [optional] [default to undefined]
**entityTypeId** | **string** | Entity Type Identifier | [optional] [default to undefined]
**entityId** | **string** | Entity Identifier | [optional] [default to undefined]
**apiKey** | **string** | API Key | [optional] [default to undefined]
**rulesetId** | **string** | Ruleset Identifier | [optional] [default to undefined]
**schema** | **string** | Schema Identifier | [optional] [default to undefined]
**mappingId** | **string** | Mapping Identifier | [optional] [default to undefined]
**classificationId** | **string** | Classification Identifier | [optional] [default to undefined]
**ruleId** | **string** | Ruleset Rule Identifier | [optional] [default to undefined]
**workflowId** | **string** | Workflow Identifier | [optional] [default to undefined]
**queueId** | **string** | Queue Identifier | [optional] [default to undefined]
**webhookId** | **string** | Webhook Identifier | [optional] [default to undefined]
**locale** | **string** | Locale Identifier | [optional] [default to undefined]
**controlPolicy** | **string** | Control Policy Type | [optional] [default to undefined]
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
    delegation,
    documentId,
    artifactId,
    attributeKey,
    entityTypeId,
    entityId,
    apiKey,
    rulesetId,
    schema,
    mappingId,
    classificationId,
    ruleId,
    workflowId,
    queueId,
    webhookId,
    locale,
    controlPolicy,
    changes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
