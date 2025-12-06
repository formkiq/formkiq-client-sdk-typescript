# AccessControlApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteOpaAccessPolicyItems**](#deleteopaaccesspolicyitems) | **DELETE** /sites/{siteId}/opa/accessPolicy/policyItems | Delete OPA Access Policy Items|
|[**getOpaAccessPolicies**](#getopaaccesspolicies) | **GET** /sites/opa/accessPolicies | Get OPAs Access Policies|
|[**getOpaAccessPolicy**](#getopaaccesspolicy) | **GET** /sites/{siteId}/opa/accessPolicy | Get OPA Access Policy|
|[**getOpaAccessPolicyItems**](#getopaaccesspolicyitems) | **GET** /sites/{siteId}/opa/accessPolicy/policyItems | Get OPA Access Policy Items|
|[**setOpaAccessPolicyItems**](#setopaaccesspolicyitems) | **PUT** /sites/{siteId}/opa/accessPolicy/policyItems | Set opa access policy items, can only be requested with ADMIN privileges|

# **deleteOpaAccessPolicyItems**
> DeleteResponse deleteOpaAccessPolicyItems()

Delete OPA Access Policy Items

### Example

```typescript
import {
    AccessControlApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new AccessControlApi(configuration);

let siteId: string; //Site Identifier (default to undefined)

const { status, data } = await apiInstance.deleteOpaAccessPolicyItems(
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

# **getOpaAccessPolicies**
> GetOpaAccessPoliciesResponse getOpaAccessPolicies()

Returns a list of OPA Access Policies, can only be requested with ADMIN privileges

### Example

```typescript
import {
    AccessControlApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new AccessControlApi(configuration);

const { status, data } = await apiInstance.getOpaAccessPolicies();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetOpaAccessPoliciesResponse**

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

# **getOpaAccessPolicy**
> GetOpaAccessPolicyResponse getOpaAccessPolicy()

Returns OPA Access Policy, can only be requested with ADMIN privileges

### Example

```typescript
import {
    AccessControlApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new AccessControlApi(configuration);

let siteId: string; //Site Identifier (default to undefined)

const { status, data } = await apiInstance.getOpaAccessPolicy(
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|


### Return type

**GetOpaAccessPolicyResponse**

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

# **getOpaAccessPolicyItems**
> GetOpaAccessPolicyItemsResponse getOpaAccessPolicyItems()

Returns OPA Access Policy Items, can only be requested with ADMIN privileges

### Example

```typescript
import {
    AccessControlApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new AccessControlApi(configuration);

let siteId: string; //Site Identifier (default to undefined)

const { status, data } = await apiInstance.getOpaAccessPolicyItems(
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|


### Return type

**GetOpaAccessPolicyItemsResponse**

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

# **setOpaAccessPolicyItems**
> SetResponse setOpaAccessPolicyItems(setOpaAccessPolicyItemsRequest)

Sets opa access policy items

### Example

```typescript
import {
    AccessControlApi,
    Configuration,
    SetOpaAccessPolicyItemsRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new AccessControlApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let setOpaAccessPolicyItemsRequest: SetOpaAccessPolicyItemsRequest; //

const { status, data } = await apiInstance.setOpaAccessPolicyItems(
    siteId,
    setOpaAccessPolicyItemsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setOpaAccessPolicyItemsRequest** | **SetOpaAccessPolicyItemsRequest**|  | |
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
|**200** | 200 CREATED |  * Access-Control-Allow-Origin -  <br>  * Access-Control-Allow-Methods -  <br>  * Access-Control-Allow-Headers -  <br>  |
|**400** | 400 OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

