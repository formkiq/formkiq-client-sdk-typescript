# EntityApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addEntity**](#addentity) | **POST** /entities/{entityTypeId} | Add New Entity|
|[**addEntityType**](#addentitytype) | **POST** /entityTypes | Add New EntityType|
|[**deleteEntity**](#deleteentity) | **DELETE** /entities/{entityTypeId}/{entityId} | Deletes Entity|
|[**deleteEntityType**](#deleteentitytype) | **DELETE** /entityTypes/{entityTypeId} | Deletes Entity Type|
|[**getEntities**](#getentities) | **GET** /entities/{entityTypeId} | Get Entities|
|[**getEntity**](#getentity) | **GET** /entities/{entityTypeId}/{entityId} | Get Entity|
|[**getEntityType**](#getentitytype) | **GET** /entityTypes/{entityTypeId} | Get EntityType|
|[**getEntityTypes**](#getentitytypes) | **GET** /entityTypes | Get EntityTypes|
|[**updateEntity**](#updateentity) | **PATCH** /entities/{entityTypeId}/{entityId} | Update Entity|

# **addEntity**
> AddEntityResponse addEntity(addEntityRequest)

Creates a Entity

### Example

```typescript
import {
    EntityApi,
    Configuration,
    AddEntityRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new EntityApi(configuration);

let entityTypeId: string; //EntityType Identifier (default to undefined)
let addEntityRequest: AddEntityRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let namespace: 'PRESET' | 'CUSTOM'; //Namespace Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addEntity(
    entityTypeId,
    addEntityRequest,
    siteId,
    namespace
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addEntityRequest** | **AddEntityRequest**|  | |
| **entityTypeId** | [**string**] | EntityType Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **namespace** | [**&#39;PRESET&#39; | &#39;CUSTOM&#39;**]**Array<&#39;PRESET&#39; &#124; &#39;CUSTOM&#39;>** | Namespace Identifier | (optional) defaults to undefined|


### Return type

**AddEntityResponse**

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

# **addEntityType**
> AddEntityTypeResponse addEntityType(addEntityTypeRequest)

Creates a Entity Type

### Example

```typescript
import {
    EntityApi,
    Configuration,
    AddEntityTypeRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new EntityApi(configuration);

let addEntityTypeRequest: AddEntityTypeRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addEntityType(
    addEntityTypeRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addEntityTypeRequest** | **AddEntityTypeRequest**|  | |
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**AddEntityTypeResponse**

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

# **deleteEntity**
> DeleteResponse deleteEntity()

Deletes Entity

### Example

```typescript
import {
    EntityApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new EntityApi(configuration);

let entityTypeId: string; //EntityType Identifier (default to undefined)
let entityId: string; //Entity Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteEntity(
    entityTypeId,
    entityId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityTypeId** | [**string**] | EntityType Identifier | defaults to undefined|
| **entityId** | [**string**] | Entity Identifier | defaults to undefined|
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

# **deleteEntityType**
> DeleteResponse deleteEntityType()

Deletes Entity Type

### Example

```typescript
import {
    EntityApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new EntityApi(configuration);

let entityTypeId: string; //EntityType Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteEntityType(
    entityTypeId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityTypeId** | [**string**] | EntityType Identifier | defaults to undefined|
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

# **getEntities**
> GetEntitiesResponse getEntities()

Returns a list of entities

### Example

```typescript
import {
    EntityApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new EntityApi(configuration);

let entityTypeId: string; //EntityType Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let namespace: 'PRESET' | 'CUSTOM'; //Namespace Identifier (optional) (default to undefined)
let next: string; //Next page of results token (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')

const { status, data } = await apiInstance.getEntities(
    entityTypeId,
    siteId,
    namespace,
    next,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityTypeId** | [**string**] | EntityType Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **namespace** | [**&#39;PRESET&#39; | &#39;CUSTOM&#39;**]**Array<&#39;PRESET&#39; &#124; &#39;CUSTOM&#39;>** | Namespace Identifier | (optional) defaults to undefined|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|


### Return type

**GetEntitiesResponse**

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

# **getEntity**
> GetEntityResponse getEntity()

Returns a entity

### Example

```typescript
import {
    EntityApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new EntityApi(configuration);

let entityTypeId: string; //EntityType Identifier (default to undefined)
let entityId: string; //Entity Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let namespace: 'PRESET' | 'CUSTOM'; //Namespace Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getEntity(
    entityTypeId,
    entityId,
    siteId,
    namespace
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityTypeId** | [**string**] | EntityType Identifier | defaults to undefined|
| **entityId** | [**string**] | Entity Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **namespace** | [**&#39;PRESET&#39; | &#39;CUSTOM&#39;**]**Array<&#39;PRESET&#39; &#124; &#39;CUSTOM&#39;>** | Namespace Identifier | (optional) defaults to undefined|


### Return type

**GetEntityResponse**

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

# **getEntityType**
> GetEntityTypeResponse getEntityType()

Returns a entity type

### Example

```typescript
import {
    EntityApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new EntityApi(configuration);

let entityTypeId: string; //EntityType Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let namespace: 'PRESET' | 'CUSTOM'; //Namespace Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getEntityType(
    entityTypeId,
    siteId,
    namespace
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **entityTypeId** | [**string**] | EntityType Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **namespace** | [**&#39;PRESET&#39; | &#39;CUSTOM&#39;**]**Array<&#39;PRESET&#39; &#124; &#39;CUSTOM&#39;>** | Namespace Identifier | (optional) defaults to undefined|


### Return type

**GetEntityTypeResponse**

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

# **getEntityTypes**
> GetEntityTypesResponse getEntityTypes()

Returns a list of entity types

### Example

```typescript
import {
    EntityApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new EntityApi(configuration);

let siteId: string; //Site Identifier (optional) (default to undefined)
let namespace: 'PRESET' | 'CUSTOM'; //Namespace Identifier (optional) (default to undefined)
let next: string; //Next page of results token (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')

const { status, data } = await apiInstance.getEntityTypes(
    siteId,
    namespace,
    next,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **namespace** | [**&#39;PRESET&#39; | &#39;CUSTOM&#39;**]**Array<&#39;PRESET&#39; &#124; &#39;CUSTOM&#39;>** | Namespace Identifier | (optional) defaults to undefined|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|


### Return type

**GetEntityTypesResponse**

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

# **updateEntity**
> UpdateResponse updateEntity(updateEntityRequest)

Updates a Entity

### Example

```typescript
import {
    EntityApi,
    Configuration,
    UpdateEntityRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new EntityApi(configuration);

let entityTypeId: string; //EntityType Identifier (default to undefined)
let entityId: string; //Entity Identifier (default to undefined)
let updateEntityRequest: UpdateEntityRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let namespace: 'PRESET' | 'CUSTOM'; //Namespace Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.updateEntity(
    entityTypeId,
    entityId,
    updateEntityRequest,
    siteId,
    namespace
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateEntityRequest** | **UpdateEntityRequest**|  | |
| **entityTypeId** | [**string**] | EntityType Identifier | defaults to undefined|
| **entityId** | [**string**] | Entity Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **namespace** | [**&#39;PRESET&#39; | &#39;CUSTOM&#39;**]**Array<&#39;PRESET&#39; &#124; &#39;CUSTOM&#39;>** | Namespace Identifier | (optional) defaults to undefined|


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

