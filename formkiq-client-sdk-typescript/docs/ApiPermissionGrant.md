# ApiPermissionGrant

An explicit permission grant. Scoped names match those returned by the permission catalog. The legacy ADMIN, DELETE, READ, WRITE and GOVERN umbrella names are also accepted for compatibility. These names are explicit grants, not selections of a predefined role type; for example, WRITE alone does not imply READ or DELETE. RetentionPolicy and ReminderPolicy in the PRESET namespace require their dedicated policy grants in place of READ_ENTITY, WRITE_ENTITY and DELETE_ENTITY. Use roleType to select a predefined role. Administrator grants require an administrator caller.

## Enum

* `Admin` (value: `'ADMIN'`)

* `Delete` (value: `'DELETE'`)

* `Read` (value: `'READ'`)

* `Write` (value: `'WRITE'`)

* `Govern` (value: `'GOVERN'`)

* `GovernAccessControl` (value: `'GOVERN_ACCESS_CONTROL'`)

* `ReadAttributes` (value: `'READ_ATTRIBUTES'`)

* `WriteAttributes` (value: `'WRITE_ATTRIBUTES'`)

* `DeleteAttributes` (value: `'DELETE_ATTRIBUTES'`)

* `ReadDocumentActions` (value: `'READ_DOCUMENT_ACTIONS'`)

* `WriteDocumentActions` (value: `'WRITE_DOCUMENT_ACTIONS'`)

* `ReadDocumentAttributes` (value: `'READ_DOCUMENT_ATTRIBUTES'`)

* `WriteDocumentAttributes` (value: `'WRITE_DOCUMENT_ATTRIBUTES'`)

* `DeleteDocumentAttributes` (value: `'DELETE_DOCUMENT_ATTRIBUTES'`)

* `GovernDocumentFolders` (value: `'GOVERN_DOCUMENT_FOLDERS'`)

* `WriteDocumentGeneration` (value: `'WRITE_DOCUMENT_GENERATION'`)

* `WriteDocumentShares` (value: `'WRITE_DOCUMENT_SHARES'`)

* `DeleteDocumentShares` (value: `'DELETE_DOCUMENT_SHARES'`)

* `ReadDocumentTags` (value: `'READ_DOCUMENT_TAGS'`)

* `WriteDocumentTags` (value: `'WRITE_DOCUMENT_TAGS'`)

* `DeleteDocumentTags` (value: `'DELETE_DOCUMENT_TAGS'`)

* `ReadDocumentVersions` (value: `'READ_DOCUMENT_VERSIONS'`)

* `WriteDocumentVersions` (value: `'WRITE_DOCUMENT_VERSIONS'`)

* `GovernDocumentVersions` (value: `'GOVERN_DOCUMENT_VERSIONS'`)

* `ReadDocumentWorkflows` (value: `'READ_DOCUMENT_WORKFLOWS'`)

* `WriteDocumentWorkflows` (value: `'WRITE_DOCUMENT_WORKFLOWS'`)

* `DeleteDocumentWorkflows` (value: `'DELETE_DOCUMENT_WORKFLOWS'`)

* `ReadDocuments` (value: `'READ_DOCUMENTS'`)

* `WriteDocuments` (value: `'WRITE_DOCUMENTS'`)

* `DeleteDocuments` (value: `'DELETE_DOCUMENTS'`)

* `GovernDocuments` (value: `'GOVERN_DOCUMENTS'`)

* `ReadESignature` (value: `'READ_E_SIGNATURE'`)

* `WriteESignature` (value: `'WRITE_E_SIGNATURE'`)

* `ReadEntity` (value: `'READ_ENTITY'`)

* `WriteEntity` (value: `'WRITE_ENTITY'`)

* `DeleteEntity` (value: `'DELETE_ENTITY'`)

* `ReadExamineObjects` (value: `'READ_EXAMINE_OBJECTS'`)

* `WriteGoogleIntegration` (value: `'WRITE_GOOGLE_INTEGRATION'`)

* `ReadIntelligentDocumentProcessing` (value: `'READ_INTELLIGENT_DOCUMENT_PROCESSING'`)

* `WriteIntelligentDocumentProcessing` (value: `'WRITE_INTELLIGENT_DOCUMENT_PROCESSING'`)

* `ReadMappings` (value: `'READ_MAPPINGS'`)

* `WriteMappings` (value: `'WRITE_MAPPINGS'`)

* `DeleteMappings` (value: `'DELETE_MAPPINGS'`)

* `ReadReminderPolicy` (value: `'READ_REMINDER_POLICY'`)

* `WriteReminderPolicy` (value: `'WRITE_REMINDER_POLICY'`)

* `DeleteReminderPolicy` (value: `'DELETE_REMINDER_POLICY'`)

* `ReadRetentionPolicy` (value: `'READ_RETENTION_POLICY'`)

* `WriteRetentionPolicy` (value: `'WRITE_RETENTION_POLICY'`)

* `DeleteRetentionPolicy` (value: `'DELETE_RETENTION_POLICY'`)

* `ReadRulesets` (value: `'READ_RULESETS'`)

* `WriteRulesets` (value: `'WRITE_RULESETS'`)

* `DeleteRulesets` (value: `'DELETE_RULESETS'`)

* `ReadSchemas` (value: `'READ_SCHEMAS'`)

* `WriteSchemas` (value: `'WRITE_SCHEMAS'`)

* `DeleteSchemas` (value: `'DELETE_SCHEMAS'`)

* `WriteShortlinks` (value: `'WRITE_SHORTLINKS'`)

* `ReadSystemManagement` (value: `'READ_SYSTEM_MANAGEMENT'`)

* `WriteSystemManagement` (value: `'WRITE_SYSTEM_MANAGEMENT'`)

* `DeleteSystemManagement` (value: `'DELETE_SYSTEM_MANAGEMENT'`)

* `GovernUserActivities` (value: `'GOVERN_USER_ACTIVITIES'`)

* `ReadUserManagement` (value: `'READ_USER_MANAGEMENT'`)

* `WriteUserManagement` (value: `'WRITE_USER_MANAGEMENT'`)

* `DeleteUserManagement` (value: `'DELETE_USER_MANAGEMENT'`)

* `GovernUserManagement` (value: `'GOVERN_USER_MANAGEMENT'`)

* `ReadWebhooks` (value: `'READ_WEBHOOKS'`)

* `WriteWebhooks` (value: `'WRITE_WEBHOOKS'`)

* `DeleteWebhooks` (value: `'DELETE_WEBHOOKS'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
