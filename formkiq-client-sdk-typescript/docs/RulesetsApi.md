# RulesetsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addRule**](#addrule) | **POST** /rulesets/{rulesetId}/rules | Add New Rule|
|[**addRuleset**](#addruleset) | **POST** /rulesets | Add New Ruleset|
|[**deleteRule**](#deleterule) | **DELETE** /rulesets/{rulesetId}/rules/{ruleId} | Delete Rule|
|[**deleteRuleset**](#deleteruleset) | **DELETE** /rulesets/{rulesetId} | Delete Ruleset|
|[**getRule**](#getrule) | **GET** /rulesets/{rulesetId}/rules/{ruleId} | Get Rule|
|[**getRules**](#getrules) | **GET** /rulesets/{rulesetId}/rules | Get Rules|
|[**getRuleset**](#getruleset) | **GET** /rulesets/{rulesetId} | Get Ruleset|
|[**getRulesets**](#getrulesets) | **GET** /rulesets | Get Rulesets|
|[**updateRule**](#updaterule) | **PATCH** /rulesets/{rulesetId}/rules/{ruleId} | Update Rule|
|[**updateRuleset**](#updateruleset) | **PATCH** /rulesets/{rulesetId} | Update Ruleset|

# **addRule**
> AddRuleResponse addRule(addRuleRequest)

Creates a new rule; available as an Add-On Module

### Example

```typescript
import {
    RulesetsApi,
    Configuration,
    AddRuleRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new RulesetsApi(configuration);

let rulesetId: string; //Ruleset Identifier (default to undefined)
let addRuleRequest: AddRuleRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addRule(
    rulesetId,
    addRuleRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addRuleRequest** | **AddRuleRequest**|  | |
| **rulesetId** | [**string**] | Ruleset Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**AddRuleResponse**

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

# **addRuleset**
> AddRulesetResponse addRuleset(addRulesetRequest)

Creates a new ruleset; available as an Add-On Module

### Example

```typescript
import {
    RulesetsApi,
    Configuration,
    AddRulesetRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new RulesetsApi(configuration);

let addRulesetRequest: AddRulesetRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.addRuleset(
    addRulesetRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addRulesetRequest** | **AddRulesetRequest**|  | |
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**AddRulesetResponse**

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

# **deleteRule**
> DeleteRuleResponse deleteRule()

Delete Rule; available as an Add-On Module

### Example

```typescript
import {
    RulesetsApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new RulesetsApi(configuration);

let rulesetId: string; //Ruleset Identifier (default to undefined)
let ruleId: string; //Rule Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteRule(
    rulesetId,
    ruleId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rulesetId** | [**string**] | Ruleset Identifier | defaults to undefined|
| **ruleId** | [**string**] | Rule Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**DeleteRuleResponse**

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

# **deleteRuleset**
> DeleteRulesetResponse deleteRuleset()

Delete Ruleset; available as an Add-On Module

### Example

```typescript
import {
    RulesetsApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new RulesetsApi(configuration);

let rulesetId: string; //Ruleset Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.deleteRuleset(
    rulesetId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rulesetId** | [**string**] | Ruleset Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**DeleteRulesetResponse**

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

# **getRule**
> GetRuleResponse getRule()

Returns a rule in a ruleset; available as an Add-On Module

### Example

```typescript
import {
    RulesetsApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new RulesetsApi(configuration);

let rulesetId: string; //Ruleset Identifier (default to undefined)
let ruleId: string; //Rule Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getRule(
    rulesetId,
    ruleId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rulesetId** | [**string**] | Ruleset Identifier | defaults to undefined|
| **ruleId** | [**string**] | Rule Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**GetRuleResponse**

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

# **getRules**
> GetRulesResponse getRules()

Returns a list of rules in a ruleset; available as an Add-On Module

### Example

```typescript
import {
    RulesetsApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new RulesetsApi(configuration);

let rulesetId: string; //Ruleset Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)
let next: string; //Next page of results token (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')

const { status, data } = await apiInstance.getRules(
    rulesetId,
    siteId,
    next,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rulesetId** | [**string**] | Ruleset Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|


### Return type

**GetRulesResponse**

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

# **getRuleset**
> GetRulesetResponse getRuleset()

Get a rule sets; available as an Add-On Module

### Example

```typescript
import {
    RulesetsApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new RulesetsApi(configuration);

let rulesetId: string; //Ruleset Identifier (default to undefined)
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.getRuleset(
    rulesetId,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rulesetId** | [**string**] | Ruleset Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**GetRulesetResponse**

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

# **getRulesets**
> GetRulesetsResponse getRulesets()

Returns a list of rule sets; available as an Add-On Module

### Example

```typescript
import {
    RulesetsApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new RulesetsApi(configuration);

let siteId: string; //Site Identifier (optional) (default to undefined)
let next: string; //Next page of results token (optional) (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')

const { status, data } = await apiInstance.getRulesets(
    siteId,
    next,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|


### Return type

**GetRulesetsResponse**

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

# **updateRule**
> UpdateRuleResponse updateRule(updateRuleRequest)

Update Rule; available as an Add-On Module

### Example

```typescript
import {
    RulesetsApi,
    Configuration,
    UpdateRuleRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new RulesetsApi(configuration);

let rulesetId: string; //Ruleset Identifier (default to undefined)
let ruleId: string; //Rule Identifier (default to undefined)
let updateRuleRequest: UpdateRuleRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.updateRule(
    rulesetId,
    ruleId,
    updateRuleRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateRuleRequest** | **UpdateRuleRequest**|  | |
| **rulesetId** | [**string**] | Ruleset Identifier | defaults to undefined|
| **ruleId** | [**string**] | Rule Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**UpdateRuleResponse**

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

# **updateRuleset**
> UpdateRulesetResponse updateRuleset(updateRulesetRequest)

Updates an existing ruleset; available as an Add-On Module

### Example

```typescript
import {
    RulesetsApi,
    Configuration,
    UpdateRulesetRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new RulesetsApi(configuration);

let rulesetId: string; //Ruleset Identifier (default to undefined)
let updateRulesetRequest: UpdateRulesetRequest; //
let siteId: string; //Site Identifier (optional) (default to undefined)

const { status, data } = await apiInstance.updateRuleset(
    rulesetId,
    updateRulesetRequest,
    siteId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateRulesetRequest** | **UpdateRulesetRequest**|  | |
| **rulesetId** | [**string**] | Ruleset Identifier | defaults to undefined|
| **siteId** | [**string**] | Site Identifier | (optional) defaults to undefined|


### Return type

**UpdateRulesetResponse**

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

