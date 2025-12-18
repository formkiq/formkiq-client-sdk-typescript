# DocusignRecipientView


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returnUrl** | **string** | Identifies the return point after sending the envelope | [optional] [default to undefined]
**recipientId** | **string** | A reference used to map recipients to other objects, such as specific document tabs. | [optional] [default to undefined]
**userName** | **string** | The username of the recipient. You can use either email and userName. | [optional] [default to undefined]
**clientUserId** | **string** | Specifies unique identifier for signer | [optional] [default to undefined]
**email** | **string** | Specifies the email of the recipient | [optional] [default to undefined]
**frameAncestors** | **Array&lt;string&gt;** | An array of ancestors that can embed the frame. Include the domain where the envelope will be embedded and the same URL as messageOrigins. | [optional] [default to undefined]
**messageOrigins** | **Array&lt;string&gt;** | The originating domain for the signature request message | [optional] [default to undefined]

## Example

```typescript
import { DocusignRecipientView } from 'formkiq-client-sdk-typescript';

const instance: DocusignRecipientView = {
    returnUrl,
    recipientId,
    userName,
    clientUserId,
    email,
    frameAncestors,
    messageOrigins,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
