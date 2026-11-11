# DocusignSigningTabs

Recipient tabs for both signers and inpersonSigners. Each tab belongs to the containing recipient and the document or artifact selected by this endpoint; FormKiQ assigns DocuSign documentId \"1\". Per-tab recipientId and documentId overrides are unsupported. Supported collections are signHereTabs, initialHereTabs, dateSignedTabs, dateTabs, and textTabs. Checkboxes, radio groups, dropdowns, name/email/company/title/number fields, conditional fields, formulas, attachments, payments, approve/decline controls, and other collections are not supported by this contract. Unknown collections and properties are ignored during request deserialization, consistent with other FormKiQ requests. Supported field values and placement are validated after deserialization. Existing signature properties retain their types and optionality. Completed field-value retrieval is outside this request contract. Support tracking: https://github.com/formkiq/formkiq-platform/issues/277.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signHereTabs** | [**Array&lt;DocusignSignHereTabs&gt;**](DocusignSignHereTabs.md) | Signature fields; preserves the existing signature request format. | [optional] [default to undefined]
**initialHereTabs** | [**Array&lt;DocusignInitialHereTab&gt;**](DocusignInitialHereTab.md) | Recipient initials. | [optional] [default to undefined]
**dateSignedTabs** | [**Array&lt;DocusignDateSignedTab&gt;**](DocusignDateSignedTab.md) | Automatic signing dates. | [optional] [default to undefined]
**dateTabs** | [**Array&lt;DocusignDateTab&gt;**](DocusignDateTab.md) | Recipient-entered dates. | [optional] [default to undefined]
**textTabs** | [**Array&lt;DocusignTextTab&gt;**](DocusignTextTab.md) | Single-line or multiline text fields. | [optional] [default to undefined]

## Example

```typescript
import { DocusignSigningTabs } from 'formkiq-client-sdk-typescript';

const instance: DocusignSigningTabs = {
    signHereTabs,
    initialHereTabs,
    dateSignedTabs,
    dateTabs,
    textTabs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
