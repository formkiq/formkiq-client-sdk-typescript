# SystemInferenceModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**defaultModelId** | **string** |  | [optional] [default to undefined]
**modelLifecycleStatus** | **string** | Bedrock foundation model lifecycle status. ACTIVE means the model version is available; LEGACY means the model version is deprecated. | [optional] [default to undefined]
**agreementAvailability** | **string** |  | [optional] [default to undefined]
**authorizationStatus** | **string** |  | [optional] [default to undefined]
**entitlementAvailability** | **string** |  | [optional] [default to undefined]
**regionAvailability** | **string** |  | [optional] [default to undefined]
**modelInvocations** | [**Array&lt;SystemInferenceModelInvocation&gt;**](SystemInferenceModelInvocation.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SystemInferenceModel } from 'formkiq-client-sdk-typescript';

const instance: SystemInferenceModel = {
    name,
    defaultModelId,
    modelLifecycleStatus,
    agreementAvailability,
    authorizationStatus,
    entitlementAvailability,
    regionAvailability,
    modelInvocations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
