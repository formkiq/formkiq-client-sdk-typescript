# DocusignSignHereTabs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anchorString** | **string** | Specifies the string to find in the document and use as the basis for tab placement. | [optional] [default to undefined]
**anchorXOffset** | **string** | Specifies the X axis location of the tab in anchorUnits relative to the anchorString. | [optional] [default to undefined]
**anchorYOffset** | **string** | Specifies the Y axis location of the tab in anchorUnits relative to the anchorString. | [optional] [default to undefined]
**anchorIgnoreIfNotPresent** | **string** | When true, this tab is ignored if the anchorString is not found in the document. | [optional] [default to undefined]
**anchorUnits** | **string** | Specifies units of the anchorXOffset and anchorYOffset | [optional] [default to undefined]
**xPosition** | **string** | This property indicates the horizontal offset of the object on the page | [optional] [default to undefined]
**yPosition** | **string** | This property indicates the vertical offset of the object on the page | [optional] [default to undefined]
**pageNumber** | **string** | Specifies the page number on which the tab is located | [optional] [default to undefined]

## Example

```typescript
import { DocusignSignHereTabs } from 'formkiq-ts-client';

const instance: DocusignSignHereTabs = {
    anchorString,
    anchorXOffset,
    anchorYOffset,
    anchorIgnoreIfNotPresent,
    anchorUnits,
    xPosition,
    yPosition,
    pageNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
