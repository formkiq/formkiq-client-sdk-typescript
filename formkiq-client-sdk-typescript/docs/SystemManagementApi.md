# SystemManagementApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addApiKey**](#addapikey) | **POST** /sites/{siteId}/apiKeys | Add API Key|
|[**addLocale**](#addlocale) | **POST** /sites/{siteId}/locales | Add Locale|
|[**addLocaleResourceItem**](#addlocaleresourceitem) | **POST** /sites/{siteId}/locales/{locale}/resourceItems | Add Locale Resource Item|
|[**addOpenSearchRestoreSnapshot**](#addopensearchrestoresnapshot) | **POST** /sites/{siteId}/opensearch/snapshots/{snapshotName}/restore | Restore site OpenSearch snapshot|
|[**addOpenSearchSnapshot**](#addopensearchsnapshot) | **POST** /sites/{siteId}/opensearch/snapshots/{snapshotName} | Create site OpenSearch snapshot|
|[**addSite**](#addsite) | **POST** /sites | Add Site|
|[**addSystemInferenceModelAgreement**](#addsysteminferencemodelagreement) | **POST** /system/inferenceModels/agreement | Agree to a system inference model|
|[**cleanupOpenSearchSnapshotRepository**](#cleanupopensearchsnapshotrepository) | **POST** /sites/global/opensearch/snapshotRepositories/{repositoryName}/cleanup | Cleanup OpenSearch snapshot repository|
|[**deleteApiKey**](#deleteapikey) | **DELETE** /sites/{siteId}/apiKeys/{apiKey} | Delete API Key|
|[**deleteLocale**](#deletelocale) | **DELETE** /sites/{siteId}/locales/{locale} | Delete Locale|
|[**deleteLocaleResourceItem**](#deletelocaleresourceitem) | **DELETE** /sites/{siteId}/locales/{locale}/resourceItems/{itemKey} | Delete Local Resource Item|
|[**deleteOpenSearchIndex**](#deleteopensearchindex) | **DELETE** /sites/{siteId}/opensearch/index | Deletes site(s) OpenSearch index|
|[**deleteOpenSearchIndexByName**](#deleteopensearchindexbyname) | **DELETE** /sites/global/opensearch/indices/{indexName} | Deletes OpenSearch index by name|
|[**deleteOpenSearchRestoreSnapshot**](#deleteopensearchrestoresnapshot) | **DELETE** /sites/{siteId}/opensearch/snapshots/{snapshotName}/restore | Delete restored OpenSearch snapshot index|
|[**deleteOpenSearchSnapshot**](#deleteopensearchsnapshot) | **DELETE** /sites/{siteId}/opensearch/snapshots/{snapshotName} | Delete site OpenSearch snapshot|
|[**deleteOpenSearchSnapshotRepository**](#deleteopensearchsnapshotrepository) | **DELETE** /sites/{siteId}/opensearch/snapshotRepository | Delete site OpenSearch snapshot repository|
|[**deleteSiteGroup**](#deletesitegroup) | **DELETE** /sites/{siteId}/groups/{groupName} | Deletes Site Group and permissions|
|[**generateDelegationToken**](#generatedelegationtoken) | **POST** /sites/{siteId}/delegationTokens | Generate a delegation token|
|[**getAllOpenSearchIndices**](#getallopensearchindices) | **GET** /sites/global/opensearch/indices | Get all OpenSearch indices|
|[**getApiKeys**](#getapikeys) | **GET** /sites/{siteId}/apiKeys | Get API Keys|
|[**getConfiguration**](#getconfiguration) | **GET** /sites/{siteId}/configuration | Get site configuration|
|[**getLocaleResourceItem**](#getlocaleresourceitem) | **GET** /sites/{siteId}/locales/{locale}/resourceItems/{itemKey} | Get Resource Item by Locale|
|[**getLocaleResourceItems**](#getlocaleresourceitems) | **GET** /sites/{siteId}/locales/{locale}/resourceItems | Get Resource Items by Locale|
|[**getLocales**](#getlocales) | **GET** /sites/{siteId}/locales | Get Locales|
|[**getOpenSearchIndex**](#getopensearchindex) | **GET** /sites/{siteId}/opensearch/index | Get site(s) OpenSearch index settings|
|[**getOpenSearchIndices**](#getopensearchindices) | **GET** /sites/{siteId}/opensearch/indices | Get site(s) OpenSearch indices|
|[**getOpenSearchSnapshot**](#getopensearchsnapshot) | **GET** /sites/{siteId}/opensearch/snapshots/{snapshotName} | Get site OpenSearch snapshot|
|[**getOpenSearchSnapshotRepositories**](#getopensearchsnapshotrepositories) | **GET** /sites/global/opensearch/snapshotRepositories | List OpenSearch snapshot repositories|
|[**getOpenSearchSnapshotRepository**](#getopensearchsnapshotrepository) | **GET** /sites/{siteId}/opensearch/snapshotRepository | Get site OpenSearch snapshot repository|
|[**getOpenSearchSnapshots**](#getopensearchsnapshots) | **GET** /sites/{siteId}/opensearch/snapshots | List site OpenSearch snapshots|
|[**getSiteGroup**](#getsitegroup) | **GET** /sites/{siteId}/groups/{groupName} | Get group and permissions belonging to site|
|[**getSiteGroups**](#getsitegroups) | **GET** /sites/{siteId}/groups | Get group(s) and permissions belonging to site|
|[**getSites**](#getsites) | **GET** /sites | Get site(s) access|
|[**getSystemConfiguration**](#getsystemconfiguration) | **GET** /system/configuration | Get system configuration|
|[**getSystemInferenceModels**](#getsysteminferencemodels) | **GET** /system/inferenceModels | Get system inference models|
|[**getVersion**](#getversion) | **GET** /version | Get FormKiQ version|
|[**setLocaleResourceItem**](#setlocaleresourceitem) | **PUT** /sites/{siteId}/locales/{locale}/resourceItems/{itemKey} | Set Locale Resource Item|
|[**setOpenSearchIndex**](#setopensearchindex) | **PUT** /sites/{siteId}/opensearch/index | Set site(s) OpenSearch index settings|
|[**setOpenSearchIndices**](#setopensearchindices) | **PUT** /sites/{siteId}/opensearch/indices | Set site(s) OpenSearch index to use for a SiteId|
|[**setSiteGroupPermissions**](#setsitegrouppermissions) | **PUT** /sites/{siteId}/groups/{groupName}/permissions | Set Site\&#39;s Group Permissions|
|[**updateConfiguration**](#updateconfiguration) | **PATCH** /sites/{siteId}/configuration | Update site configuration|
|[**updateSite**](#updatesite) | **PATCH** /sites/{siteId} | Update Site|
|[**updateSystemConfiguration**](#updatesystemconfiguration) | **PATCH** /system/configuration | Update system configuration|

# **addApiKey**
> AddApiKeyResponse addApiKey(addApiKeyRequest)

Adds a new API Key

### Example

```typescript
import {
    SystemManagementApi,
    Configuration,
    AddApiKeyRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let addApiKeyRequest: AddApiKeyRequest; //

const { status, data } = await apiInstance.addApiKey(
    siteId,
    addApiKeyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addApiKeyRequest** | **AddApiKeyRequest**|  | |
| **siteId** | [**string**] | Site Identifier | defaults to undefined|


### Return type

**AddApiKeyResponse**

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

# **addLocale**
> AddResponse addLocale(addLocaleRequest)

Adds a new locale to the specified site

### Example

```typescript
import {
    SystemManagementApi,
    Configuration,
    AddLocaleRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let addLocaleRequest: AddLocaleRequest; //

const { status, data } = await apiInstance.addLocale(
    siteId,
    addLocaleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addLocaleRequest** | **AddLocaleRequest**|  | |
| **siteId** | [**string**] | Site Identifier | defaults to undefined|


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
|**201** | 201 CREATED |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addLocaleResourceItem**
> AddLocaleResourceItemResponse addLocaleResourceItem(addLocaleResourceItemRequest)

Adds a new localized resource item for a given locale

### Example

```typescript
import {
    SystemManagementApi,
    Configuration,
    AddLocaleResourceItemRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let locale: string; //Site Locale (ISO 639 / ISO 3166) (default to undefined)
let addLocaleResourceItemRequest: AddLocaleResourceItemRequest; //

const { status, data } = await apiInstance.addLocaleResourceItem(
    siteId,
    locale,
    addLocaleResourceItemRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addLocaleResourceItemRequest** | **AddLocaleResourceItemRequest**|  | |
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **locale** | [**string**] | Site Locale (ISO 639 / ISO 3166) | defaults to undefined|


### Return type

**AddLocaleResourceItemResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 201 CREATED |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addOpenSearchRestoreSnapshot**
> AddResponse addOpenSearchRestoreSnapshot()

Restores the specified snapshot into a separate OpenSearch index for the site.  The restored index is created from the site\'s current index name with the snapshot name and \"_restored\" suffix. For provisioned OpenSearch domains, the snapshot is read from the site\'s S3 snapshot repository. For OpenSearch Serverless, the snapshot is read from the automated snapshot repository.

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let snapshotName: string; //Snapshot Name (default to undefined)

const { status, data } = await apiInstance.addOpenSearchRestoreSnapshot(
    siteId,
    snapshotName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **snapshotName** | [**string**] | Snapshot Name | defaults to undefined|


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

# **addOpenSearchSnapshot**
> AddResponse addOpenSearchSnapshot()

Creates a manual snapshot of the specified site\'s OpenSearch index.  If the site\'s S3 snapshot repository does not already exist, it is registered before the snapshot is created. The supplied snapshot name is stored with the site prefix. This operation is not supported for OpenSearch Serverless.

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let snapshotName: string; //Snapshot Name (default to undefined)

const { status, data } = await apiInstance.addOpenSearchSnapshot(
    siteId,
    snapshotName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **snapshotName** | [**string**] | Snapshot Name | defaults to undefined|


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

# **addSite**
> AddResponse addSite(addSiteRequest)

Add Site

### Example

```typescript
import {
    SystemManagementApi,
    Configuration,
    AddSiteRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let addSiteRequest: AddSiteRequest; //

const { status, data } = await apiInstance.addSite(
    addSiteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addSiteRequest** | **AddSiteRequest**|  | |


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
|**201** | 201 CREATED |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
|**400** | 400 OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addSystemInferenceModelAgreement**
> AddResponse addSystemInferenceModelAgreement(addSystemInferenceModelAgreementRequest)

Agree to the Bedrock model usage agreement for a system inference model

### Example

```typescript
import {
    SystemManagementApi,
    Configuration,
    AddSystemInferenceModelAgreementRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let addSystemInferenceModelAgreementRequest: AddSystemInferenceModelAgreementRequest; //

const { status, data } = await apiInstance.addSystemInferenceModelAgreement(
    addSystemInferenceModelAgreementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addSystemInferenceModelAgreementRequest** | **AddSystemInferenceModelAgreementRequest**|  | |


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
|**400** | 400 Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cleanupOpenSearchSnapshotRepository**
> CleanupOpenSearchSnapshotRepositoryResponse cleanupOpenSearchSnapshotRepository()

Cleans up stale data in the specified OpenSearch snapshot repository.  This endpoint clears data no longer referenced by any existing snapshot. This operation is not supported for OpenSearch Serverless.

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let repositoryName: string; //Snapshot Repository Name (default to undefined)
let clusterManagerTimeout: string; //The amount of time to wait for a response from the cluster manager node. (optional) (default to undefined)
let timeout: string; //The amount of time to wait for the operation to complete. (optional) (default to undefined)

const { status, data } = await apiInstance.cleanupOpenSearchSnapshotRepository(
    repositoryName,
    clusterManagerTimeout,
    timeout
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **repositoryName** | [**string**] | Snapshot Repository Name | defaults to undefined|
| **clusterManagerTimeout** | [**string**] | The amount of time to wait for a response from the cluster manager node. | (optional) defaults to undefined|
| **timeout** | [**string**] | The amount of time to wait for the operation to complete. | (optional) defaults to undefined|


### Return type

**CleanupOpenSearchSnapshotRepositoryResponse**

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

# **deleteApiKey**
> DeleteApiKeyResponse deleteApiKey()

Adds a new API Key

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let apiKey: string; //API Key (default to undefined)

const { status, data } = await apiInstance.deleteApiKey(
    siteId,
    apiKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **apiKey** | [**string**] | API Key | defaults to undefined|


### Return type

**DeleteApiKeyResponse**

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

# **deleteLocale**
> DeleteResponse deleteLocale()

Delete Locale

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let locale: string; //Site Locale (ISO 639 / ISO 3166) (default to undefined)

const { status, data } = await apiInstance.deleteLocale(
    siteId,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **locale** | [**string**] | Site Locale (ISO 639 / ISO 3166) | defaults to undefined|


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

# **deleteLocaleResourceItem**
> DeleteResponse deleteLocaleResourceItem()

Delete Local Resource Item

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let locale: string; //Site Locale (ISO 639 / ISO 3166) (default to undefined)
let itemKey: string; //Item Key (MUST be URL‑encoded) (default to undefined)

const { status, data } = await apiInstance.deleteLocaleResourceItem(
    siteId,
    locale,
    itemKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **locale** | [**string**] | Site Locale (ISO 639 / ISO 3166) | defaults to undefined|
| **itemKey** | [**string**] | Item Key (MUST be URL‑encoded) | defaults to undefined|


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

# **deleteOpenSearchIndex**
> DeleteResponse deleteOpenSearchIndex()

Deletes the OpenSearch index

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)

const { status, data } = await apiInstance.deleteOpenSearchIndex(
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|


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

# **deleteOpenSearchIndexByName**
> DeleteResponse deleteOpenSearchIndexByName()

Deletes the OpenSearch index by name

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let indexName: string; //IndexName to path (default to undefined)

const { status, data } = await apiInstance.deleteOpenSearchIndexByName(
    indexName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **indexName** | [**string**] | IndexName to path | defaults to undefined|


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

# **deleteOpenSearchRestoreSnapshot**
> DeleteResponse deleteOpenSearchRestoreSnapshot()

Deletes the restored OpenSearch index created from the specified snapshot.  This deletes only the restored index named with the snapshot name and \"_restored\" suffix. It does not delete the original site index or the snapshot. This operation is not supported for OpenSearch Serverless.

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let snapshotName: string; //Snapshot Name (default to undefined)

const { status, data } = await apiInstance.deleteOpenSearchRestoreSnapshot(
    siteId,
    snapshotName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **snapshotName** | [**string**] | Snapshot Name | defaults to undefined|


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

# **deleteOpenSearchSnapshot**
> DeleteResponse deleteOpenSearchSnapshot()

Deletes a manual snapshot from the specified site\'s S3 snapshot repository.  The supplied snapshot name is resolved to the site\'s stored snapshot name before deletion. This operation is not supported for OpenSearch Serverless.

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let snapshotName: string; //Snapshot Name (default to undefined)

const { status, data } = await apiInstance.deleteOpenSearchSnapshot(
    siteId,
    snapshotName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **snapshotName** | [**string**] | Snapshot Name | defaults to undefined|


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

# **deleteOpenSearchSnapshotRepository**
> DeleteResponse deleteOpenSearchSnapshotRepository()

Deletes the S3 snapshot repository configured for the specified site\'s OpenSearch index.  This removes the OpenSearch repository registration, not the site\'s index. This operation is not supported for OpenSearch Serverless.

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)

const { status, data } = await apiInstance.deleteOpenSearchSnapshotRepository(
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|


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

# **deleteSiteGroup**
> DeleteResponse deleteSiteGroup()

Deletes Site Group and permissions

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let groupName: string; //Group Name (default to undefined)

const { status, data } = await apiInstance.deleteSiteGroup(
    siteId,
    groupName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **groupName** | [**string**] | Group Name | defaults to undefined|


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

# **generateDelegationToken**
> AddDelegationTokenResponse generateDelegationToken(addDelegationTokenRequest)

Creates a KMS-signed delegation token for a site. This endpoint requires ADMIN permission for the requested siteId. The returned token is sent on later API requests in the x-formkiq-delegation-token header and reduces the caller\'s effective permissions to the requested subset for that site. It cannot grant ADMIN, add permissions the caller does not already have, or add access to other sites. When onBehalfOf is supplied, activity created while using the token is attributed to that username while the signed token still records the ADMIN principal that issued it. The reason is signed into the token for audit and support traceability.

### Example

```typescript
import {
    SystemManagementApi,
    Configuration,
    AddDelegationTokenRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let addDelegationTokenRequest: AddDelegationTokenRequest; //

const { status, data } = await apiInstance.generateDelegationToken(
    siteId,
    addDelegationTokenRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addDelegationTokenRequest** | **AddDelegationTokenRequest**|  | |
| **siteId** | [**string**] | Site Identifier | defaults to undefined|


### Return type

**AddDelegationTokenResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 OK |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
|**400** | 400 Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllOpenSearchIndices**
> GetOpenSearchIndiceResponse getAllOpenSearchIndices()

Returns all OpenSearch indices

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

const { status, data } = await apiInstance.getAllOpenSearchIndices();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetOpenSearchIndiceResponse**

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

# **getApiKeys**
> GetApiKeysResponse getApiKeys()

Returns the list of ApiKeys

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let next: string; //Next page of results token (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')

const { status, data } = await apiInstance.getApiKeys(
    siteId,
    next,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|


### Return type

**GetApiKeysResponse**

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

# **getConfiguration**
> GetConfigurationResponse getConfiguration()

Returns the list of sites that the user has access to

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)

const { status, data } = await apiInstance.getConfiguration(
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|


### Return type

**GetConfigurationResponse**

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

# **getLocaleResourceItem**
> GetLocaleResourceItemResponse getLocaleResourceItem()

Returns the resource item

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let locale: string; //Site Locale (ISO 639 / ISO 3166) (default to undefined)
let itemKey: string; //Item Key (MUST be URL‑encoded) (default to undefined)

const { status, data } = await apiInstance.getLocaleResourceItem(
    siteId,
    locale,
    itemKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **locale** | [**string**] | Site Locale (ISO 639 / ISO 3166) | defaults to undefined|
| **itemKey** | [**string**] | Item Key (MUST be URL‑encoded) | defaults to undefined|


### Return type

**GetLocaleResourceItemResponse**

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

# **getLocaleResourceItems**
> GetLocaleResourceItemsResponse getLocaleResourceItems()

Returns the list resource items

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let locale: string; //Site Locale (ISO 639 / ISO 3166) (default to undefined)
let next: string; //Next page of results token (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')

const { status, data } = await apiInstance.getLocaleResourceItems(
    siteId,
    locale,
    next,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **locale** | [**string**] | Site Locale (ISO 639 / ISO 3166) | defaults to undefined|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|


### Return type

**GetLocaleResourceItemsResponse**

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

# **getLocales**
> GetLocalesResponse getLocales()

Returns a list of locale(s) in a specified site

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let next: string; //Next page of results token (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')

const { status, data } = await apiInstance.getLocales(
    siteId,
    next,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|


### Return type

**GetLocalesResponse**

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

# **getOpenSearchIndex**
> GetOpenSearchIndexResponse getOpenSearchIndex()

Returns the OpenSearch index settings   (Deprecated use /sites/{siteId}/opensearch/indices)

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)

const { status, data } = await apiInstance.getOpenSearchIndex(
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|


### Return type

**GetOpenSearchIndexResponse**

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

# **getOpenSearchIndices**
> GetOpenSearchIndiceResponse getOpenSearchIndices()

Returns the OpenSearch indices

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)

const { status, data } = await apiInstance.getOpenSearchIndices(
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|


### Return type

**GetOpenSearchIndiceResponse**

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

# **getOpenSearchSnapshot**
> GetOpenSearchSnapshotResponse getOpenSearchSnapshot()

Returns details for a snapshot of the specified site\'s OpenSearch index.  For provisioned OpenSearch domains, the supplied snapshot name is resolved to the site\'s stored snapshot name before lookup. For OpenSearch Serverless, the response is read from the automated snapshot repository.

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let snapshotName: string; //Snapshot Name (default to undefined)

const { status, data } = await apiInstance.getOpenSearchSnapshot(
    siteId,
    snapshotName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **snapshotName** | [**string**] | Snapshot Name | defaults to undefined|


### Return type

**GetOpenSearchSnapshotResponse**

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

# **getOpenSearchSnapshotRepositories**
> GetOpenSearchSnapshotRepositoryResponse getOpenSearchSnapshotRepositories()

Returns all configured OpenSearch S3 snapshot repositories for the deployment.  This endpoint is available to administrators when the fulltext OpenSearch module is installed and snapshot support is enabled. Snapshot repositories are not supported for OpenSearch Serverless.

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

const { status, data } = await apiInstance.getOpenSearchSnapshotRepositories();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetOpenSearchSnapshotRepositoryResponse**

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

# **getOpenSearchSnapshotRepository**
> GetOpenSearchSnapshotRepositoryResponse getOpenSearchSnapshotRepository()

Returns the S3 snapshot repository configured for the specified site.  The repository stores manual snapshots for the site\'s OpenSearch index. It is named from the site and application environment and is created automatically when a snapshot is requested. Snapshot repositories are not supported for OpenSearch Serverless.

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)

const { status, data } = await apiInstance.getOpenSearchSnapshotRepository(
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|


### Return type

**GetOpenSearchSnapshotRepositoryResponse**

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

# **getOpenSearchSnapshots**
> GetOpenSearchSnapshotResponse getOpenSearchSnapshots()

Returns snapshots for the specified site\'s OpenSearch index.  For provisioned OpenSearch domains, the response is read from the site\'s S3 snapshot repository. For OpenSearch Serverless, the response is read from the automated snapshot repository.

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)

const { status, data } = await apiInstance.getOpenSearchSnapshots(
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|


### Return type

**GetOpenSearchSnapshotResponse**

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

# **getSiteGroup**
> GetSiteGroupResponse getSiteGroup()

Returns details of a group and permissions belonging to site

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let groupName: string; //Group Name (default to undefined)

const { status, data } = await apiInstance.getSiteGroup(
    siteId,
    groupName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **groupName** | [**string**] | Group Name | defaults to undefined|


### Return type

**GetSiteGroupResponse**

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

# **getSiteGroups**
> GetSiteGroupsResponse getSiteGroups()

Returns list of groups and permissions belonging to site

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)

const { status, data } = await apiInstance.getSiteGroups(
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|


### Return type

**GetSiteGroupsResponse**

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

# **getSites**
> GetSitesResponse getSites()

Returns the list of sites that the user has access to

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let status: SiteStatus; //Fetch sites with status (only valid when using SitePermissions \'defined\' (optional) (default to undefined)

const { status, data } = await apiInstance.getSites(
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **status** | **SiteStatus** | Fetch sites with status (only valid when using SitePermissions \&#39;defined\&#39; | (optional) defaults to undefined|


### Return type

**GetSitesResponse**

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

# **getSystemConfiguration**
> GetSystemConfigurationResponse getSystemConfiguration()

Returns the system configuration

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

const { status, data } = await apiInstance.getSystemConfiguration();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetSystemConfigurationResponse**

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

# **getSystemInferenceModels**
> GetSystemInferenceModelsResponse getSystemInferenceModels()

Returns the system inference models

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

const { status, data } = await apiInstance.getSystemInferenceModels();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetSystemInferenceModelsResponse**

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

# **getVersion**
> GetVersionResponse getVersion()

Return the version of FormKiQ

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

const { status, data } = await apiInstance.getVersion();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetVersionResponse**

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

# **setLocaleResourceItem**
> SetResponse setLocaleResourceItem(setLocaleResourceItemRequest)

Set a new Locale Resource Item

### Example

```typescript
import {
    SystemManagementApi,
    Configuration,
    SetLocaleResourceItemRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let locale: string; //Site Locale (ISO 639 / ISO 3166) (default to undefined)
let itemKey: string; //Item Key (MUST be URL‑encoded) (default to undefined)
let setLocaleResourceItemRequest: SetLocaleResourceItemRequest; //

const { status, data } = await apiInstance.setLocaleResourceItem(
    siteId,
    locale,
    itemKey,
    setLocaleResourceItemRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setLocaleResourceItemRequest** | **SetLocaleResourceItemRequest**|  | |
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **locale** | [**string**] | Site Locale (ISO 639 / ISO 3166) | defaults to undefined|
| **itemKey** | [**string**] | Item Key (MUST be URL‑encoded) | defaults to undefined|


### Return type

**SetResponse**

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

# **setOpenSearchIndex**
> SetOpenSearchIndexResponse setOpenSearchIndex(setOpenSearchIndexRequest)

Sets the OpenSearch index settings

### Example

```typescript
import {
    SystemManagementApi,
    Configuration,
    SetOpenSearchIndexRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let setOpenSearchIndexRequest: SetOpenSearchIndexRequest; //

const { status, data } = await apiInstance.setOpenSearchIndex(
    siteId,
    setOpenSearchIndexRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setOpenSearchIndexRequest** | **SetOpenSearchIndexRequest**|  | |
| **siteId** | [**string**] | Site Identifier | defaults to undefined|


### Return type

**SetOpenSearchIndexResponse**

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

# **setOpenSearchIndices**
> SetResponse setOpenSearchIndices(setOpenSearchIndiceRequest)

Sets the OpenSearch index to use for a SiteId

### Example

```typescript
import {
    SystemManagementApi,
    Configuration,
    SetOpenSearchIndiceRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let setOpenSearchIndiceRequest: SetOpenSearchIndiceRequest; //

const { status, data } = await apiInstance.setOpenSearchIndices(
    siteId,
    setOpenSearchIndiceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setOpenSearchIndiceRequest** | **SetOpenSearchIndiceRequest**|  | |
| **siteId** | [**string**] | Site Identifier | defaults to undefined|


### Return type

**SetResponse**

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

# **setSiteGroupPermissions**
> SetResponse setSiteGroupPermissions(setGroupPermissionsRequest)

Set Site\'s Group Permissions

### Example

```typescript
import {
    SystemManagementApi,
    Configuration,
    SetGroupPermissionsRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let groupName: string; //Group Name (default to undefined)
let setGroupPermissionsRequest: SetGroupPermissionsRequest; //

const { status, data } = await apiInstance.setSiteGroupPermissions(
    siteId,
    groupName,
    setGroupPermissionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setGroupPermissionsRequest** | **SetGroupPermissionsRequest**|  | |
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **groupName** | [**string**] | Group Name | defaults to undefined|


### Return type

**SetResponse**

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

# **updateConfiguration**
> UpdateConfigurationResponse updateConfiguration(updateConfigurationRequest)

Update the System Management configuration

### Example

```typescript
import {
    SystemManagementApi,
    Configuration,
    UpdateConfigurationRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let updateConfigurationRequest: UpdateConfigurationRequest; //

const { status, data } = await apiInstance.updateConfiguration(
    siteId,
    updateConfigurationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateConfigurationRequest** | **UpdateConfigurationRequest**|  | |
| **siteId** | [**string**] | Site Identifier | defaults to undefined|


### Return type

**UpdateConfigurationResponse**

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

# **updateSite**
> UpdateResponse updateSite(updateSiteRequest)

Update Site

### Example

```typescript
import {
    SystemManagementApi,
    Configuration,
    UpdateSiteRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let updateSiteRequest: UpdateSiteRequest; //

const { status, data } = await apiInstance.updateSite(
    siteId,
    updateSiteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSiteRequest** | **UpdateSiteRequest**|  | |
| **siteId** | [**string**] | Site Identifier | defaults to undefined|


### Return type

**UpdateResponse**

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

# **updateSystemConfiguration**
> UpdateResponse updateSystemConfiguration(updateSystemConfigurationRequest)

Update the system configuration

### Example

```typescript
import {
    SystemManagementApi,
    Configuration,
    UpdateSystemConfigurationRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SystemManagementApi(configuration);

let updateSystemConfigurationRequest: UpdateSystemConfigurationRequest; //

const { status, data } = await apiInstance.updateSystemConfiguration(
    updateSystemConfigurationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateSystemConfigurationRequest** | **UpdateSystemConfigurationRequest**|  | |


### Return type

**UpdateResponse**

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

