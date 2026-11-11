# ApiPermissionRoleType

A predefined permission role or CUSTOM for selecting individual permissions. ADMIN grants all scoped permissions. GOVERN grants governance, read, write and delete permissions outside the dedicated management roles. WRITE also grants read and delete permissions. SYSTEM_MANAGEMENT and USER_MANAGEMENT grant their respective management permissions. READ and DELETE grant their matching operation permissions. CUSTOM has no implicit grants.

## Enum

* `Admin` (value: `'ADMIN'`)

* `Delete` (value: `'DELETE'`)

* `Read` (value: `'READ'`)

* `Write` (value: `'WRITE'`)

* `Govern` (value: `'GOVERN'`)

* `SystemManagement` (value: `'SYSTEM_MANAGEMENT'`)

* `UserManagement` (value: `'USER_MANAGEMENT'`)

* `Custom` (value: `'CUSTOM'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
