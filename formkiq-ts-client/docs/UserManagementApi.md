# UserManagementApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addGroup**](#addgroup) | **POST** /groups | Add a group|
|[**addUser**](#adduser) | **POST** /users | Add User|
|[**addUserToGroup**](#addusertogroup) | **POST** /groups/{groupName}/users | Add User to a group|
|[**deleteGroup**](#deletegroup) | **DELETE** /groups/{groupName} | Delete Group|
|[**deleteUsername**](#deleteusername) | **DELETE** /users/{username} | Delete Username|
|[**getGroup**](#getgroup) | **GET** /groups/{groupName} | Get a user group|
|[**getGroups**](#getgroups) | **GET** /groups | Get list of user group(s)|
|[**getListOfUserGroups**](#getlistofusergroups) | **GET** /users/{username}/groups | Returns a list of group user belongs to|
|[**getUser**](#getuser) | **GET** /users/{username} | Get a user|
|[**getUsers**](#getusers) | **GET** /users | Get list of user(s)|
|[**getUsersInGroup**](#getusersingroup) | **GET** /groups/{groupName}/users | Get users in a group|
|[**removeUsernameFromGroup**](#removeusernamefromgroup) | **DELETE** /groups/{groupName}/users/{username} | Remove Username From Group|
|[**setUserOperation**](#setuseroperation) | **PUT** /users/{username}/{userOperation} | Set User Operation|

# **addGroup**
> AddResponse addGroup(addGroupRequest)

Add a new group

### Example

```typescript
import {
    UserManagementApi,
    Configuration,
    AddGroupRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new UserManagementApi(configuration);

let addGroupRequest: AddGroupRequest; //

const { status, data } = await apiInstance.addGroup(
    addGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addGroupRequest** | **AddGroupRequest**|  | |


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

# **addUser**
> AddResponse addUser(addUserRequest)

Adds a user

### Example

```typescript
import {
    UserManagementApi,
    Configuration,
    AddUserRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new UserManagementApi(configuration);

let addUserRequest: AddUserRequest; //

const { status, data } = await apiInstance.addUser(
    addUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addUserRequest** | **AddUserRequest**|  | |


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

# **addUserToGroup**
> AddResponse addUserToGroup(addUserRequest)

Adds a user to a group

### Example

```typescript
import {
    UserManagementApi,
    Configuration,
    AddUserRequest
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new UserManagementApi(configuration);

let groupName: string; //Group Name (default to undefined)
let addUserRequest: AddUserRequest; //

const { status, data } = await apiInstance.addUserToGroup(
    groupName,
    addUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addUserRequest** | **AddUserRequest**|  | |
| **groupName** | [**string**] | Group Name | defaults to undefined|


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

# **deleteGroup**
> DeleteResponse deleteGroup()

Delete Group

### Example

```typescript
import {
    UserManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new UserManagementApi(configuration);

let groupName: string; //Group Name (default to undefined)

const { status, data } = await apiInstance.deleteGroup(
    groupName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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

# **deleteUsername**
> DeleteResponse deleteUsername()

Delete Username

### Example

```typescript
import {
    UserManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new UserManagementApi(configuration);

let username: string; //Username (default to undefined)

const { status, data } = await apiInstance.deleteUsername(
    username
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] | Username | defaults to undefined|


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

# **getGroup**
> GetGroupResponse getGroup()

Returns a user group

### Example

```typescript
import {
    UserManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new UserManagementApi(configuration);

let groupName: string; //Group Name (default to undefined)

const { status, data } = await apiInstance.getGroup(
    groupName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupName** | [**string**] | Group Name | defaults to undefined|


### Return type

**GetGroupResponse**

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

# **getGroups**
> GetGroupsResponse getGroups()

Returns the list of user groups

### Example

```typescript
import {
    UserManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new UserManagementApi(configuration);

let limit: string; //Limit Results (optional) (default to '10')
let next: string; //Next page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.getGroups(
    limit,
    next
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|


### Return type

**GetGroupsResponse**

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

# **getListOfUserGroups**
> GetUserGroupsResponse getListOfUserGroups()

Returns a list of group user belongs to

### Example

```typescript
import {
    UserManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new UserManagementApi(configuration);

let username: string; //Username (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let next: string; //Next page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.getListOfUserGroups(
    username,
    limit,
    next
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] | Username | defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|


### Return type

**GetUserGroupsResponse**

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

# **getUser**
> GetUserResponse getUser()

Returns a user

### Example

```typescript
import {
    UserManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new UserManagementApi(configuration);

let username: string; //Username (default to undefined)

const { status, data } = await apiInstance.getUser(
    username
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] | Username | defaults to undefined|


### Return type

**GetUserResponse**

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

# **getUsers**
> GetUsersResponse getUsers()

Returns the list of users

### Example

```typescript
import {
    UserManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new UserManagementApi(configuration);

let limit: string; //Limit Results (optional) (default to '10')
let next: string; //Next page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.getUsers(
    limit,
    next
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|


### Return type

**GetUsersResponse**

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

# **getUsersInGroup**
> GetUsersInGroupResponse getUsersInGroup()

Returns the list of users in a group

### Example

```typescript
import {
    UserManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new UserManagementApi(configuration);

let groupName: string; //Group Name (default to undefined)
let limit: string; //Limit Results (optional) (default to '10')
let next: string; //Next page of results token (optional) (default to undefined)

const { status, data } = await apiInstance.getUsersInGroup(
    groupName,
    limit,
    next
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupName** | [**string**] | Group Name | defaults to undefined|
| **limit** | [**string**] | Limit Results | (optional) defaults to '10'|
| **next** | [**string**] | Next page of results token | (optional) defaults to undefined|


### Return type

**GetUsersInGroupResponse**

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

# **removeUsernameFromGroup**
> DeleteResponse removeUsernameFromGroup()

Remove Username From Group

### Example

```typescript
import {
    UserManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new UserManagementApi(configuration);

let groupName: string; //Group Name (default to undefined)
let username: string; //Username (default to undefined)

const { status, data } = await apiInstance.removeUsernameFromGroup(
    groupName,
    username
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupName** | [**string**] | Group Name | defaults to undefined|
| **username** | [**string**] | Username | defaults to undefined|


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

# **setUserOperation**
> SetResponse setUserOperation()

Set User Operation (disable, enable, reset-password)

### Example

```typescript
import {
    UserManagementApi,
    Configuration
} from 'formkiq-ts-client';

const configuration = new Configuration();
const apiInstance = new UserManagementApi(configuration);

let username: string; //Username (default to undefined)
let userOperation: 'DISABLE' | 'ENABLE' | 'RESET_PASSWORD'; //Username Operation (default to undefined)

const { status, data } = await apiInstance.setUserOperation(
    username,
    userOperation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] | Username | defaults to undefined|
| **userOperation** | [**&#39;DISABLE&#39; | &#39;ENABLE&#39; | &#39;RESET_PASSWORD&#39;**]**Array<&#39;DISABLE&#39; &#124; &#39;ENABLE&#39; &#124; &#39;RESET_PASSWORD&#39;>** | Username Operation | defaults to undefined|


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

