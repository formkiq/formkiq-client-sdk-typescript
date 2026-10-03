# NumberingSequence


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributeKey** | **string** | Attribute key where generated values are stored | [default to undefined]
**pattern** | **string** | Number format using supported tokens such as {YEAR} and {SEQUENCE} | [default to undefined]
**startAt** | **number** | First sequence number allocated for a new period | [default to undefined]
**padding** | **number** | Minimum width of the generated sequence number, padded with leading zeroes | [default to undefined]
**reset** | [**NumberingSequenceReset**](NumberingSequenceReset.md) |  | [default to undefined]
**timezone** | **string** | IANA timezone used to determine the active period; defaults to UTC | [optional] [default to 'UTC']
**currentPeriod** | **string** | Active sequence period, or null if no number has been allocated | [optional] [readonly] [default to undefined]
**currentSequence** | **number** | Most recently allocated sequence number, or null if none has been allocated | [optional] [readonly] [default to undefined]
**lastValue** | **string** | Most recently generated attribute value, or null if none has been allocated | [optional] [readonly] [default to undefined]

## Example

```typescript
import { NumberingSequence } from 'formkiq-client-sdk-typescript';

const instance: NumberingSequence = {
    attributeKey,
    pattern,
    startAt,
    padding,
    reset,
    timezone,
    currentPeriod,
    currentSequence,
    lastValue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
