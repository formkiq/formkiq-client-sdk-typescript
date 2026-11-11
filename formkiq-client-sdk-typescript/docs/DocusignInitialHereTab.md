# DocusignInitialHereTab

A field for recipient initials. Specify either anchorString (with optional anchor settings) or pageNumber, xPosition, and yPosition. Do not combine anchor and coordinate placement. Recipient and document assignment are inherited from the containing request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anchorString** | **string** | Text used to locate the tab. Every matching occurrence creates a tab. Use distinct anchors for different recipients. | [optional] [default to undefined]
**anchorXOffset** | **string** | Horizontal offset from the anchor in anchorUnits; negative offsets are allowed. | [optional] [default to undefined]
**anchorYOffset** | **string** | Vertical offset from the anchor in anchorUnits; negative offsets are allowed. | [optional] [default to undefined]
**anchorUnits** | **string** | Units for anchor offsets. | [optional] [default to undefined]
**anchorIgnoreIfNotPresent** | **string** | When true, omit the tab if its anchor is missing. When false, a missing anchor is an error. When omitted, DocuSign defaults apply. | [optional] [default to undefined]
**anchorCaseSensitive** | **string** | Whether anchor matching is case sensitive. When omitted, DocuSign defaults apply. | [optional] [default to undefined]
**anchorMatchWholeWord** | **string** | Whether the anchor must match a whole word. When omitted, DocuSign defaults apply. | [optional] [default to undefined]
**pageNumber** | **string** | One-based page number for coordinate placement. | [optional] [default to undefined]
**xPosition** | **string** | Horizontal position in pixels for coordinate placement. | [optional] [default to undefined]
**yPosition** | **string** | Vertical position in pixels for coordinate placement. | [optional] [default to undefined]
**tabLabel** | **string** | Field label used to identify the tab. | [optional] [default to undefined]
**optional** | **string** | Whether the recipient may leave the initials field empty. | [optional] [default to undefined]
**scaleValue** | **string** | Positive scaling factor for the initials field. | [optional] [default to undefined]

## Example

```typescript
import { DocusignInitialHereTab } from 'formkiq-client-sdk-typescript';

const instance: DocusignInitialHereTab = {
    anchorString,
    anchorXOffset,
    anchorYOffset,
    anchorUnits,
    anchorIgnoreIfNotPresent,
    anchorCaseSensitive,
    anchorMatchWholeWord,
    pageNumber,
    xPosition,
    yPosition,
    tabLabel,
    optional,
    scaleValue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
