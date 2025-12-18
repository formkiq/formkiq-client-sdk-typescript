# AddActionParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ocrTextractQueries** | [**Array&lt;TextractQuery&gt;**](TextractQuery.md) |  | [optional] [default to undefined]
**ocrParseTypes** | **string** | OCR: Parse types - TEXT, FORMS, TABLES, QUERIES (must include ocrTextractQueries) | [optional] [default to undefined]
**ocrEngine** | [**OcrEngine**](OcrEngine.md) |  | [optional] [default to undefined]
**ocrOutputType** | [**OcrOutputType**](OcrOutputType.md) |  | [optional] [default to undefined]
**ocrNumberOfPages** | **string** | Number of pages to OCR (from start) (-1 all) | [optional] [default to undefined]
**addPdfDetectedCharactersAsText** | **string** | OCR: For the rewriting of the PDF document, converting any image text to searchable text | [optional] [default to undefined]
**llmPromptEntityName** | **string** | DATA_CLASSIFICATION: Set the LLM Prompt Entity Name | [optional] [default to undefined]
**url** | **string** | Webhook: Callback URL | [optional] [default to undefined]
**characterMax** | **string** | Fulltext: Maximum number of characters (-1 unlimited, Typesense defaults to 2048 characters) | [optional] [default to undefined]
**engine** | **string** | DocumentTagging: Engine to use for document tagging generation | [optional] [default to undefined]
**notificationType** | **string** | Notification Type | [optional] [default to undefined]
**notificationToCc** | **string** | Who to carbon copy on the notification to (comma-delimited list) | [optional] [default to undefined]
**notificationToBcc** | **string** | Who to blind carbon copy on the notification to (comma-delimited list) | [optional] [default to undefined]
**notificationSubject** | **string** | Subject of the notification | [optional] [default to undefined]
**notificationText** | **string** | Text of the notification | [optional] [default to undefined]
**notificationHtml** | **string** | Html of the notification | [optional] [default to undefined]
**tags** | **string** | DocumentTagging: Comma-deliminted list of keywords to generate tags for | [optional] [default to undefined]
**mappingId** | **string** | Id of Mapping | [optional] [default to undefined]
**eventBusName** | **string** | The name or ARN of the event bus to receive the event | [optional] [default to undefined]
**width** | **string** | The width of the image to resize (or \&#39;auto\&#39;) | [optional] [default to undefined]
**height** | **string** | The height of the image to resize (or \&#39;auto\&#39;) | [optional] [default to undefined]
**path** | **string** | The path to use when creating resized document (optional) | [optional] [default to undefined]
**outputType** | **string** | The output type of the image | [optional] [default to undefined]

## Example

```typescript
import { AddActionParameters } from 'formkiq-client-sdk-typescript';

const instance: AddActionParameters = {
    ocrTextractQueries,
    ocrParseTypes,
    ocrEngine,
    ocrOutputType,
    ocrNumberOfPages,
    addPdfDetectedCharactersAsText,
    llmPromptEntityName,
    url,
    characterMax,
    engine,
    notificationType,
    notificationToCc,
    notificationToBcc,
    notificationSubject,
    notificationText,
    notificationHtml,
    tags,
    mappingId,
    eventBusName,
    width,
    height,
    path,
    outputType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
