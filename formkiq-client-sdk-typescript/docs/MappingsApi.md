# MappingsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addMapping**](#addmapping) | **POST** /mappings | Add New Mapping|
|[**deleteMapping**](#deletemapping) | **DELETE** /mappings/{mappingId} | Delete Mapping|
|[**getMapping**](#getmapping) | **GET** /mappings/{mappingId} | Get Mapping|
|[**getMappings**](#getmappings) | **GET** /mappings | Get Mappings|
|[**setMapping**](#setmapping) | **PUT** /mappings/{mappingId} | Set Mapping|

# **addMapping**
> AddMappingResponse addMapping(addMappingRequest)

Creates a new mapping; available as an Add-On Module

### Example

```typescript
import {
    MappingsApi,
    Configuration,
    AddMappingRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MappingsApi(configuration);

let addMappingRequest: AddMappingRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addMapping(
    addMappingRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addMappingRequest** | **AddMappingRequest**|  | |
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**AddMappingResponse**

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

# **deleteMapping**
> DeleteResponse deleteMapping()

Delete Mapping; available as an Add-On Module

### Example

```typescript
import {
    MappingsApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MappingsApi(configuration);

let mappingId: string; //Mapping Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteMapping(
    mappingId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mappingId** | [**string**] | Mapping Identifier | defaults to undefined|
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

# **getMapping**
> GetMappingResponse getMapping()

Get a mapping; available as an Add-On Module

### Example

```typescript
import {
    MappingsApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MappingsApi(configuration);

let mappingId: string; //Mapping Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getMapping(
    mappingId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mappingId** | [**string**] | Mapping Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**GetMappingResponse**

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

# **getMappings**
> GetMappingsResponse getMappings()

Returns a list of mappings; available as an Add-On Module

### Example

```typescript
import {
    MappingsApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MappingsApi(configuration);

let siteId: string; //Site Identifier (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let next: string; //Next page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.getMappings(
    siteId,
    limit,
    next
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|


### Return type

**GetMappingsResponse**

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

# **setMapping**
> SetResponse setMapping(setMappingRequest)

Sets an mapping; available as an Add-On Module

### Example

```typescript
import {
    MappingsApi,
    Configuration,
    SetMappingRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new MappingsApi(configuration);

let mappingId: string; //Mapping Identifier (default to undefined)
let setMappingRequest: SetMappingRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)
let createIfMissing: boolean; //When true, skip checking whether the resource exists before setting it (optional) (default to false)

const { status, data } = await apiInstance.setMapping(
    mappingId,
    setMappingRequest,
    siteId,
    createIfMissing
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setMappingRequest** | **SetMappingRequest**|  | |
| **mappingId** | [**string**] | Mapping Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **createIfMissing** | [**boolean**] | When true, skip checking whether the resource exists before setting it | (optional) defaults to false|


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
|**200** | 200 CREATED |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
|**400** | 400 OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

