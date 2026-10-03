# SetNumberingSequenceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pattern** | **string** | Number format using supported tokens such as {YEAR} and {SEQUENCE} | [default to undefined]
**startAt** | **number** | First sequence number allocated for a new period | [default to undefined]
**padding** | **number** | Minimum width of the generated sequence number, padded with leading zeroes | [default to undefined]
**reset** | [**NumberingSequenceReset**](NumberingSequenceReset.md) |  | [default to undefined]
**timezone** | **string** | IANA timezone used to determine the active period; defaults to UTC | [optional] [default to 'UTC']

## Example

```typescript
import { SetNumberingSequenceRequest } from 'formkiq-client-sdk-typescript';

const instance: SetNumberingSequenceRequest = {
    pattern,
    startAt,
    padding,
    reset,
    timezone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
