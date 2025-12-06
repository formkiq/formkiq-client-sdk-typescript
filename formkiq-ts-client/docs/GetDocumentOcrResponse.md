# GetDocumentOcrResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contentUrls** | **Array&lt;string&gt;** | Presigned S3 Urls for the OCR content | [optional] [default to undefined]
**keyValues** | [**Array&lt;OcrKeyValues&gt;**](OcrKeyValues.md) | List of ocr key / values | [optional] [default to undefined]
**tables** | [**Array&lt;OcrTable&gt;**](OcrTable.md) |  | [optional] [default to undefined]
**data** | **string** | OCR text result | [optional] [default to undefined]
**ocrEngine** | **string** | The OCR technique used | [optional] [default to undefined]
**ocrStatus** | **string** | The status of the OCR request | [optional] [default to undefined]
**contentType** | **string** | Document Content-Type | [optional] [default to undefined]
**isBase64** | **boolean** | Is the content Base64-encoded? | [optional] [default to undefined]
**userId** | **string** | User who requested the OCR | [optional] [default to undefined]
**documentId** | **string** | Document Identifier | [optional] [default to undefined]
**insertedDate** | **string** | Inserted Timestamp | [optional] [default to undefined]

## Example

```typescript
import { GetDocumentOcrResponse } from 'formkiq-ts-client';

const instance: GetDocumentOcrResponse = {
    contentUrls,
    keyValues,
    tables,
    data,
    ocrEngine,
    ocrStatus,
    contentType,
    isBase64,
    userId,
    documentId,
    insertedDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
