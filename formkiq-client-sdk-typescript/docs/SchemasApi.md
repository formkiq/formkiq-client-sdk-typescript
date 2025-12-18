# SchemasApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addClassification**](#addclassification) | **POST** /sites/{siteId}/classifications | Add Classification|
|[**deleteClassification**](#deleteclassification) | **DELETE** /sites/{siteId}/classifications/{classificationId} | Delete Classification|
|[**getClassification**](#getclassification) | **GET** /sites/{siteId}/classifications/{classificationId} | Get Classification|
|[**getClassificationAttributeAllowedValues**](#getclassificationattributeallowedvalues) | **GET** /sites/{siteId}/classifications/{classificationId}/attributes/{key}/allowedValues | Get Classification\&#39;s Attribute Allowed Values|
|[**getSitesClassifications**](#getsitesclassifications) | **GET** /sites/{siteId}/classifications | Get Sites Classifications|
|[**getSitesSchema**](#getsitesschema) | **GET** /sites/{siteId}/schema/document | Get Sites Schema|
|[**getSitesSchemaAttributeAllowedValues**](#getsitesschemaattributeallowedvalues) | **GET** /sites/{siteId}/schema/document/attributes/{key}/allowedValues | Get Attribute Allowed Values|
|[**setClassification**](#setclassification) | **PUT** /sites/{siteId}/classifications/{classificationId} | Set Classification|
|[**setSitesSchema**](#setsitesschema) | **PUT** /sites/{siteId}/schema/document | Set Sites Schema|

# **addClassification**
> AddClassificationResponse addClassification(addClassificationRequest)

Add Classification

### Example

```typescript
import {
    SchemasApi,
    Configuration,
    AddClassificationRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SchemasApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let addClassificationRequest: AddClassificationRequest; //

const { status, data } = await apiInstance.addClassification(
    siteId,
    addClassificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addClassificationRequest** | **AddClassificationRequest**|  | |
| **siteId** | [**string**] | Site Identifier | defaults to undefined|


### Return type

**AddClassificationResponse**

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

# **deleteClassification**
> DeleteResponse deleteClassification()

Delete Classification

### Example

```typescript
import {
    SchemasApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SchemasApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let classificationId: string; //Classification Identifier (default to undefined)

const { status, data } = await apiInstance.deleteClassification(
    siteId,
    classificationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **classificationId** | [**string**] | Classification Identifier | defaults to undefined|


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

# **getClassification**
> GetClassificationResponse getClassification()

Get Classification

### Example

```typescript
import {
    SchemasApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SchemasApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let classificationId: string; //Classification Identifier (default to undefined)
let locale: string; //Site Locale (ISO 639 / ISO 3166) (optional) (default to undefined)

const { status, data } = await apiInstance.getClassification(
    siteId,
    classificationId,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **classificationId** | [**string**] | Classification Identifier | defaults to undefined|
| **locale** | [**string**] | Site Locale (ISO 639 / ISO 3166) | (optional) defaults to undefined|


### Return type

**GetClassificationResponse**

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

# **getClassificationAttributeAllowedValues**
> GetAttributeAllowedValuesResponse getClassificationAttributeAllowedValues()

Returns an attribute\'s allowed values that spans for a specific classifications and site schema

### Example

```typescript
import {
    SchemasApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SchemasApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let classificationId: string; //Classification Identifier (default to undefined)
let key: string; //Key Identifier (default to undefined)
let locale: string; //Site Locale (ISO 639 / ISO 3166) (optional) (default to undefined)

const { status, data } = await apiInstance.getClassificationAttributeAllowedValues(
    siteId,
    classificationId,
    key,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **classificationId** | [**string**] | Classification Identifier | defaults to undefined|
| **key** | [**string**] | Key Identifier | defaults to undefined|
| **locale** | [**string**] | Site Locale (ISO 639 / ISO 3166) | (optional) defaults to undefined|


### Return type

**GetAttributeAllowedValuesResponse**

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

# **getSitesClassifications**
> GetClassificationsResponse getSitesClassifications()

Gets Sites Classifications

### Example

```typescript
import {
    SchemasApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SchemasApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let next: string; //Next page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.getSitesClassifications(
    siteId,
    limit,
    next
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|


### Return type

**GetClassificationsResponse**

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

# **getSitesSchema**
> GetSitesSchemaResponse getSitesSchema()

Gets Sites schema

### Example

```typescript
import {
    SchemasApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SchemasApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let locale: string; //Site Locale (ISO 639 / ISO 3166) (optional) (default to undefined)

const { status, data } = await apiInstance.getSitesSchema(
    siteId,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **locale** | [**string**] | Site Locale (ISO 639 / ISO 3166) | (optional) defaults to undefined|


### Return type

**GetSitesSchemaResponse**

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

# **getSitesSchemaAttributeAllowedValues**
> GetAttributeAllowedValuesResponse getSitesSchemaAttributeAllowedValues()

Returns an attribute\'s allowed values from the site schema

### Example

```typescript
import {
    SchemasApi,
    Configuration
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SchemasApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let key: string; //Key Identifier (default to undefined)
let locale: string; //Site Locale (ISO 639 / ISO 3166) (optional) (default to undefined)

const { status, data } = await apiInstance.getSitesSchemaAttributeAllowedValues(
    siteId,
    key,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **key** | [**string**] | Key Identifier | defaults to undefined|
| **locale** | [**string**] | Site Locale (ISO 639 / ISO 3166) | (optional) defaults to undefined|


### Return type

**GetAttributeAllowedValuesResponse**

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

# **setClassification**
> SetResponse setClassification(setClassificationRequest)

Sets Classification

### Example

```typescript
import {
    SchemasApi,
    Configuration,
    SetClassificationRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SchemasApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let classificationId: string; //Classification Identifier (default to undefined)
let setClassificationRequest: SetClassificationRequest; //

const { status, data } = await apiInstance.setClassification(
    siteId,
    classificationId,
    setClassificationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setClassificationRequest** | **SetClassificationRequest**|  | |
| **siteId** | [**string**] | Site Identifier | defaults to undefined|
| **classificationId** | [**string**] | Classification Identifier | defaults to undefined|


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
|**400** | 400 OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setSitesSchema**
> SetResponse setSitesSchema(setSitesSchemaRequest)

Sets Sites schema

### Example

```typescript
import {
    SchemasApi,
    Configuration,
    SetSitesSchemaRequest
} from 'formkiq-client-sdk-typescript';

const configuration = new Configuration();
const apiInstance = new SchemasApi(configuration);

let siteId: string; //Site Identifier (default to undefined)
let setSitesSchemaRequest: SetSitesSchemaRequest; //

const { status, data } = await apiInstance.setSitesSchema(
    siteId,
    setSitesSchemaRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **setSitesSchemaRequest** | **SetSitesSchemaRequest**|  | |
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
|**400** | 400 OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

