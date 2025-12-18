# AddDocumentOcrRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**textractQueries** | [**Array&lt;TextractQuery&gt;**](TextractQuery.md) |  | [optional] [default to undefined]
**parseTypes** | **Array&lt;string&gt;** | OCR Parse types - TEXT, FORMS, TABLES, QUERIES | [optional] [default to undefined]
**addPdfDetectedCharactersAsText** | **boolean** | Rewrite PDF document, converting any Image text to searchable text | [optional] [default to undefined]
**ocrEngine** | [**OcrEngine**](OcrEngine.md) |  | [optional] [default to undefined]
**ocrNumberOfPages** | **string** | Number of pages to OCR (from start) (-1 all) | [optional] [default to undefined]
**ocrOutputType** | [**OcrOutputType**](OcrOutputType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AddDocumentOcrRequest } from 'formkiq-client-sdk-typescript';

const instance: AddDocumentOcrRequest = {
    textractQueries,
    parseTypes,
    addPdfDetectedCharactersAsText,
    ocrEngine,
    ocrNumberOfPages,
    ocrOutputType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
