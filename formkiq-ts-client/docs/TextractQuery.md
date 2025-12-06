# TextractQuery

A question to ask Textract

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **string** | Natural-language question | [optional] [default to undefined]
**alias** | **string** | Label to identify this query in the result | [optional] [default to undefined]
**pages** | **Array&lt;string&gt;** | Page selection | [optional] [default to undefined]

## Example

```typescript
import { TextractQuery } from 'formkiq-ts-client';

const instance: TextractQuery = {
    text,
    alias,
    pages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
