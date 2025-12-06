# DocumentsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addDocument**](#adddocument) | **POST** /documents | Add new document|
|[**addDocumentSync**](#adddocumentsync) | **POST** /documents/{documentId}/syncs | Add document sync to service|
|[**addDocumentUpload**](#adddocumentupload) | **POST** /documents/upload | Add large document|
|[**compressDocuments**](#compressdocuments) | **POST** /documents/compress | Compress multiple documents into a .zip file|
|[**deleteDocument**](#deletedocument) | **DELETE** /documents/{documentId} | Delete document|
|[**deleteDocumentCheckoutLegalHold**](#deletedocumentcheckoutlegalhold) | **DELETE** /documents/{documentId}/legalHold | Delete document legal hold checkout|
|[**deletePublishedDocumentContent**](#deletepublisheddocumentcontent) | **DELETE** /publications/{documentId} | Delete published document\&#39;s contents|
|[**getDocument**](#getdocument) | **GET** /documents/{documentId} | Get document|
|[**getDocumentContent**](#getdocumentcontent) | **GET** /documents/{documentId}/content | Get document\&#39;s contents|
|[**getDocumentIdUpload**](#getdocumentidupload) | **GET** /documents/{documentId}/upload | Get url to update large document|
|[**getDocumentSyncs**](#getdocumentsyncs) | **GET** /documents/{documentId}/syncs | Get document syncs|
|[**getDocumentUpload**](#getdocumentupload) | **GET** /documents/upload | Get url to add large document|
|[**getDocumentUrl**](#getdocumenturl) | **GET** /documents/{documentId}/url | Get document content url|
|[**getDocuments**](#getdocuments) | **GET** /documents | Get Documents listing|
|[**getPublishedDocumentContent**](#getpublisheddocumentcontent) | **GET** /publications/{documentId} | Get published document\&#39;s contents|
|[**purgeDocument**](#purgedocument) | **DELETE** /documents/{documentId}/purge | Purge document|
|[**setDocumentCheckout**](#setdocumentcheckout) | **PUT** /documents/{documentId}/checkout | Perform document checkout|
|[**setDocumentCheckoutLegalHold**](#setdocumentcheckoutlegalhold) | **PUT** /documents/{documentId}/legalHold | Perform document legal hold checkout|
|[**setDocumentRestore**](#setdocumentrestore) | **PUT** /documents/{documentId}/restore | Restore soft deleted document|
|[**updateDocument**](#updatedocument) | **PATCH** /documents/{documentId} | Update document|

# **addDocument**
> AddDocumentResponse addDocument(addDocumentRequest)

Creates a new document; body may include document content if less than 5 MB.  Returns a unique **documentId** used in subsequent operations.  See POST /documents/{documentId}/tags for adding tags to document schema  See POST /documents/{documentId}/actions for adding actions to document schema

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    AddDocumentRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let addDocumentRequest: AddDocumentRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let shareKey: string; //Share Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addDocument(
    addDocumentRequest,
    siteId,
    shareKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocumentRequest** | **AddDocumentRequest**|  | |
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **shareKey** | [**string**] | Share Identifier | (optional) defaults to undefined|


### Return type

**AddDocumentResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | 201 CREATED |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
|**400** | 400 OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addDocumentSync**
> AddResponse addDocumentSync()

Add a document to a service

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    AddDocumentSyncRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let addDocumentSyncRequest: AddDocumentSyncRequest; // (optional)

const { status, data } = await apiInstance.addDocumentSync(
    documentId,
    siteId,
    addDocumentSyncRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocumentSyncRequest** | **AddDocumentSyncRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**AddResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addDocumentUpload**
> GetDocumentUrlResponse addDocumentUpload(addDocumentUploadRequest)

Returns a URL that can be used to upload document content and create a new document, while allowing metadata to also be sent; this endpoint (whether GET or POST) is required in order to add content that is larger than 5 MB. The POST endpoint allow the adding of document metadata at the same time as the document is created.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    AddDocumentUploadRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let addDocumentUploadRequest: AddDocumentUploadRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let contentLength: number; //Indicates the size of the entity-body (optional) (default to undefined)
let duration: number; //Indicates the number of hours request is valid for (optional) (default to undefined)
let shareKey: string; //Share Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addDocumentUpload(
    addDocumentUploadRequest,
    siteId,
    contentLength,
    duration,
    shareKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDocumentUploadRequest** | **AddDocumentUploadRequest**|  | |
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **contentLength** | [**number**] | Indicates the size of the entity-body | (optional) defaults to undefined|
| **duration** | [**number**] | Indicates the number of hours request is valid for | (optional) defaults to undefined|
| **shareKey** | [**string**] | Share Identifier | (optional) defaults to undefined|


### Return type

**GetDocumentUrlResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | 201 CREATED |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **compressDocuments**
> DocumentsCompressResponse compressDocuments(documentsCompressRequest)

Compress documents into an .ZIP archive file, and returns a S3 presigned url for the location of the archive file. The operation is async and processing time depends on the number and size of documents included; a 404 status code is returned until the file is ready.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    DocumentsCompressRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentsCompressRequest: DocumentsCompressRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.compressDocuments(
    documentsCompressRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentsCompressRequest** | **DocumentsCompressRequest**|  | |
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**DocumentsCompressResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | 201 CREATED |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteDocument**
> DeleteResponse deleteDocument()

Delete a document\'s details, i.e., metadata, contents, etc  SoftDelete:  The SoftDelete parameter allows for the temporary removal of a document\'s metadata, attributes, etc from being retrieved from all API requests.  The document can be permanently deleted by calling the DELETE /documents/{documentId} with softDelete=false or restored using the PUT /documents/{documentId}/restore.  Only the GET /documents?deleted=true will return all the soft deleted documents.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let softDelete: boolean; //Whether to soft delete document (optional) (default to undefined)

const { status, data } = await apiInstance.deleteDocument(
    documentId,
    siteId,
    softDelete
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **softDelete** | [**boolean**] | Whether to soft delete document | (optional) defaults to undefined|


### Return type

**DeleteResponse**

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

# **deleteDocumentCheckoutLegalHold**
> DeleteResponse deleteDocumentCheckoutLegalHold()

Removes a legal hold checkout for the document; available as an Add-On Module 

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteDocumentCheckoutLegalHold(
    documentId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**DeleteResponse**

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

# **deletePublishedDocumentContent**
> DeleteResponse deletePublishedDocumentContent()

Delete a published document\'s contents. Certain content types, text/_*, application/json, and application/x-www-form-urlencoded. return the  \"content\" field, while all other content types return a \'contentUrl\' for retrieving the content.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deletePublishedDocumentContent(
    documentId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**DeleteResponse**

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

# **getDocument**
> GetDocumentResponse getDocument()

Retrieves a document\'s details, i.e., metadata

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let shareKey: string; //Share Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getDocument(
    documentId,
    siteId,
    shareKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **shareKey** | [**string**] | Share Identifier | (optional) defaults to undefined|


### Return type

**GetDocumentResponse**

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

# **getDocumentContent**
> GetDocumentContentResponse getDocumentContent()

Retrieves the content of the document with the specified `documentId`. - If the content is plain text and under 6 MB, the content will be returned directly. - If the content is plain text but exceeds 6 MB, an error will be returned. - For documents not in plain text format, pre-signed S3 URLs will be returned to download the content from S3. It is recommended to use the `/documents/{documentId}/url` endpoint to retrieve pre-signed S3 URLs for downloading the content.  If the document has a Content-Type of text/, application/json, application/x-www-form-urlencoded the content field will be returned.  All other Content-Type, the contentUrl field will be returned, which is a S3 Presigned url. 

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let versionKey: string; //Version Key (version key required URL encoding) (optional) (default to undefined)
let shareKey: string; //Share Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentContent(
    documentId,
    siteId,
    versionKey,
    shareKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **versionKey** | [**string**] | Version Key (version key required URL encoding) | (optional) defaults to undefined|
| **shareKey** | [**string**] | Share Identifier | (optional) defaults to undefined|


### Return type

**GetDocumentContentResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  * Location -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDocumentIdUpload**
> GetDocumentUrlResponse getDocumentIdUpload()

Returns a URL that can be used to upload documents for a specific documentId; this endpoint is required in order to add content that is larger than 5 MB. If versions are enabled, this will create a new version of the document.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let checksumType: 'SHA1' | 'SHA256'; //Checksum Type (optional) (default to undefined)
let checksum: string; //Checksum value (optional) (default to undefined)
let contentLength: number; //Indicates the size of the entity-body (optional) (default to undefined)
let duration: number; //Indicates the number of hours request is valid for (optional) (default to undefined)
let shareKey: string; //Share Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentIdUpload(
    documentId,
    siteId,
    checksumType,
    checksum,
    contentLength,
    duration,
    shareKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **checksumType** | [**&#39;SHA1&#39; | &#39;SHA256&#39;**]**Array<&#39;SHA1&#39; &#124; &#39;SHA256&#39;>** | Checksum Type | (optional) defaults to undefined|
| **checksum** | [**string**] | Checksum value | (optional) defaults to undefined|
| **contentLength** | [**number**] | Indicates the size of the entity-body | (optional) defaults to undefined|
| **duration** | [**number**] | Indicates the number of hours request is valid for | (optional) defaults to undefined|
| **shareKey** | [**string**] | Share Identifier | (optional) defaults to undefined|


### Return type

**GetDocumentUrlResponse**

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

# **getDocumentSyncs**
> GetDocumentSyncResponse getDocumentSyncs()

Retrieve the document syncs with external services status

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let shareKey: string; //Share Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentSyncs(
    documentId,
    siteId,
    limit,
    shareKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|
| **shareKey** | [**string**] | Share Identifier | (optional) defaults to undefined|


### Return type

**GetDocumentSyncResponse**

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

# **getDocumentUpload**
> GetDocumentUrlResponse getDocumentUpload()

Returns a URL that can be used to upload document content and create a new document; this endpoint (whether GET or POST) is required in order to add content that is larger than 5 MB

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let path: string; //The upload file\'s path (optional) (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let checksumType: 'SHA1' | 'SHA256'; //Checksum Type (optional) (default to undefined)
let checksum: string; //Checksum value (optional) (default to undefined)
let contentLength: number; //Indicates the size of the entity-body (optional) (default to undefined)
let duration: number; //Indicates the number of hours request is valid for (optional) (default to undefined)
let shareKey: string; //Share Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getDocumentUpload(
    path,
    siteId,
    checksumType,
    checksum,
    contentLength,
    duration,
    shareKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **path** | [**string**] | The upload file\&#39;s path | (optional) defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **checksumType** | [**&#39;SHA1&#39; | &#39;SHA256&#39;**]**Array<&#39;SHA1&#39; &#124; &#39;SHA256&#39;>** | Checksum Type | (optional) defaults to undefined|
| **checksum** | [**string**] | Checksum value | (optional) defaults to undefined|
| **contentLength** | [**number**] | Indicates the size of the entity-body | (optional) defaults to undefined|
| **duration** | [**number**] | Indicates the number of hours request is valid for | (optional) defaults to undefined|
| **shareKey** | [**string**] | Share Identifier | (optional) defaults to undefined|


### Return type

**GetDocumentUrlResponse**

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

# **getDocumentUrl**
> GetDocumentUrlResponse getDocumentUrl()

Returns a URL for the document\'s contents; this URL will expire (the default is 48 hours)

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let versionKey: string; //Version Key (version key required URL encoding) (optional) (default to undefined)
let duration: number; //Indicates the number of hours request is valid for (optional) (default to undefined)
let shareKey: string; //Share Identifier (optional) (default to undefined)
let inline: boolean; //Set the Content-Disposition to inline (optional) (default to false)
let bypassWatermark: boolean; //Allow the by pass of watermark (only allowed by GOVERN / ADMIN permissions) (optional) (default to false)

const { status, data } = await apiInstance.getDocumentUrl(
    documentId,
    siteId,
    versionKey,
    duration,
    shareKey,
    inline,
    bypassWatermark
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **versionKey** | [**string**] | Version Key (version key required URL encoding) | (optional) defaults to undefined|
| **duration** | [**number**] | Indicates the number of hours request is valid for | (optional) defaults to undefined|
| **shareKey** | [**string**] | Share Identifier | (optional) defaults to undefined|
| **inline** | [**boolean**] | Set the Content-Disposition to inline | (optional) defaults to false|
| **bypassWatermark** | [**boolean**] | Allow the by pass of watermark (only allowed by GOVERN / ADMIN permissions) | (optional) defaults to false|


### Return type

**GetDocumentUrlResponse**

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

# **getDocuments**
> GetDocumentsResponse getDocuments()

Returns a list of the most recent documents added, ordered by inserted, descending

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let siteId: string; //Site Identifier (optional) (default to undefined)
let actionStatus: 'FAILED' | 'IN_QUEUE' | 'PENDING' | 'RUNNING' | 'SKIPPED' | 'FAILED_RETRY'; //Fetch documents with an action status (optional) (default to undefined)
let syncStatus: 'FULLTEXT_METADATA_FAILED' | 'FULLTEXT_CONTENT_FAILED'; //Fetch documents with an sync status (optional) (default to undefined)
let deleted: boolean; //Fetch soft deleted documents (optional) (default to undefined)
let date: string; //Fetch documents inserted on a certain date (yyyy-MM-dd) (optional) (default to undefined)
let tz: string; //UTC offset to apply to date parameter (IE: -0600) (optional) (default to undefined)
let next: string; //Next page of results token (optional) (default to undefined)
let previous: string; //Previous page of results token (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')

const { status, data } = await apiInstance.getDocuments(
    siteId,
    actionStatus,
    syncStatus,
    deleted,
    date,
    tz,
    next,
    previous,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **actionStatus** | [**&#39;FAILED&#39; | &#39;IN_QUEUE&#39; | &#39;PENDING&#39; | &#39;RUNNING&#39; | &#39;SKIPPED&#39; | &#39;FAILED_RETRY&#39;**]**Array<&#39;FAILED&#39; &#124; &#39;IN_QUEUE&#39; &#124; &#39;PENDING&#39; &#124; &#39;RUNNING&#39; &#124; &#39;SKIPPED&#39; &#124; &#39;FAILED_RETRY&#39;>** | Fetch documents with an action status | (optional) defaults to undefined|
| **syncStatus** | [**&#39;FULLTEXT_METADATA_FAILED&#39; | &#39;FULLTEXT_CONTENT_FAILED&#39;**]**Array<&#39;FULLTEXT_METADATA_FAILED&#39; &#124; &#39;FULLTEXT_CONTENT_FAILED&#39;>** | Fetch documents with an sync status | (optional) defaults to undefined|
| **deleted** | [**boolean**] | Fetch soft deleted documents | (optional) defaults to undefined|
| **date** | [**string**] | Fetch documents inserted on a certain date (yyyy-MM-dd) | (optional) defaults to undefined|
| **tz** | [**string**] | UTC offset to apply to date parameter (IE: -0600) | (optional) defaults to undefined|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|
| **previous** | [**string**] | Previous page of results token | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|


### Return type

**GetDocumentsResponse**

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

# **getPublishedDocumentContent**
> getPublishedDocumentContent()

Get a published document\'s contents. Certain content types, text/_*, application/json, and application/x-www-form-urlencoded. return the  \"content\" field, while all other content types return a \'contentUrl\' for retrieving the content.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getPublishedDocumentContent(
    documentId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**307** | Temporary Redirect |  * Location -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **purgeDocument**
> DeleteResponse purgeDocument()

Remove all objects from the S3 bucket, including previous versions and current version, and should remove all metadata as well, so that no trace of the document exists outside of the audit logs and any backups. Can only be called be ADMIN or GOVERN.

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.purgeDocument(
    documentId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**DeleteResponse**

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

# **setDocumentCheckout**
> SetResponse setDocumentCheckout()

Creates a checkout for the document. Fails with **409 Conflict** if the document is already checkedout by another user; available as an Add-On Module 

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.setDocumentCheckout(
    documentId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**SetResponse**

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

# **setDocumentCheckoutLegalHold**
> SetResponse setDocumentCheckoutLegalHold()

Creates a legal hold checkout for the document. Fails with **409 Conflict** if the document is already checkedout by another user; available as an Add-On Module 

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.setDocumentCheckoutLegalHold(
    documentId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**SetResponse**

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

# **setDocumentRestore**
> SetDocumentRestoreResponse setDocumentRestore()

Restores a soft deleted document

### Example

```typescript
import {
    DocumentsApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.setDocumentRestore(
    documentId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**SetDocumentRestoreResponse**

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

# **updateDocument**
> AddDocumentResponse updateDocument(updateDocumentRequest)

Update a document\'s details, i.e., metadata  If no content is specified, the endpoint will return a S3 Presigned that will allow for the uploading of Large document data.   NOTE: - provided attributes will overwrite existing matching attribute keys in the document. Attributes not included in the request body will remain unchanged.

### Example

```typescript
import {
    DocumentsApi,
    Configuration,
    UpdateDocumentRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new DocumentsApi(configuration);

let documentId: string; //Document Identifier (default to undefined)
let updateDocumentRequest: UpdateDocumentRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let shareKey: string; //Share Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.updateDocument(
    documentId,
    updateDocumentRequest,
    siteId,
    shareKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateDocumentRequest** | **UpdateDocumentRequest**|  | |
| **documentId** | [**string**] | Document Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **shareKey** | [**string**] | Share Identifier | (optional) defaults to undefined|


### Return type

**AddDocumentResponse**

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

