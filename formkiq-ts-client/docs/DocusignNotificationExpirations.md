# DocusignNotificationExpirations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expireAfter** | **string** | An integer that sets the number of days the envelope is active. For this value to be used, expireEnabled must be explicitly set to true. | [optional] [default to undefined]
**expireEnabled** | **string** | When true, the envelope expires in the number of days set by expireAfter. | [optional] [default to undefined]
**expireWarn** | **string** | An integer that specifying the number of days before the envelope expires that an expiration warning email is sent to the recipient. | [optional] [default to undefined]

## Example

```typescript
import { DocusignNotificationExpirations } from 'formkiq-ts-client';

const instance: DocusignNotificationExpirations = {
    expireAfter,
    expireEnabled,
    expireWarn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
