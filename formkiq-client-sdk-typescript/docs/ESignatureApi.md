# ESignatureApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addDocusignEnvelopes**](#adddocusignenvelopes) | **POST** /esignature/docusign/{documentId}/envelopes | Create Docusign Envelope request|
|[**addDocusignRecipientView**](#adddocusignrecipientview) | **POST** /esignature/docusign/{documentId}/envelopes/{envelopeId}/views/recipient | Create Docusign Recipient View request|
|[**addEsignatureDocusignEvents**](#addesignaturedocusignevents) | **POST** /esignature/docusign/events | Add E-signature event|

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

const { status, data } = await apiInstance.addDocusignEnvelopes(
    documentId,
    addDocusignEnvelopesRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocusignEnvelopesRequest** | **AddDocusignEnvelopesRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


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

const { status, data } = await apiInstance.addDocusignRecipientView(
    documentId,
    envelopeId,
    addDocusignRecipientViewRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocusignRecipientViewRequest** | **AddDocusignRecipientViewRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **envelopeId** | [**string**] | Docusign Envelope Id | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


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

