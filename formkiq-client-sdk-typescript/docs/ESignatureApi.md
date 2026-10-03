# ESignatureApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addDocusignEnvelopeReminders**](#adddocusignenvelopereminders) | **POST** /esignature/docusign/{documentId}/envelopes/{envelopeId}/reminders | Request DocuSign signing reminders|
|[**addDocusignEnvelopes**](#adddocusignenvelopes) | **POST** /esignature/docusign/{documentId}/envelopes | Create Docusign Envelope request|
|[**addDocusignRecipientView**](#adddocusignrecipientview) | **POST** /esignature/docusign/{documentId}/envelopes/{envelopeId}/views/recipient | Create Docusign Recipient View request|
|[**addDocusignSenderView**](#adddocusignsenderview) | **POST** /esignature/docusign/{documentId}/envelopes/{envelopeId}/views/sender | Create Docusign Sender View request|
|[**addEsignatureDocusignEvents**](#addesignaturedocusignevents) | **POST** /esignature/docusign/events | Add E-signature event|
|[**getDocusignEnvelope**](#getdocusignenvelope) | **GET** /esignature/docusign/{documentId}/envelopes/{envelopeId} | Get Docusign envelope and recipient status|
|[**voidDocusignEnvelope**](#voiddocusignenvelope) | **POST** /esignature/docusign/{documentId}/envelopes/{envelopeId}/void | Void a DocuSign envelope|

# **addDocusignEnvelopeReminders**
> AddDocusignEnvelopeRemindersResponse addDocusignEnvelopeReminders()

Resends signing notifications for an in-progress DocuSign envelope; available as an Add-On Module. With no request body or an empty object, DocuSign reminds all eligible recipients at the current routing step. Supply recipientIds to remind only the selected eligible signers. Obtain IDs from recipients.signers[].recipientId in GET /esignature/docusign/{documentId}/envelopes/{envelopeId}. Every selected signer must still be awaiting action at the current routing step when this request is processed. Validate the entire selection before issuing a resend. Completed and future-step signers cannot be targeted. Invalid targeted requests never fall back to reminding all recipients. Recipient notification settings are respected; this operation does not send FormKiQ notifications to embedded-only or email-suppressed signers. Requires write access to the selected document or artifact and a matching stored envelope ID. The operation resends the existing invitation without changing recipients, documents, routing, or automatic reminder settings. Targeted responses report each selected recipient\'s acceptance or failure, with no overall status. Acceptance does not confirm notification delivery. Do not automatically retry after a timeout because the reminder may already have been requested.

### Example

```typescript
import {
    ESignatureApi,
    Configuration,
    AddDocusignEnvelopeRemindersRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ESignatureApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let envelopeId: string; //Docusign Envelope Id (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)
let environment: DocusignEnvironment; //DocuSign environment. Defaults to the site\'s docusignEnvironment; required when the site has no default. Use the environment in which the envelope was created. (optional) (default to undefined)
let addDocusignEnvelopeRemindersRequest: AddDocusignEnvelopeRemindersRequest; // (optional)

const { status, data } = await apiInstance.addDocusignEnvelopeReminders(
    documentId,
    envelopeId,
    siteId,
    artifactId,
    environment,
    addDocusignEnvelopeRemindersRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocusignEnvelopeRemindersRequest** | **AddDocusignEnvelopeRemindersRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **envelopeId** | [**string**] | Docusign Envelope Id | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|
| **environment** | **DocusignEnvironment** | DocuSign environment. Defaults to the site\&#39;s docusignEnvironment; required when the site has no default. Use the environment in which the envelope was created. | (optional) defaults to undefined|


### Return type

**AddDocusignEnvelopeRemindersResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Reminder request processed. For targeted requests, inspect each entry in recipients for acceptance or failure; HTTP 200 does not mean all selected recipients succeeded. An envelope-wide request returns an empty object when DocuSign accepts it, because individual recipient outcomes are not returned. Acceptance does not confirm delivery. |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
|**400** | Invalid parameters, missing DocuSign configuration, ineligible envelope state, or unknown or ineligible signers. Null or empty recipientIds arrays, duplicate IDs, and null, blank, or non-string entries are rejected. The singular recipientId field is not accepted. Draft and terminal envelopes cannot be reminded. |  -  |
|**401** | Authentication required |  -  |
|**403** | Write access to the selected document or artifact is denied |  -  |
|**404** | Document, artifact, or associated DocuSign envelope not found |  -  |
|**429** | DocuSign rate limit exceeded |  -  |
|**502** | DocuSign authentication failure, upstream error, or invalid response |  -  |
|**504** | DocuSign request timed out; reminder delivery outcome is unknown |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addDocusignEnvelopes**
> AddDocusignEnvelopesResponse addDocusignEnvelopes(addDocusignEnvelopesRequest)

DocuSign create Docusign Envelope request; available as an Add-On Module

### Example

```typescript
import {
    ESignatureApi,
    Configuration,
    AddDocusignEnvelopesRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ESignatureApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let addDocusignEnvelopesRequest: AddDocusignEnvelopesRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addDocusignEnvelopes(
    documentId,
    addDocusignEnvelopesRequest,
    siteId,
    artifactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocusignEnvelopesRequest** | **AddDocusignEnvelopesRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


### Return type

**AddDocusignEnvelopesResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
|**400** | 400 OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addDocusignRecipientView**
> AddDocusignRecipientViewResponse addDocusignRecipientView(addDocusignRecipientViewRequest)

DocuSign create Docusign Recipient View request; available as an Add-On Module

### Example

```typescript
import {
    ESignatureApi,
    Configuration,
    AddDocusignRecipientViewRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ESignatureApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let envelopeId: string; //Docusign Envelope Id (default to undefined)
let addDocusignRecipientViewRequest: AddDocusignRecipientViewRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addDocusignRecipientView(
    documentId,
    envelopeId,
    addDocusignRecipientViewRequest,
    siteId,
    artifactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocusignRecipientViewRequest** | **AddDocusignRecipientViewRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **envelopeId** | [**string**] | Docusign Envelope Id | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


### Return type

**AddDocusignRecipientViewResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
|**400** | 400 OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addDocusignSenderView**
> AddDocusignSenderViewResponse addDocusignSenderView(addDocusignSenderViewRequest)

DocuSign create Docusign Sender View request; available as an Add-On Module

### Example

```typescript
import {
    ESignatureApi,
    Configuration,
    AddDocusignSenderViewRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ESignatureApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let envelopeId: string; //Docusign Envelope Id (default to undefined)
let addDocusignSenderViewRequest: AddDocusignSenderViewRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addDocusignSenderView(
    documentId,
    envelopeId,
    addDocusignSenderViewRequest,
    siteId,
    artifactId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocusignSenderViewRequest** | **AddDocusignSenderViewRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **envelopeId** | [**string**] | Docusign Envelope Id | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|


### Return type

**AddDocusignSenderViewResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
|**400** | 400 OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addEsignatureDocusignEvents**
> AddResponse addEsignatureDocusignEvents()

DocuSign callback URL handler; available as an Add-On Module

### Example

```typescript
import {
    ESignatureApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ESignatureApi(configuration);

const { status, data } = await apiInstance.addEsignatureDocusignEvents();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AddResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDocusignEnvelope**
> GetDocusignEnvelopeResponse getDocusignEnvelope()

Retrieves the DocuSign envelope using include=recipients and returns the DocuSign response directly, including envelope status and recipient routing information. No FormKiQ fields or wrapper are added. The envelope must be associated with the selected document or artifact. This read-only operation does not update document attributes or download the signed document. Available as an Add-On Module. Repeated status polling must be at least 15 minutes apart. Use recipients.signers[].recipientId from this response as entries in the optional recipientIds array in POST /esignature/docusign/{documentId}/envelopes/{envelopeId}/reminders to request reminders for selected signers.

### Example

```typescript
import {
    ESignatureApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ESignatureApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let envelopeId: string; //Docusign Envelope Id (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)
let environment: DocusignEnvironment; //DocuSign environment. Defaults to the site\'s docusignEnvironment; required when the site has no default. Use the environment in which the envelope was created. (optional) (default to undefined)

const { status, data } = await apiInstance.getDocusignEnvelope(
    documentId,
    envelopeId,
    siteId,
    artifactId,
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **envelopeId** | [**string**] | Docusign Envelope Id | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|
| **environment** | **DocusignEnvironment** | DocuSign environment. Defaults to the site\&#39;s docusignEnvironment; required when the site has no default. Use the environment in which the envelope was created. | (optional) defaults to undefined|


### Return type

**GetDocusignEnvelopeResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | DocuSign envelope with recipients |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
|**400** | Invalid parameters or missing DocuSign configuration |  -  |
|**401** | Authentication required |  -  |
|**403** | Access to the selected document or artifact is denied |  -  |
|**404** | Document, artifact, or associated DocuSign envelope not found |  -  |
|**429** | Envelope polling or DocuSign rate limit exceeded |  * Retry-After - Seconds to wait before another lookup <br>  |
|**502** | DocuSign authentication failure, upstream error, or invalid response |  -  |
|**504** | DocuSign request timed out |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **voidDocusignEnvelope**
> VoidDocusignEnvelopeResponse voidDocusignEnvelope(voidDocusignEnvelopeRequest)

Cancels an in-progress DocuSign envelope; available as an Add-On Module. Requires write access to the selected document or artifact and a matching stored envelope ID. Calls DocuSign\'s envelope update API, PUT /restapi/v2.1/accounts/{accountId}/envelopes/{envelopeId}, with status set to voided and the supplied voidedReason. DocuSign notifies recipients that the envelope was voided, including the supplied reason. Only sent or delivered envelopes can be voided. If the envelope is already voided, returns its current state without another update or changing its original reason. Voiding cannot be undone. The existing envelope-voided callback updates the stored FormKiQ status. After a timeout, the outcome is unknown; check the existing GET envelope status endpoint before attempting the operation again.

### Example

```typescript
import {
    ESignatureApi,
    Configuration,
    VoidDocusignEnvelopeRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new ESignatureApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let envelopeId: string; //Docusign Envelope Id (default to undefined)
let voidDocusignEnvelopeRequest: VoidDocusignEnvelopeRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let artifactId: string; //Artifact Document Identifier (optional) (default to undefined)
let environment: DocusignEnvironment; //DocuSign environment. Defaults to the site\'s docusignEnvironment; required when the site has no default. Use the environment in which the envelope was created. (optional) (default to undefined)

const { status, data } = await apiInstance.voidDocusignEnvelope(
    documentId,
    envelopeId,
    voidDocusignEnvelopeRequest,
    siteId,
    artifactId,
    environment
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **voidDocusignEnvelopeRequest** | **VoidDocusignEnvelopeRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **envelopeId** | [**string**] | Docusign Envelope Id | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **artifactId** | [**string**] | Artifact Document Identifier | (optional) defaults to undefined|
| **environment** | **DocusignEnvironment** | DocuSign environment. Defaults to the site\&#39;s docusignEnvironment; required when the site has no default. Use the environment in which the envelope was created. | (optional) defaults to undefined|


### Return type

**VoidDocusignEnvelopeResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | DocuSign envelope voided successfully |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
|**400** | Invalid parameters, missing, blank, or overlong voidedReason, missing DocuSign configuration, or an envelope that is not eligible to be voided. |  -  |
|**401** | Authentication required |  -  |
|**403** | Write access to the selected document or artifact is denied |  -  |
|**404** | Document, artifact, or associated DocuSign envelope not found |  -  |
|**429** | DocuSign rate limit exceeded |  -  |
|**502** | DocuSign authentication failure, upstream error, or invalid response |  -  |
|**504** | DocuSign request timed out; the void operation outcome is unknown |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

