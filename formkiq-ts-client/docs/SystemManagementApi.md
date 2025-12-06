# SystemManagementApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addApiKey**](#addapikey) | **POST** /sites/{siteId}/apiKeys | Add API Key|
|[**addLocale**](#addlocale) | **POST** /sites/{siteId}/locales | Add Locale|
|[**addLocaleResourceItem**](#addlocaleresourceitem) | **POST** /sites/{siteId}/locales/{locale}/resourceItems | Add Locale Resource Item|
|[**addOpenSearchRestoreSnapshot**](#addopensearchrestoresnapshot) | **POST** /sites/{siteId}/opensearch/snapshots/{snapshotName}/restore | Add an OpenSearch Restore Snapshot|
|[**addOpenSearchSnapshot**](#addopensearchsnapshot) | **POST** /sites/{siteId}/opensearch/snapshots/{snapshotName} | Add an OpenSearch Snapshot|
|[**addSite**](#addsite) | **POST** /sites | Add Site|
|[**deleteApiKey**](#deleteapikey) | **DELETE** /sites/{siteId}/apiKeys/{apiKey} | Delete API Key|
|[**deleteLocale**](#deletelocale) | **DELETE** /sites/{siteId}/locales/{locale} | Delete Locale|
|[**deleteLocaleResourceItem**](#deletelocaleresourceitem) | **DELETE** /sites/{siteId}/locales/{locale}/resourceItems/{itemKey} | Delete Local Resource Item|
|[**deleteOpenSearchIndex**](#deleteopensearchindex) | **DELETE** /sites/{siteId}/opensearch/index | Deletes site(s) OpenSearch index|
|[**deleteOpenSearchIndexByName**](#deleteopensearchindexbyname) | **DELETE** /sites/global/opensearch/indices/{indexName} | Deletes OpenSearch index by name|
|[**deleteOpenSearchRestoreSnapshot**](#deleteopensearchrestoresnapshot) | **DELETE** /sites/{siteId}/opensearch/snapshots/{snapshotName}/restore | Deletes site(s) OpenSearch Restore Snapshot|
|[**deleteOpenSearchSnapshot**](#deleteopensearchsnapshot) | **DELETE** /sites/{siteId}/opensearch/snapshots/{snapshotName} | Deletes site(s) OpenSearch Snapshot|
|[**deleteOpenSearchSnapshotRepository**](#deleteopensearchsnapshotrepository) | **DELETE** /sites/{siteId}/opensearch/snapshotRepository | Deletes site(s) OpenSearch Snapshot Repository|
|[**deleteSiteGroup**](#deletesitegroup) | **DELETE** /sites/{siteId}/groups/{groupName} | Deletes Site Group and permissions|
|[**getAllOpenSearchIndices**](#getallopensearchindices) | **GET** /sites/global/opensearch/indices | Get all OpenSearch indices|
|[**getApiKeys**](#getapikeys) | **GET** /sites/{siteId}/apiKeys | Get API Keys|
|[**getConfiguration**](#getconfiguration) | **GET** /sites/{siteId}/configuration | Get site configuration|
|[**getLocaleResourceItem**](#getlocaleresourceitem) | **GET** /sites/{siteId}/locales/{locale}/resourceItems/{itemKey} | Get Resource Item by Locale|
|[**getLocaleResourceItems**](#getlocaleresourceitems) | **GET** /sites/{siteId}/locales/{locale}/resourceItems | Get Resource Items by Locale|
|[**getLocales**](#getlocales) | **GET** /sites/{siteId}/locales | Get Locales|
|[**getOpenSearchIndex**](#getopensearchindex) | **GET** /sites/{siteId}/opensearch/index | Get site(s) OpenSearch index settings|
|[**getOpenSearchIndices**](#getopensearchindices) | **GET** /sites/{siteId}/opensearch/indices | Get site(s) OpenSearch indices|
|[**getOpenSearchSnapshot**](#getopensearchsnapshot) | **GET** /sites/{siteId}/opensearch/snapshots/{snapshotName} | Get site(s) OpenSearch snapshot|
|[**getOpenSearchSnapshotRepositories**](#getopensearchsnapshotrepositories) | **GET** /sites/global/opensearch/snapshotRepositories | Get site(s) OpenSearch snapshot repositories|
|[**getOpenSearchSnapshotRepository**](#getopensearchsnapshotrepository) | **GET** /sites/{siteId}/opensearch/snapshotRepository | Get site(s) OpenSearch snapshot repository|
|[**getOpenSearchSnapshots**](#getopensearchsnapshots) | **GET** /sites/{siteId}/opensearch/snapshots | Get site(s) OpenSearch snapshots|
|[**getSiteGroup**](#getsitegroup) | **GET** /sites/{siteId}/groups/{groupName} | Get group and permissions belonging to site|
|[**getSiteGroups**](#getsitegroups) | **GET** /sites/{siteId}/groups | Get group(s) and permissions belonging to site|
|[**getSites**](#getsites) | **GET** /sites | Get site(s) access|
|[**getVersion**](#getversion) | **GET** /version | Get FormKiQ version|
|[**setLocaleResourceItem**](#setlocaleresourceitem) | **PUT** /sites/{siteId}/locales/{locale}/resourceItems/{itemKey} | Set Locale Resource Item|
|[**setOpenSearchIndex**](#setopensearchindex) | **PUT** /sites/{siteId}/opensearch/index | Set site(s) OpenSearch index settings|
|[**setOpenSearchIndices**](#setopensearchindices) | **PUT** /sites/{siteId}/opensearch/indices | Set site(s) OpenSearch index to use for a SiteId|
|[**setSiteGroupPermissions**](#setsitegrouppermissions) | **PUT** /sites/{siteId}/groups/{groupName}/permissions | Set Site\&#39;s Group Permissions|
|[**updateConfiguration**](#updateconfiguration) | **PATCH** /sites/{siteId}/configuration | Update site configuration|
|[**updateSite**](#updatesite) | **PATCH** /sites/{siteId} | Update Site|

# **addApiKey**
> AddApiKeyResponse addApiKey(addApiKeyRequest)

Adds a new API Key

### Example

```typescript
import {
    SystemManagementApi,
    Configuration,
    AddApiKeyRequest
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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

Add an OpenSearch Restore Snapshot

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-ts-client';

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

Add an OpenSearch Snapshot

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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

# **deleteApiKey**
> DeleteApiKeyResponse deleteApiKey()

Adds a new API Key

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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

Deletes the OpenSearch Restore Snapshot

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-ts-client';

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

Deletes the OpenSearch Snapshot

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-ts-client';

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

Deletes the OpenSearch Snapshot Repository

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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

# **getAllOpenSearchIndices**
> GetOpenSearchIndiceResponse getAllOpenSearchIndices()

Returns all OpenSearch indices

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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

Returns the OpenSearch Snapshot

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-ts-client';

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

Returns the OpenSearch Snapshot Repositories

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-ts-client';

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

Returns the OpenSearch Snapshot Repository

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-ts-client';

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

Returns the OpenSearch Snapshots

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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

# **getVersion**
> GetVersionResponse getVersion()

Return the version of FormKiQ

### Example

```typescript
import {
    SystemManagementApi,
    Configuration
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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
} from 'formkiq-ts-client';

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

