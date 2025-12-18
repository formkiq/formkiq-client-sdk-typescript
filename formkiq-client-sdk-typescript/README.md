## formkiq-client-sdk-typescript@1.18.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install formkiq-client-sdk-typescript@1.18.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccessControlApi* | [**deleteOpaAccessPolicyItems**](docs/AccessControlApi.md#deleteopaaccesspolicyitems) | **DELETE** /sites/{siteId}/opa/accessPolicy/policyItems | Delete OPA Access Policy Items
*AccessControlApi* | [**getOpaAccessPolicies**](docs/AccessControlApi.md#getopaaccesspolicies) | **GET** /sites/opa/accessPolicies | Get OPAs Access Policies
*AccessControlApi* | [**getOpaAccessPolicy**](docs/AccessControlApi.md#getopaaccesspolicy) | **GET** /sites/{siteId}/opa/accessPolicy | Get OPA Access Policy
*AccessControlApi* | [**getOpaAccessPolicyItems**](docs/AccessControlApi.md#getopaaccesspolicyitems) | **GET** /sites/{siteId}/opa/accessPolicy/policyItems | Get OPA Access Policy Items
*AccessControlApi* | [**setOpaAccessPolicyItems**](docs/AccessControlApi.md#setopaaccesspolicyitems) | **PUT** /sites/{siteId}/opa/accessPolicy/policyItems | Set opa access policy items, can only be requested with ADMIN privileges
*AdvancedDocumentSearchApi* | [**addDocumentFulltext**](docs/AdvancedDocumentSearchApi.md#adddocumentfulltext) | **POST** /documents/{documentId}/fulltext | Add document\&#39;s full-text
*AdvancedDocumentSearchApi* | [**deleteDocumentFulltext**](docs/AdvancedDocumentSearchApi.md#deletedocumentfulltext) | **DELETE** /documents/{documentId}/fulltext | Delete document full-text
*AdvancedDocumentSearchApi* | [**deleteDocumentFulltextTag**](docs/AdvancedDocumentSearchApi.md#deletedocumentfulltexttag) | **DELETE** /documents/{documentId}/fulltext/tags/{tagKey} | Delete document full-text tag
*AdvancedDocumentSearchApi* | [**deleteDocumentFulltextTagAndValue**](docs/AdvancedDocumentSearchApi.md#deletedocumentfulltexttagandvalue) | **DELETE** /documents/{documentId}/fulltext/tags/{tagKey}/{tagValue} | Delete document full-text tag/value
*AdvancedDocumentSearchApi* | [**getDocumentFulltext**](docs/AdvancedDocumentSearchApi.md#getdocumentfulltext) | **GET** /documents/{documentId}/fulltext | Get document\&#39;s full-text
*AdvancedDocumentSearchApi* | [**queryFulltext**](docs/AdvancedDocumentSearchApi.md#queryfulltext) | **POST** /queryFulltext | Direct opensearch search API
*AdvancedDocumentSearchApi* | [**searchFulltext**](docs/AdvancedDocumentSearchApi.md#searchfulltext) | **POST** /searchFulltext | Document full-text search
*AdvancedDocumentSearchApi* | [**setDocumentFulltext**](docs/AdvancedDocumentSearchApi.md#setdocumentfulltext) | **PUT** /documents/{documentId}/fulltext | Set document\&#39;s full-text
*AdvancedDocumentSearchApi* | [**updateDocumentFulltext**](docs/AdvancedDocumentSearchApi.md#updatedocumentfulltext) | **PATCH** /documents/{documentId}/fulltext | Update document\&#39;s full-text
*AttributesApi* | [**addAttribute**](docs/AttributesApi.md#addattribute) | **POST** /attributes | Add new attribute
*AttributesApi* | [**deleteAttribute**](docs/AttributesApi.md#deleteattribute) | **DELETE** /attributes/{key} | Delete attribute
*AttributesApi* | [**getAttribute**](docs/AttributesApi.md#getattribute) | **GET** /attributes/{key} | Get Attribute
*AttributesApi* | [**getAttributeAllowedValues**](docs/AttributesApi.md#getattributeallowedvalues) | **GET** /attributes/{key}/allowedValues | Get Attribute Allowed Values
*AttributesApi* | [**getAttributes**](docs/AttributesApi.md#getattributes) | **GET** /attributes | Get Attributes listing
*AttributesApi* | [**updateAttribute**](docs/AttributesApi.md#updateattribute) | **PATCH** /attributes/{key} | Update existing attribute
*CaseManagementApi* | [**addCase**](docs/CaseManagementApi.md#addcase) | **POST** /cases | Add New Case
*CaseManagementApi* | [**addNigo**](docs/CaseManagementApi.md#addnigo) | **POST** /cases/{caseId}/nigos | Add New Nigo
*CaseManagementApi* | [**addTask**](docs/CaseManagementApi.md#addtask) | **POST** /cases/{caseId}/tasks | Add New Task
*CaseManagementApi* | [**deleteCase**](docs/CaseManagementApi.md#deletecase) | **DELETE** /cases/{caseId} | Delete Case
*CaseManagementApi* | [**deleteCaseDocument**](docs/CaseManagementApi.md#deletecasedocument) | **DELETE** /cases/{caseId}/documents/{documentId} | Delete Document from Case
*CaseManagementApi* | [**deleteNigo**](docs/CaseManagementApi.md#deletenigo) | **DELETE** /cases/{caseId}/nigos/{nigoId} | Delete Nigo
*CaseManagementApi* | [**deleteNigoDocument**](docs/CaseManagementApi.md#deletenigodocument) | **DELETE** /cases/{caseId}/nigos/{nigoId}/documents/{documentId} | Delete Document from Nigo
*CaseManagementApi* | [**deleteTask**](docs/CaseManagementApi.md#deletetask) | **DELETE** /cases/{caseId}/tasks/{taskId} | Delete Task
*CaseManagementApi* | [**deleteTaskDocument**](docs/CaseManagementApi.md#deletetaskdocument) | **DELETE** /cases/{caseId}/tasks/{taskId}/documents/{documentId} | Delete Document from Task
*CaseManagementApi* | [**getCase**](docs/CaseManagementApi.md#getcase) | **GET** /cases/{caseId} | Get Case details
*CaseManagementApi* | [**getCaseDocuments**](docs/CaseManagementApi.md#getcasedocuments) | **GET** /cases/{caseId}/documents | Get list of document in a case
*CaseManagementApi* | [**getCaseNigo**](docs/CaseManagementApi.md#getcasenigo) | **GET** /cases/{caseId}/nigos/{nigoId} | Get nigo in a case
*CaseManagementApi* | [**getCaseNigos**](docs/CaseManagementApi.md#getcasenigos) | **GET** /cases/{caseId}/nigos | Get list of Nigos in a case
*CaseManagementApi* | [**getCaseTask**](docs/CaseManagementApi.md#getcasetask) | **GET** /cases/{caseId}/tasks/{taskId} | Get task in a case
*CaseManagementApi* | [**getCaseTasks**](docs/CaseManagementApi.md#getcasetasks) | **GET** /cases/{caseId}/tasks | Get list of tasks in a case
*CaseManagementApi* | [**getCases**](docs/CaseManagementApi.md#getcases) | **GET** /cases | Get Case listing
*CaseManagementApi* | [**getNigoDocuments**](docs/CaseManagementApi.md#getnigodocuments) | **GET** /cases/{caseId}/nigos/{nigoId}/documents | Get list of document in a task
*CaseManagementApi* | [**getTaskDocuments**](docs/CaseManagementApi.md#gettaskdocuments) | **GET** /cases/{caseId}/tasks/{taskId}/documents | Get list of document in a task
*CaseManagementApi* | [**updateCase**](docs/CaseManagementApi.md#updatecase) | **PATCH** /cases/{caseId} | Update existing Case
*CaseManagementApi* | [**updateNigo**](docs/CaseManagementApi.md#updatenigo) | **PATCH** /cases/{caseId}/nigos/{nigoId} | Update existing Nigo
*CaseManagementApi* | [**updateTask**](docs/CaseManagementApi.md#updatetask) | **PATCH** /cases/{caseId}/tasks/{taskId} | Update existing Task
*CustomIndexApi* | [**deleteIndex**](docs/CustomIndexApi.md#deleteindex) | **DELETE** /indices/{indexType}/{indexKey} | 
*CustomIndexApi* | [**indexFolderMove**](docs/CustomIndexApi.md#indexfoldermove) | **POST** /indices/{indexType}/move | 
*CustomIndexApi* | [**indexSearch**](docs/CustomIndexApi.md#indexsearch) | **POST** /indices/search | 
*DocumentActionsApi* | [**addDocumentActions**](docs/DocumentActionsApi.md#adddocumentactions) | **POST** /documents/{documentId}/actions | Add document action
*DocumentActionsApi* | [**addDocumentRetryAction**](docs/DocumentActionsApi.md#adddocumentretryaction) | **POST** /documents/{documentId}/actions/retry | Retries failed document action(s)
*DocumentActionsApi* | [**getDocumentActions**](docs/DocumentActionsApi.md#getdocumentactions) | **GET** /documents/{documentId}/actions | Get document actions
*DocumentAttributesApi* | [**addDocumentAttributes**](docs/DocumentAttributesApi.md#adddocumentattributes) | **POST** /documents/{documentId}/attributes | Add attribute to document
*DocumentAttributesApi* | [**deleteDocumentAttribute**](docs/DocumentAttributesApi.md#deletedocumentattribute) | **DELETE** /documents/{documentId}/attributes/{attributeKey} | Delete document attribute
*DocumentAttributesApi* | [**deleteDocumentAttributeAndValue**](docs/DocumentAttributesApi.md#deletedocumentattributeandvalue) | **DELETE** /documents/{documentId}/attributes/{attributeKey}/{attributeValue} | Delete document\&#39;s attribute value
*DocumentAttributesApi* | [**getDocumentAttribute**](docs/DocumentAttributesApi.md#getdocumentattribute) | **GET** /documents/{documentId}/attributes/{attributeKey} | Get document attribute by key
*DocumentAttributesApi* | [**getDocumentAttributes**](docs/DocumentAttributesApi.md#getdocumentattributes) | **GET** /documents/{documentId}/attributes | Get document\&#39;s attributes
*DocumentAttributesApi* | [**setDocumentAttributeValue**](docs/DocumentAttributesApi.md#setdocumentattributevalue) | **PUT** /documents/{documentId}/attributes/{attributeKey} | Set document\&#39;s attributes value
*DocumentAttributesApi* | [**setDocumentAttributes**](docs/DocumentAttributesApi.md#setdocumentattributes) | **PUT** /documents/{documentId}/attributes | Set document\&#39;s attributes
*DocumentDataClassificationApi* | [**getDocumentDataClassification**](docs/DocumentDataClassificationApi.md#getdocumentdataclassification) | **GET** /documents/{documentId}/dataClassification | Get document\&#39;s data classification
*DocumentDataClassificationApi* | [**setDocumentDataClassification**](docs/DocumentDataClassificationApi.md#setdocumentdataclassification) | **PUT** /documents/{documentId}/dataClassification | Set document\&#39;s data classification
*DocumentFoldersApi* | [**addFolder**](docs/DocumentFoldersApi.md#addfolder) | **POST** /folders | Add document folder
*DocumentFoldersApi* | [**deleteFolder**](docs/DocumentFoldersApi.md#deletefolder) | **DELETE** /folders/{indexKey} | Delete document folder
*DocumentFoldersApi* | [**getFolderDocuments**](docs/DocumentFoldersApi.md#getfolderdocuments) | **GET** /folders | Get document folders
*DocumentFoldersApi* | [**getFolderPermissions**](docs/DocumentFoldersApi.md#getfolderpermissions) | **GET** /folders/{indexKey}/permissions | Get folder permissions
*DocumentFoldersApi* | [**setFolderPermissions**](docs/DocumentFoldersApi.md#setfolderpermissions) | **PUT** /folders/permissions | Sets Folder Permissions
*DocumentGenerationApi* | [**addDocumentGenerate**](docs/DocumentGenerationApi.md#adddocumentgenerate) | **POST** /documents/{documentId}/generate | Add Document Generate
*DocumentOCRApi* | [**addDocumentOcr**](docs/DocumentOCRApi.md#adddocumentocr) | **POST** /documents/{documentId}/ocr | Perform document ocr
*DocumentOCRApi* | [**deleteDocumentOcr**](docs/DocumentOCRApi.md#deletedocumentocr) | **DELETE** /documents/{documentId}/ocr | Delete document ocr
*DocumentOCRApi* | [**getDocumentOcr**](docs/DocumentOCRApi.md#getdocumentocr) | **GET** /documents/{documentId}/ocr | Get document ocr content
*DocumentOCRApi* | [**setDocumentOcr**](docs/DocumentOCRApi.md#setdocumentocr) | **PUT** /documents/{documentId}/ocr | Set document ocr result
*DocumentSearchApi* | [**documentSearch**](docs/DocumentSearchApi.md#documentsearch) | **POST** /search | Document search
*DocumentSharesApi* | [**addFolderShare**](docs/DocumentSharesApi.md#addfoldershare) | **POST** /shares/folders/{indexKey} | Add folder share
*DocumentSharesApi* | [**deleteShare**](docs/DocumentSharesApi.md#deleteshare) | **DELETE** /shares/{shareKey} | Delete folder share
*DocumentSharesApi* | [**getUserShares**](docs/DocumentSharesApi.md#getusershares) | **GET** /shares | Get user shared folders
*DocumentTagsApi* | [**addDocumentTags**](docs/DocumentTagsApi.md#adddocumenttags) | **POST** /documents/{documentId}/tags | Add tag to document
*DocumentTagsApi* | [**deleteDocumentTag**](docs/DocumentTagsApi.md#deletedocumenttag) | **DELETE** /documents/{documentId}/tags/{tagKey} | Delete document tag
*DocumentTagsApi* | [**deleteDocumentTagAndValue**](docs/DocumentTagsApi.md#deletedocumenttagandvalue) | **DELETE** /documents/{documentId}/tags/{tagKey}/{tagValue} | Delete document\&#39;s tag value
*DocumentTagsApi* | [**getDocumentTag**](docs/DocumentTagsApi.md#getdocumenttag) | **GET** /documents/{documentId}/tags/{tagKey} | Get document tag by key
*DocumentTagsApi* | [**getDocumentTags**](docs/DocumentTagsApi.md#getdocumenttags) | **GET** /documents/{documentId}/tags | Get document\&#39;s tags
*DocumentTagsApi* | [**setDocumentTag**](docs/DocumentTagsApi.md#setdocumenttag) | **PUT** /documents/{documentId}/tags/{tagKey} | Update document tag value(s)
*DocumentTagsApi* | [**setDocumentTags**](docs/DocumentTagsApi.md#setdocumenttags) | **PUT** /documents/{documentId}/tags | Set document\&#39;s tags
*DocumentTagsApi* | [**updateDocumentTags**](docs/DocumentTagsApi.md#updatedocumenttags) | **PATCH** /documents/{documentId}/tags | Update document tags
*DocumentTagsApi* | [**updateMatchingDocumentTags**](docs/DocumentTagsApi.md#updatematchingdocumenttags) | **PATCH** /documents/tags | Mass Update document tag(s)
*DocumentVersionsApi* | [**deleteDocumentVersion**](docs/DocumentVersionsApi.md#deletedocumentversion) | **DELETE** /documents/{documentId}/versions/{versionKey} | Delete document version
*DocumentVersionsApi* | [**getDocumentVersions**](docs/DocumentVersionsApi.md#getdocumentversions) | **GET** /documents/{documentId}/versions | Get document\&#39;s versions
*DocumentVersionsApi* | [**setDocumentVersion**](docs/DocumentVersionsApi.md#setdocumentversion) | **PUT** /documents/{documentId}/versions | Set version of document
*DocumentWorkflowsApi* | [**addDocumentWorkflow**](docs/DocumentWorkflowsApi.md#adddocumentworkflow) | **POST** /documents/{documentId}/workflows | Add document workflow
*DocumentWorkflowsApi* | [**addDocumentWorkflowDecisions**](docs/DocumentWorkflowsApi.md#adddocumentworkflowdecisions) | **POST** /documents/{documentId}/workflow/{workflowId}/decisions | Approve/Reject document in approval queue
*DocumentWorkflowsApi* | [**addQueue**](docs/DocumentWorkflowsApi.md#addqueue) | **POST** /queues | Add queue
*DocumentWorkflowsApi* | [**addWorkflow**](docs/DocumentWorkflowsApi.md#addworkflow) | **POST** /workflows | Add workflow
*DocumentWorkflowsApi* | [**deleteQueue**](docs/DocumentWorkflowsApi.md#deletequeue) | **DELETE** /queues/{queueId} | Delete queue
*DocumentWorkflowsApi* | [**deleteWorkflow**](docs/DocumentWorkflowsApi.md#deleteworkflow) | **DELETE** /workflows/{workflowId} | Delete workflow
*DocumentWorkflowsApi* | [**getDocumentWorkflow**](docs/DocumentWorkflowsApi.md#getdocumentworkflow) | **GET** /documents/{documentId}/workflows/{workflowId} | Get document workflow
*DocumentWorkflowsApi* | [**getDocumentWorkflows**](docs/DocumentWorkflowsApi.md#getdocumentworkflows) | **GET** /documents/{documentId}/workflows | Get document workflows
*DocumentWorkflowsApi* | [**getQueue**](docs/DocumentWorkflowsApi.md#getqueue) | **GET** /queues/{queueId} | Get queue
*DocumentWorkflowsApi* | [**getQueues**](docs/DocumentWorkflowsApi.md#getqueues) | **GET** /queues | Get queues
*DocumentWorkflowsApi* | [**getWorkflow**](docs/DocumentWorkflowsApi.md#getworkflow) | **GET** /workflows/{workflowId} | Get workflow
*DocumentWorkflowsApi* | [**getWorkflowDocuments**](docs/DocumentWorkflowsApi.md#getworkflowdocuments) | **GET** /workflows/{workflowId}/documents | Get list of documents in workflow
*DocumentWorkflowsApi* | [**getWorkflowQueueDocuments**](docs/DocumentWorkflowsApi.md#getworkflowqueuedocuments) | **GET** /queues/{queueId}/documents | Get list of documents in queue
*DocumentWorkflowsApi* | [**getWorkflows**](docs/DocumentWorkflowsApi.md#getworkflows) | **GET** /workflows | Get workflows
*DocumentWorkflowsApi* | [**setWorkflow**](docs/DocumentWorkflowsApi.md#setworkflow) | **PUT** /workflows/{workflowId} | Set workflow
*DocumentWorkflowsApi* | [**updateWorkflow**](docs/DocumentWorkflowsApi.md#updateworkflow) | **PATCH** /workflows/{workflowId} | Update workflow
*DocumentsApi* | [**addDocument**](docs/DocumentsApi.md#adddocument) | **POST** /documents | Add new document
*DocumentsApi* | [**addDocumentSync**](docs/DocumentsApi.md#adddocumentsync) | **POST** /documents/{documentId}/syncs | Add document sync to service
*DocumentsApi* | [**addDocumentUpload**](docs/DocumentsApi.md#adddocumentupload) | **POST** /documents/upload | Add large document
*DocumentsApi* | [**compressDocuments**](docs/DocumentsApi.md#compressdocuments) | **POST** /documents/compress | Compress multiple documents into a .zip file
*DocumentsApi* | [**deleteDocument**](docs/DocumentsApi.md#deletedocument) | **DELETE** /documents/{documentId} | Delete document
*DocumentsApi* | [**deleteDocumentCheckoutLegalHold**](docs/DocumentsApi.md#deletedocumentcheckoutlegalhold) | **DELETE** /documents/{documentId}/legalHold | Delete document legal hold checkout
*DocumentsApi* | [**deletePublishedDocumentContent**](docs/DocumentsApi.md#deletepublisheddocumentcontent) | **DELETE** /publications/{documentId} | Delete published document\&#39;s contents
*DocumentsApi* | [**getDocument**](docs/DocumentsApi.md#getdocument) | **GET** /documents/{documentId} | Get document
*DocumentsApi* | [**getDocumentContent**](docs/DocumentsApi.md#getdocumentcontent) | **GET** /documents/{documentId}/content | Get document\&#39;s contents
*DocumentsApi* | [**getDocumentIdUpload**](docs/DocumentsApi.md#getdocumentidupload) | **GET** /documents/{documentId}/upload | Get url to update large document
*DocumentsApi* | [**getDocumentSyncs**](docs/DocumentsApi.md#getdocumentsyncs) | **GET** /documents/{documentId}/syncs | Get document syncs
*DocumentsApi* | [**getDocumentUpload**](docs/DocumentsApi.md#getdocumentupload) | **GET** /documents/upload | Get url to add large document
*DocumentsApi* | [**getDocumentUrl**](docs/DocumentsApi.md#getdocumenturl) | **GET** /documents/{documentId}/url | Get document content url
*DocumentsApi* | [**getDocuments**](docs/DocumentsApi.md#getdocuments) | **GET** /documents | Get Documents listing
*DocumentsApi* | [**getPublishedDocumentContent**](docs/DocumentsApi.md#getpublisheddocumentcontent) | **GET** /publications/{documentId} | Get published document\&#39;s contents
*DocumentsApi* | [**purgeDocument**](docs/DocumentsApi.md#purgedocument) | **DELETE** /documents/{documentId}/purge | Purge document
*DocumentsApi* | [**setDocumentCheckout**](docs/DocumentsApi.md#setdocumentcheckout) | **PUT** /documents/{documentId}/checkout | Perform document checkout
*DocumentsApi* | [**setDocumentCheckoutLegalHold**](docs/DocumentsApi.md#setdocumentcheckoutlegalhold) | **PUT** /documents/{documentId}/legalHold | Perform document legal hold checkout
*DocumentsApi* | [**setDocumentRestore**](docs/DocumentsApi.md#setdocumentrestore) | **PUT** /documents/{documentId}/restore | Restore soft deleted document
*DocumentsApi* | [**updateDocument**](docs/DocumentsApi.md#updatedocument) | **PATCH** /documents/{documentId} | Update document
*ESignatureApi* | [**addDocusignEnvelopes**](docs/ESignatureApi.md#adddocusignenvelopes) | **POST** /esignature/docusign/{documentId}/envelopes | Create Docusign Envelope request
*ESignatureApi* | [**addDocusignRecipientView**](docs/ESignatureApi.md#adddocusignrecipientview) | **POST** /esignature/docusign/{documentId}/envelopes/{envelopeId}/views/recipient | Create Docusign Recipient View request
*ESignatureApi* | [**addEsignatureDocusignEvents**](docs/ESignatureApi.md#addesignaturedocusignevents) | **POST** /esignature/docusign/events | Add E-signature event
*EntityApi* | [**addEntity**](docs/EntityApi.md#addentity) | **POST** /entities/{entityTypeId} | Add New Entity
*EntityApi* | [**addEntityType**](docs/EntityApi.md#addentitytype) | **POST** /entityTypes | Add New EntityType
*EntityApi* | [**deleteEntity**](docs/EntityApi.md#deleteentity) | **DELETE** /entities/{entityTypeId}/{entityId} | Deletes Entity
*EntityApi* | [**deleteEntityType**](docs/EntityApi.md#deleteentitytype) | **DELETE** /entityTypes/{entityTypeId} | Deletes Entity Type
*EntityApi* | [**getEntities**](docs/EntityApi.md#getentities) | **GET** /entities/{entityTypeId} | Get Entities
*EntityApi* | [**getEntity**](docs/EntityApi.md#getentity) | **GET** /entities/{entityTypeId}/{entityId} | Get Entity
*EntityApi* | [**getEntityType**](docs/EntityApi.md#getentitytype) | **GET** /entityTypes/{entityTypeId} | Get EntityType
*EntityApi* | [**getEntityTypes**](docs/EntityApi.md#getentitytypes) | **GET** /entityTypes | Get EntityTypes
*EntityApi* | [**updateEntity**](docs/EntityApi.md#updateentity) | **PATCH** /entities/{entityTypeId}/{entityId} | Update Entity
*ExamineObjectsApi* | [**getExaminePdf**](docs/ExamineObjectsApi.md#getexaminepdf) | **GET** /objects/examine/{id}/pdf | Add Examine Pdf
*ExamineObjectsApi* | [**getExaminePdfUrl**](docs/ExamineObjectsApi.md#getexaminepdfurl) | **GET** /objects/examine/pdf | Add Examine Pdf
*GoogleIntegrationApi* | [**addGoogleDocumentExport**](docs/GoogleIntegrationApi.md#addgoogledocumentexport) | **POST** /integrations/google/drive/documents/{documentId}/export | Add Google Document Export
*MalwareScanApi* | [**getMalwareScanResults**](docs/MalwareScanApi.md#getmalwarescanresults) | **GET** /documents/{documentId}/malwareScan | Get Malware Scan results
*MalwareScanApi* | [**setAntivirus**](docs/MalwareScanApi.md#setantivirus) | **PUT** /documents/{documentId}/antivirus | Antivirus document scan
*MalwareScanApi* | [**setMalwareScan**](docs/MalwareScanApi.md#setmalwarescan) | **PUT** /documents/{documentId}/malwareScan | MalwareScan document scan
*MappingsApi* | [**addMapping**](docs/MappingsApi.md#addmapping) | **POST** /mappings | Add New Mapping
*MappingsApi* | [**deleteMapping**](docs/MappingsApi.md#deletemapping) | **DELETE** /mappings/{mappingId} | Delete Mapping
*MappingsApi* | [**getMapping**](docs/MappingsApi.md#getmapping) | **GET** /mappings/{mappingId} | Get Mapping
*MappingsApi* | [**getMappings**](docs/MappingsApi.md#getmappings) | **GET** /mappings | Get Mappings
*MappingsApi* | [**setMapping**](docs/MappingsApi.md#setmapping) | **PUT** /mappings/{mappingId} | Set Mapping
*PublicApi* | [**publicAddDocument**](docs/PublicApi.md#publicadddocument) | **POST** /public/documents | Public add document
*PublicApi* | [**publicAddWebhook**](docs/PublicApi.md#publicaddwebhook) | **POST** /public/webhooks/{webhooks+} | Public add webhook
*ReindexApi* | [**addReindexDocument**](docs/ReindexApi.md#addreindexdocument) | **POST** /reindex/documents/{documentId} | Reindex metadata on a document
*RulesetsApi* | [**addRule**](docs/RulesetsApi.md#addrule) | **POST** /rulesets/{rulesetId}/rules | Add New Rule
*RulesetsApi* | [**addRuleset**](docs/RulesetsApi.md#addruleset) | **POST** /rulesets | Add New Ruleset
*RulesetsApi* | [**deleteRule**](docs/RulesetsApi.md#deleterule) | **DELETE** /rulesets/{rulesetId}/rules/{ruleId} | Delete Rule
*RulesetsApi* | [**deleteRuleset**](docs/RulesetsApi.md#deleteruleset) | **DELETE** /rulesets/{rulesetId} | Delete Ruleset
*RulesetsApi* | [**getRule**](docs/RulesetsApi.md#getrule) | **GET** /rulesets/{rulesetId}/rules/{ruleId} | Get Rule
*RulesetsApi* | [**getRules**](docs/RulesetsApi.md#getrules) | **GET** /rulesets/{rulesetId}/rules | Get Rules
*RulesetsApi* | [**getRuleset**](docs/RulesetsApi.md#getruleset) | **GET** /rulesets/{rulesetId} | Get Ruleset
*RulesetsApi* | [**getRulesets**](docs/RulesetsApi.md#getrulesets) | **GET** /rulesets | Get Rulesets
*RulesetsApi* | [**updateRule**](docs/RulesetsApi.md#updaterule) | **PATCH** /rulesets/{rulesetId}/rules/{ruleId} | Update Rule
*RulesetsApi* | [**updateRuleset**](docs/RulesetsApi.md#updateruleset) | **PATCH** /rulesets/{rulesetId} | Update Ruleset
*SchemasApi* | [**addClassification**](docs/SchemasApi.md#addclassification) | **POST** /sites/{siteId}/classifications | Add Classification
*SchemasApi* | [**deleteClassification**](docs/SchemasApi.md#deleteclassification) | **DELETE** /sites/{siteId}/classifications/{classificationId} | Delete Classification
*SchemasApi* | [**getClassification**](docs/SchemasApi.md#getclassification) | **GET** /sites/{siteId}/classifications/{classificationId} | Get Classification
*SchemasApi* | [**getClassificationAttributeAllowedValues**](docs/SchemasApi.md#getclassificationattributeallowedvalues) | **GET** /sites/{siteId}/classifications/{classificationId}/attributes/{key}/allowedValues | Get Classification\&#39;s Attribute Allowed Values
*SchemasApi* | [**getSitesClassifications**](docs/SchemasApi.md#getsitesclassifications) | **GET** /sites/{siteId}/classifications | Get Sites Classifications
*SchemasApi* | [**getSitesSchema**](docs/SchemasApi.md#getsitesschema) | **GET** /sites/{siteId}/schema/document | Get Sites Schema
*SchemasApi* | [**getSitesSchemaAttributeAllowedValues**](docs/SchemasApi.md#getsitesschemaattributeallowedvalues) | **GET** /sites/{siteId}/schema/document/attributes/{key}/allowedValues | Get Attribute Allowed Values
*SchemasApi* | [**setClassification**](docs/SchemasApi.md#setclassification) | **PUT** /sites/{siteId}/classifications/{classificationId} | Set Classification
*SchemasApi* | [**setSitesSchema**](docs/SchemasApi.md#setsitesschema) | **PUT** /sites/{siteId}/schema/document | Set Sites Schema
*SystemManagementApi* | [**addApiKey**](docs/SystemManagementApi.md#addapikey) | **POST** /sites/{siteId}/apiKeys | Add API Key
*SystemManagementApi* | [**addLocale**](docs/SystemManagementApi.md#addlocale) | **POST** /sites/{siteId}/locales | Add Locale
*SystemManagementApi* | [**addLocaleResourceItem**](docs/SystemManagementApi.md#addlocaleresourceitem) | **POST** /sites/{siteId}/locales/{locale}/resourceItems | Add Locale Resource Item
*SystemManagementApi* | [**addOpenSearchRestoreSnapshot**](docs/SystemManagementApi.md#addopensearchrestoresnapshot) | **POST** /sites/{siteId}/opensearch/snapshots/{snapshotName}/restore | Add an OpenSearch Restore Snapshot
*SystemManagementApi* | [**addOpenSearchSnapshot**](docs/SystemManagementApi.md#addopensearchsnapshot) | **POST** /sites/{siteId}/opensearch/snapshots/{snapshotName} | Add an OpenSearch Snapshot
*SystemManagementApi* | [**addSite**](docs/SystemManagementApi.md#addsite) | **POST** /sites | Add Site
*SystemManagementApi* | [**deleteApiKey**](docs/SystemManagementApi.md#deleteapikey) | **DELETE** /sites/{siteId}/apiKeys/{apiKey} | Delete API Key
*SystemManagementApi* | [**deleteLocale**](docs/SystemManagementApi.md#deletelocale) | **DELETE** /sites/{siteId}/locales/{locale} | Delete Locale
*SystemManagementApi* | [**deleteLocaleResourceItem**](docs/SystemManagementApi.md#deletelocaleresourceitem) | **DELETE** /sites/{siteId}/locales/{locale}/resourceItems/{itemKey} | Delete Local Resource Item
*SystemManagementApi* | [**deleteOpenSearchIndex**](docs/SystemManagementApi.md#deleteopensearchindex) | **DELETE** /sites/{siteId}/opensearch/index | Deletes site(s) OpenSearch index
*SystemManagementApi* | [**deleteOpenSearchIndexByName**](docs/SystemManagementApi.md#deleteopensearchindexbyname) | **DELETE** /sites/global/opensearch/indices/{indexName} | Deletes OpenSearch index by name
*SystemManagementApi* | [**deleteOpenSearchRestoreSnapshot**](docs/SystemManagementApi.md#deleteopensearchrestoresnapshot) | **DELETE** /sites/{siteId}/opensearch/snapshots/{snapshotName}/restore | Deletes site(s) OpenSearch Restore Snapshot
*SystemManagementApi* | [**deleteOpenSearchSnapshot**](docs/SystemManagementApi.md#deleteopensearchsnapshot) | **DELETE** /sites/{siteId}/opensearch/snapshots/{snapshotName} | Deletes site(s) OpenSearch Snapshot
*SystemManagementApi* | [**deleteOpenSearchSnapshotRepository**](docs/SystemManagementApi.md#deleteopensearchsnapshotrepository) | **DELETE** /sites/{siteId}/opensearch/snapshotRepository | Deletes site(s) OpenSearch Snapshot Repository
*SystemManagementApi* | [**deleteSiteGroup**](docs/SystemManagementApi.md#deletesitegroup) | **DELETE** /sites/{siteId}/groups/{groupName} | Deletes Site Group and permissions
*SystemManagementApi* | [**getAllOpenSearchIndices**](docs/SystemManagementApi.md#getallopensearchindices) | **GET** /sites/global/opensearch/indices | Get all OpenSearch indices
*SystemManagementApi* | [**getApiKeys**](docs/SystemManagementApi.md#getapikeys) | **GET** /sites/{siteId}/apiKeys | Get API Keys
*SystemManagementApi* | [**getConfiguration**](docs/SystemManagementApi.md#getconfiguration) | **GET** /sites/{siteId}/configuration | Get site configuration
*SystemManagementApi* | [**getLocaleResourceItem**](docs/SystemManagementApi.md#getlocaleresourceitem) | **GET** /sites/{siteId}/locales/{locale}/resourceItems/{itemKey} | Get Resource Item by Locale
*SystemManagementApi* | [**getLocaleResourceItems**](docs/SystemManagementApi.md#getlocaleresourceitems) | **GET** /sites/{siteId}/locales/{locale}/resourceItems | Get Resource Items by Locale
*SystemManagementApi* | [**getLocales**](docs/SystemManagementApi.md#getlocales) | **GET** /sites/{siteId}/locales | Get Locales
*SystemManagementApi* | [**getOpenSearchIndex**](docs/SystemManagementApi.md#getopensearchindex) | **GET** /sites/{siteId}/opensearch/index | Get site(s) OpenSearch index settings
*SystemManagementApi* | [**getOpenSearchIndices**](docs/SystemManagementApi.md#getopensearchindices) | **GET** /sites/{siteId}/opensearch/indices | Get site(s) OpenSearch indices
*SystemManagementApi* | [**getOpenSearchSnapshot**](docs/SystemManagementApi.md#getopensearchsnapshot) | **GET** /sites/{siteId}/opensearch/snapshots/{snapshotName} | Get site(s) OpenSearch snapshot
*SystemManagementApi* | [**getOpenSearchSnapshotRepositories**](docs/SystemManagementApi.md#getopensearchsnapshotrepositories) | **GET** /sites/global/opensearch/snapshotRepositories | Get site(s) OpenSearch snapshot repositories
*SystemManagementApi* | [**getOpenSearchSnapshotRepository**](docs/SystemManagementApi.md#getopensearchsnapshotrepository) | **GET** /sites/{siteId}/opensearch/snapshotRepository | Get site(s) OpenSearch snapshot repository
*SystemManagementApi* | [**getOpenSearchSnapshots**](docs/SystemManagementApi.md#getopensearchsnapshots) | **GET** /sites/{siteId}/opensearch/snapshots | Get site(s) OpenSearch snapshots
*SystemManagementApi* | [**getSiteGroup**](docs/SystemManagementApi.md#getsitegroup) | **GET** /sites/{siteId}/groups/{groupName} | Get group and permissions belonging to site
*SystemManagementApi* | [**getSiteGroups**](docs/SystemManagementApi.md#getsitegroups) | **GET** /sites/{siteId}/groups | Get group(s) and permissions belonging to site
*SystemManagementApi* | [**getSites**](docs/SystemManagementApi.md#getsites) | **GET** /sites | Get site(s) access
*SystemManagementApi* | [**getVersion**](docs/SystemManagementApi.md#getversion) | **GET** /version | Get FormKiQ version
*SystemManagementApi* | [**setLocaleResourceItem**](docs/SystemManagementApi.md#setlocaleresourceitem) | **PUT** /sites/{siteId}/locales/{locale}/resourceItems/{itemKey} | Set Locale Resource Item
*SystemManagementApi* | [**setOpenSearchIndex**](docs/SystemManagementApi.md#setopensearchindex) | **PUT** /sites/{siteId}/opensearch/index | Set site(s) OpenSearch index settings
*SystemManagementApi* | [**setOpenSearchIndices**](docs/SystemManagementApi.md#setopensearchindices) | **PUT** /sites/{siteId}/opensearch/indices | Set site(s) OpenSearch index to use for a SiteId
*SystemManagementApi* | [**setSiteGroupPermissions**](docs/SystemManagementApi.md#setsitegrouppermissions) | **PUT** /sites/{siteId}/groups/{groupName}/permissions | Set Site\&#39;s Group Permissions
*SystemManagementApi* | [**updateConfiguration**](docs/SystemManagementApi.md#updateconfiguration) | **PATCH** /sites/{siteId}/configuration | Update site configuration
*SystemManagementApi* | [**updateSite**](docs/SystemManagementApi.md#updatesite) | **PATCH** /sites/{siteId} | Update Site
*TagIndexApi* | [**indexSearch**](docs/TagIndexApi.md#indexsearch) | **POST** /indices/search | 
*UserActivitiesApi* | [**getDocumentUserActivities**](docs/UserActivitiesApi.md#getdocumentuseractivities) | **GET** /documents/{documentId}/userActivities | Get user activities for a document
*UserActivitiesApi* | [**getResourceActivities**](docs/UserActivitiesApi.md#getresourceactivities) | **GET** /activities | Get resource activities
*UserActivitiesApi* | [**getUserActivities**](docs/UserActivitiesApi.md#getuseractivities) | **GET** /userActivities | Get user activities
*UserManagementApi* | [**addGroup**](docs/UserManagementApi.md#addgroup) | **POST** /groups | Add a group
*UserManagementApi* | [**addUser**](docs/UserManagementApi.md#adduser) | **POST** /users | Add User
*UserManagementApi* | [**addUserToGroup**](docs/UserManagementApi.md#addusertogroup) | **POST** /groups/{groupName}/users | Add User to a group
*UserManagementApi* | [**deleteGroup**](docs/UserManagementApi.md#deletegroup) | **DELETE** /groups/{groupName} | Delete Group
*UserManagementApi* | [**deleteUsername**](docs/UserManagementApi.md#deleteusername) | **DELETE** /users/{username} | Delete Username
*UserManagementApi* | [**getGroup**](docs/UserManagementApi.md#getgroup) | **GET** /groups/{groupName} | Get a user group
*UserManagementApi* | [**getGroups**](docs/UserManagementApi.md#getgroups) | **GET** /groups | Get list of user group(s)
*UserManagementApi* | [**getListOfUserGroups**](docs/UserManagementApi.md#getlistofusergroups) | **GET** /users/{username}/groups | Returns a list of group user belongs to
*UserManagementApi* | [**getUser**](docs/UserManagementApi.md#getuser) | **GET** /users/{username} | Get a user
*UserManagementApi* | [**getUsers**](docs/UserManagementApi.md#getusers) | **GET** /users | Get list of user(s)
*UserManagementApi* | [**getUsersInGroup**](docs/UserManagementApi.md#getusersingroup) | **GET** /groups/{groupName}/users | Get users in a group
*UserManagementApi* | [**removeUsernameFromGroup**](docs/UserManagementApi.md#removeusernamefromgroup) | **DELETE** /groups/{groupName}/users/{username} | Remove Username From Group
*UserManagementApi* | [**setUserOperation**](docs/UserManagementApi.md#setuseroperation) | **PUT** /users/{username}/{userOperation} | Set User Operation
*WebhooksApi* | [**addWebhook**](docs/WebhooksApi.md#addwebhook) | **POST** /webhooks | Add webhook
*WebhooksApi* | [**addWebhookDocument**](docs/WebhooksApi.md#addwebhookdocument) | **POST** /private/webhooks/{webhooks+} | Add webhook
*WebhooksApi* | [**addWebhookTag**](docs/WebhooksApi.md#addwebhooktag) | **POST** /webhooks/{webhookId}/tags | Add webhook tag
*WebhooksApi* | [**deleteWebhook**](docs/WebhooksApi.md#deletewebhook) | **DELETE** /webhooks/{webhookId} | Delete webhook
*WebhooksApi* | [**getWebhook**](docs/WebhooksApi.md#getwebhook) | **GET** /webhooks/{webhookId} | Get webhook
*WebhooksApi* | [**getWebhookTags**](docs/WebhooksApi.md#getwebhooktags) | **GET** /webhooks/{webhookId}/tags | Get webhook tags
*WebhooksApi* | [**getWebhooks**](docs/WebhooksApi.md#getwebhooks) | **GET** /webhooks | Get webhooks
*WebhooksApi* | [**updateWebhook**](docs/WebhooksApi.md#updatewebhook) | **PATCH** /webhooks/{webhookId} | Update webhook


### Documentation For Models

 - [Activity](docs/Activity.md)
 - [ActivityStatus](docs/ActivityStatus.md)
 - [AddAction](docs/AddAction.md)
 - [AddActionParameters](docs/AddActionParameters.md)
 - [AddApiKeyRequest](docs/AddApiKeyRequest.md)
 - [AddApiKeyResponse](docs/AddApiKeyResponse.md)
 - [AddAttribute](docs/AddAttribute.md)
 - [AddAttributeRequest](docs/AddAttributeRequest.md)
 - [AddAttributeSchemaOptional](docs/AddAttributeSchemaOptional.md)
 - [AddAttributeSchemaRequired](docs/AddAttributeSchemaRequired.md)
 - [AddCase](docs/AddCase.md)
 - [AddCaseRequest](docs/AddCaseRequest.md)
 - [AddCaseResponse](docs/AddCaseResponse.md)
 - [AddChildDocument](docs/AddChildDocument.md)
 - [AddChildDocumentResponse](docs/AddChildDocumentResponse.md)
 - [AddClassification](docs/AddClassification.md)
 - [AddClassificationRequest](docs/AddClassificationRequest.md)
 - [AddClassificationResponse](docs/AddClassificationResponse.md)
 - [AddDocumentActionsRequest](docs/AddDocumentActionsRequest.md)
 - [AddDocumentActionsResponse](docs/AddDocumentActionsResponse.md)
 - [AddDocumentActionsRetryResponse](docs/AddDocumentActionsRetryResponse.md)
 - [AddDocumentAttribute](docs/AddDocumentAttribute.md)
 - [AddDocumentAttributeClassification](docs/AddDocumentAttributeClassification.md)
 - [AddDocumentAttributeEntity](docs/AddDocumentAttributeEntity.md)
 - [AddDocumentAttributeRelationship](docs/AddDocumentAttributeRelationship.md)
 - [AddDocumentAttributeStandard](docs/AddDocumentAttributeStandard.md)
 - [AddDocumentAttributeValue](docs/AddDocumentAttributeValue.md)
 - [AddDocumentAttributesRequest](docs/AddDocumentAttributesRequest.md)
 - [AddDocumentFulltextRequest](docs/AddDocumentFulltextRequest.md)
 - [AddDocumentFulltextResponse](docs/AddDocumentFulltextResponse.md)
 - [AddDocumentGenerateRequest](docs/AddDocumentGenerateRequest.md)
 - [AddDocumentGenerateResponse](docs/AddDocumentGenerateResponse.md)
 - [AddDocumentMetadata](docs/AddDocumentMetadata.md)
 - [AddDocumentOcrRequest](docs/AddDocumentOcrRequest.md)
 - [AddDocumentOcrResponse](docs/AddDocumentOcrResponse.md)
 - [AddDocumentRequest](docs/AddDocumentRequest.md)
 - [AddDocumentResponse](docs/AddDocumentResponse.md)
 - [AddDocumentSync](docs/AddDocumentSync.md)
 - [AddDocumentSyncRequest](docs/AddDocumentSyncRequest.md)
 - [AddDocumentSyncService](docs/AddDocumentSyncService.md)
 - [AddDocumentTag](docs/AddDocumentTag.md)
 - [AddDocumentTagsRequest](docs/AddDocumentTagsRequest.md)
 - [AddDocumentUploadRequest](docs/AddDocumentUploadRequest.md)
 - [AddDocumentWorkflowDecisionsRequest](docs/AddDocumentWorkflowDecisionsRequest.md)
 - [AddDocumentWorkflowDecisionsResponse](docs/AddDocumentWorkflowDecisionsResponse.md)
 - [AddDocumentWorkflowRequest](docs/AddDocumentWorkflowRequest.md)
 - [AddDocumentWorkflowResponse](docs/AddDocumentWorkflowResponse.md)
 - [AddDocusignEnvelopesRequest](docs/AddDocusignEnvelopesRequest.md)
 - [AddDocusignEnvelopesResponse](docs/AddDocusignEnvelopesResponse.md)
 - [AddDocusignRecipientViewRequest](docs/AddDocusignRecipientViewRequest.md)
 - [AddDocusignRecipientViewResponse](docs/AddDocusignRecipientViewResponse.md)
 - [AddEntity](docs/AddEntity.md)
 - [AddEntityAttribute](docs/AddEntityAttribute.md)
 - [AddEntityRequest](docs/AddEntityRequest.md)
 - [AddEntityResponse](docs/AddEntityResponse.md)
 - [AddEntityType](docs/AddEntityType.md)
 - [AddEntityTypeRequest](docs/AddEntityTypeRequest.md)
 - [AddEntityTypeResponse](docs/AddEntityTypeResponse.md)
 - [AddFolderPermission](docs/AddFolderPermission.md)
 - [AddFolderRequest](docs/AddFolderRequest.md)
 - [AddFolderResponse](docs/AddFolderResponse.md)
 - [AddFolderShareRequest](docs/AddFolderShareRequest.md)
 - [AddFolderShareResponse](docs/AddFolderShareResponse.md)
 - [AddGoogleDocumentExportRequest](docs/AddGoogleDocumentExportRequest.md)
 - [AddGoogleDocumentExportResponse](docs/AddGoogleDocumentExportResponse.md)
 - [AddGroup](docs/AddGroup.md)
 - [AddGroupRequest](docs/AddGroupRequest.md)
 - [AddLocaleRequest](docs/AddLocaleRequest.md)
 - [AddLocaleResourceClassificationItem](docs/AddLocaleResourceClassificationItem.md)
 - [AddLocaleResourceInterfaceItem](docs/AddLocaleResourceInterfaceItem.md)
 - [AddLocaleResourceItemRequest](docs/AddLocaleResourceItemRequest.md)
 - [AddLocaleResourceItemResponse](docs/AddLocaleResourceItemResponse.md)
 - [AddLocaleResourceSchemaItem](docs/AddLocaleResourceSchemaItem.md)
 - [AddMapping](docs/AddMapping.md)
 - [AddMappingRequest](docs/AddMappingRequest.md)
 - [AddMappingResponse](docs/AddMappingResponse.md)
 - [AddNigo](docs/AddNigo.md)
 - [AddNigoRequest](docs/AddNigoRequest.md)
 - [AddNigoResponse](docs/AddNigoResponse.md)
 - [AddQueueRequest](docs/AddQueueRequest.md)
 - [AddQueueResponse](docs/AddQueueResponse.md)
 - [AddReindexDocumentRequest](docs/AddReindexDocumentRequest.md)
 - [AddResourceItem](docs/AddResourceItem.md)
 - [AddResponse](docs/AddResponse.md)
 - [AddRule](docs/AddRule.md)
 - [AddRuleRequest](docs/AddRuleRequest.md)
 - [AddRuleResponse](docs/AddRuleResponse.md)
 - [AddRuleset](docs/AddRuleset.md)
 - [AddRulesetRequest](docs/AddRulesetRequest.md)
 - [AddRulesetResponse](docs/AddRulesetResponse.md)
 - [AddShare](docs/AddShare.md)
 - [AddSite](docs/AddSite.md)
 - [AddSiteRequest](docs/AddSiteRequest.md)
 - [AddTask](docs/AddTask.md)
 - [AddTaskRequest](docs/AddTaskRequest.md)
 - [AddTaskResponse](docs/AddTaskResponse.md)
 - [AddUser](docs/AddUser.md)
 - [AddUserRequest](docs/AddUserRequest.md)
 - [AddWebhookRequest](docs/AddWebhookRequest.md)
 - [AddWebhookResponse](docs/AddWebhookResponse.md)
 - [AddWebhookTagRequest](docs/AddWebhookTagRequest.md)
 - [AddWorkflowRequest](docs/AddWorkflowRequest.md)
 - [AddWorkflowResponse](docs/AddWorkflowResponse.md)
 - [AddWorkflowStep](docs/AddWorkflowStep.md)
 - [AddWorkflowStepDecision](docs/AddWorkflowStepDecision.md)
 - [AddWorkflowStepQueue](docs/AddWorkflowStepQueue.md)
 - [ApiKey](docs/ApiKey.md)
 - [Attribute](docs/Attribute.md)
 - [AttributeDataType](docs/AttributeDataType.md)
 - [AttributeSchemaCompositeKey](docs/AttributeSchemaCompositeKey.md)
 - [AttributeSchemaOptional](docs/AttributeSchemaOptional.md)
 - [AttributeSchemaRequired](docs/AttributeSchemaRequired.md)
 - [AttributeType](docs/AttributeType.md)
 - [AttributeValueType](docs/AttributeValueType.md)
 - [Case](docs/Case.md)
 - [CaseStatus](docs/CaseStatus.md)
 - [ChecksumType](docs/ChecksumType.md)
 - [ChildDocument](docs/ChildDocument.md)
 - [Classification](docs/Classification.md)
 - [ClassificationSummary](docs/ClassificationSummary.md)
 - [DataClassification](docs/DataClassification.md)
 - [DataClassificationAttribute](docs/DataClassificationAttribute.md)
 - [DeleteApiKeyResponse](docs/DeleteApiKeyResponse.md)
 - [DeleteCaseDocumentResponse](docs/DeleteCaseDocumentResponse.md)
 - [DeleteCaseNigoDocumentResponse](docs/DeleteCaseNigoDocumentResponse.md)
 - [DeleteCaseNigoResponse](docs/DeleteCaseNigoResponse.md)
 - [DeleteCaseResponse](docs/DeleteCaseResponse.md)
 - [DeleteCaseTaskDocumentResponse](docs/DeleteCaseTaskDocumentResponse.md)
 - [DeleteCaseTaskResponse](docs/DeleteCaseTaskResponse.md)
 - [DeleteFolderResponse](docs/DeleteFolderResponse.md)
 - [DeleteFulltextResponse](docs/DeleteFulltextResponse.md)
 - [DeleteIndicesResponse](docs/DeleteIndicesResponse.md)
 - [DeleteQueueResponse](docs/DeleteQueueResponse.md)
 - [DeleteResponse](docs/DeleteResponse.md)
 - [DeleteRuleResponse](docs/DeleteRuleResponse.md)
 - [DeleteRulesetResponse](docs/DeleteRulesetResponse.md)
 - [DeleteShareResponse](docs/DeleteShareResponse.md)
 - [DeleteWorkflowResponse](docs/DeleteWorkflowResponse.md)
 - [Document](docs/Document.md)
 - [DocumentAction](docs/DocumentAction.md)
 - [DocumentActionStatus](docs/DocumentActionStatus.md)
 - [DocumentActionType](docs/DocumentActionType.md)
 - [DocumentAttribute](docs/DocumentAttribute.md)
 - [DocumentFulltextAttribute](docs/DocumentFulltextAttribute.md)
 - [DocumentFulltextAttributeEq](docs/DocumentFulltextAttributeEq.md)
 - [DocumentFulltextRequest](docs/DocumentFulltextRequest.md)
 - [DocumentFulltextResponse](docs/DocumentFulltextResponse.md)
 - [DocumentFulltextSearch](docs/DocumentFulltextSearch.md)
 - [DocumentFulltextTag](docs/DocumentFulltextTag.md)
 - [DocumentGenerateDataSource](docs/DocumentGenerateDataSource.md)
 - [DocumentGenerateInsertDocument](docs/DocumentGenerateInsertDocument.md)
 - [DocumentGenerateInsertDocumentPosition](docs/DocumentGenerateInsertDocumentPosition.md)
 - [DocumentGenerateOutputType](docs/DocumentGenerateOutputType.md)
 - [DocumentId](docs/DocumentId.md)
 - [DocumentMetadata](docs/DocumentMetadata.md)
 - [DocumentRelationshipType](docs/DocumentRelationshipType.md)
 - [DocumentSearch](docs/DocumentSearch.md)
 - [DocumentSearchAttribute](docs/DocumentSearchAttribute.md)
 - [DocumentSearchMatchAttribute](docs/DocumentSearchMatchAttribute.md)
 - [DocumentSearchMatchTag](docs/DocumentSearchMatchTag.md)
 - [DocumentSearchMeta](docs/DocumentSearchMeta.md)
 - [DocumentSearchRange](docs/DocumentSearchRange.md)
 - [DocumentSearchRequest](docs/DocumentSearchRequest.md)
 - [DocumentSearchResponse](docs/DocumentSearchResponse.md)
 - [DocumentSearchTag](docs/DocumentSearchTag.md)
 - [DocumentSearchTags](docs/DocumentSearchTags.md)
 - [DocumentSync](docs/DocumentSync.md)
 - [DocumentSyncService](docs/DocumentSyncService.md)
 - [DocumentSyncStatus](docs/DocumentSyncStatus.md)
 - [DocumentSyncType](docs/DocumentSyncType.md)
 - [DocumentTag](docs/DocumentTag.md)
 - [DocumentVersion](docs/DocumentVersion.md)
 - [DocumentWorkflow](docs/DocumentWorkflow.md)
 - [DocumentWorkflowStatus](docs/DocumentWorkflowStatus.md)
 - [DocumentsCompressRequest](docs/DocumentsCompressRequest.md)
 - [DocumentsCompressResponse](docs/DocumentsCompressResponse.md)
 - [DocusignConfig](docs/DocusignConfig.md)
 - [DocusignEnvironment](docs/DocusignEnvironment.md)
 - [DocusignInpersonSigner](docs/DocusignInpersonSigner.md)
 - [DocusignNotification](docs/DocusignNotification.md)
 - [DocusignNotificationExpirations](docs/DocusignNotificationExpirations.md)
 - [DocusignNotificationReminders](docs/DocusignNotificationReminders.md)
 - [DocusignRecipientView](docs/DocusignRecipientView.md)
 - [DocusignSignHereTabs](docs/DocusignSignHereTabs.md)
 - [DocusignSigner](docs/DocusignSigner.md)
 - [DocusignSigningTabs](docs/DocusignSigningTabs.md)
 - [Entity](docs/Entity.md)
 - [EntityAttribute](docs/EntityAttribute.md)
 - [EntityType](docs/EntityType.md)
 - [EntityTypeNamespace](docs/EntityTypeNamespace.md)
 - [ErrorsResponse](docs/ErrorsResponse.md)
 - [FolderPermission](docs/FolderPermission.md)
 - [FolderPermissionType](docs/FolderPermissionType.md)
 - [FulltextAttribute](docs/FulltextAttribute.md)
 - [FulltextSearchItem](docs/FulltextSearchItem.md)
 - [GetActivitesResponse](docs/GetActivitesResponse.md)
 - [GetApiKeysResponse](docs/GetApiKeysResponse.md)
 - [GetAttributeAllowedValuesResponse](docs/GetAttributeAllowedValuesResponse.md)
 - [GetAttributeResponse](docs/GetAttributeResponse.md)
 - [GetAttributesResponse](docs/GetAttributesResponse.md)
 - [GetCaseDocumentsResponse](docs/GetCaseDocumentsResponse.md)
 - [GetCaseNigoResponse](docs/GetCaseNigoResponse.md)
 - [GetCaseNigosResponse](docs/GetCaseNigosResponse.md)
 - [GetCaseResponse](docs/GetCaseResponse.md)
 - [GetCaseTaskResponse](docs/GetCaseTaskResponse.md)
 - [GetCaseTasksResponse](docs/GetCaseTasksResponse.md)
 - [GetCasesResponse](docs/GetCasesResponse.md)
 - [GetClassificationResponse](docs/GetClassificationResponse.md)
 - [GetClassificationsResponse](docs/GetClassificationsResponse.md)
 - [GetConfigurationResponse](docs/GetConfigurationResponse.md)
 - [GetDocumentActionsResponse](docs/GetDocumentActionsResponse.md)
 - [GetDocumentAttributeResponse](docs/GetDocumentAttributeResponse.md)
 - [GetDocumentAttributesResponse](docs/GetDocumentAttributesResponse.md)
 - [GetDocumentContentResponse](docs/GetDocumentContentResponse.md)
 - [GetDocumentDataClassificationResponse](docs/GetDocumentDataClassificationResponse.md)
 - [GetDocumentFulltextResponse](docs/GetDocumentFulltextResponse.md)
 - [GetDocumentOcrResponse](docs/GetDocumentOcrResponse.md)
 - [GetDocumentResponse](docs/GetDocumentResponse.md)
 - [GetDocumentSyncResponse](docs/GetDocumentSyncResponse.md)
 - [GetDocumentTagResponse](docs/GetDocumentTagResponse.md)
 - [GetDocumentTagsResponse](docs/GetDocumentTagsResponse.md)
 - [GetDocumentUrlResponse](docs/GetDocumentUrlResponse.md)
 - [GetDocumentVersionsResponse](docs/GetDocumentVersionsResponse.md)
 - [GetDocumentWorkflowResponse](docs/GetDocumentWorkflowResponse.md)
 - [GetDocumentWorkflowsResponse](docs/GetDocumentWorkflowsResponse.md)
 - [GetDocumentsResponse](docs/GetDocumentsResponse.md)
 - [GetEntitiesResponse](docs/GetEntitiesResponse.md)
 - [GetEntityResponse](docs/GetEntityResponse.md)
 - [GetEntityTypeResponse](docs/GetEntityTypeResponse.md)
 - [GetEntityTypesResponse](docs/GetEntityTypesResponse.md)
 - [GetExaminePdfResponse](docs/GetExaminePdfResponse.md)
 - [GetExaminePdfUrlResponse](docs/GetExaminePdfUrlResponse.md)
 - [GetFolderPermissionsResponse](docs/GetFolderPermissionsResponse.md)
 - [GetFoldersResponse](docs/GetFoldersResponse.md)
 - [GetGroupResponse](docs/GetGroupResponse.md)
 - [GetGroupsResponse](docs/GetGroupsResponse.md)
 - [GetLocaleResourceItemResponse](docs/GetLocaleResourceItemResponse.md)
 - [GetLocaleResourceItemsResponse](docs/GetLocaleResourceItemsResponse.md)
 - [GetLocalesResponse](docs/GetLocalesResponse.md)
 - [GetMalwareScanResponse](docs/GetMalwareScanResponse.md)
 - [GetMappingResponse](docs/GetMappingResponse.md)
 - [GetMappingsResponse](docs/GetMappingsResponse.md)
 - [GetOpaAccessPoliciesResponse](docs/GetOpaAccessPoliciesResponse.md)
 - [GetOpaAccessPolicyItemsResponse](docs/GetOpaAccessPolicyItemsResponse.md)
 - [GetOpaAccessPolicyResponse](docs/GetOpaAccessPolicyResponse.md)
 - [GetOpenSearchIndexResponse](docs/GetOpenSearchIndexResponse.md)
 - [GetOpenSearchIndiceResponse](docs/GetOpenSearchIndiceResponse.md)
 - [GetOpenSearchSnapshotRepositoryResponse](docs/GetOpenSearchSnapshotRepositoryResponse.md)
 - [GetOpenSearchSnapshotResponse](docs/GetOpenSearchSnapshotResponse.md)
 - [GetQueueResponse](docs/GetQueueResponse.md)
 - [GetQueuesResponse](docs/GetQueuesResponse.md)
 - [GetRuleResponse](docs/GetRuleResponse.md)
 - [GetRulesResponse](docs/GetRulesResponse.md)
 - [GetRulesetResponse](docs/GetRulesetResponse.md)
 - [GetRulesetsResponse](docs/GetRulesetsResponse.md)
 - [GetSiteGroupResponse](docs/GetSiteGroupResponse.md)
 - [GetSiteGroupsResponse](docs/GetSiteGroupsResponse.md)
 - [GetSitesResponse](docs/GetSitesResponse.md)
 - [GetSitesSchemaResponse](docs/GetSitesSchemaResponse.md)
 - [GetUserActivitesResponse](docs/GetUserActivitesResponse.md)
 - [GetUserGroupsResponse](docs/GetUserGroupsResponse.md)
 - [GetUserResponse](docs/GetUserResponse.md)
 - [GetUserSharesResponse](docs/GetUserSharesResponse.md)
 - [GetUsersInGroupResponse](docs/GetUsersInGroupResponse.md)
 - [GetUsersResponse](docs/GetUsersResponse.md)
 - [GetVersionResponse](docs/GetVersionResponse.md)
 - [GetWebhookResponse](docs/GetWebhookResponse.md)
 - [GetWebhookTagsResponse](docs/GetWebhookTagsResponse.md)
 - [GetWebhooksResponse](docs/GetWebhooksResponse.md)
 - [GetWorkflowDocumentsResponse](docs/GetWorkflowDocumentsResponse.md)
 - [GetWorkflowQueueDocumentsResponse](docs/GetWorkflowQueueDocumentsResponse.md)
 - [GetWorkflowResponse](docs/GetWorkflowResponse.md)
 - [GetWorkflowsResponse](docs/GetWorkflowsResponse.md)
 - [GoogleConfig](docs/GoogleConfig.md)
 - [GoogleExportOutputType](docs/GoogleExportOutputType.md)
 - [Group](docs/Group.md)
 - [IndexFolderMoveRequest](docs/IndexFolderMoveRequest.md)
 - [IndexFolderMoveResponse](docs/IndexFolderMoveResponse.md)
 - [IndexSearch](docs/IndexSearch.md)
 - [IndexSearchRequest](docs/IndexSearchRequest.md)
 - [IndexSearchResponse](docs/IndexSearchResponse.md)
 - [LocaleInfo](docs/LocaleInfo.md)
 - [LocaleResourceType](docs/LocaleResourceType.md)
 - [MalwareEngine](docs/MalwareEngine.md)
 - [MalwareScanResult](docs/MalwareScanResult.md)
 - [MalwareScanStatus](docs/MalwareScanStatus.md)
 - [Mapping](docs/Mapping.md)
 - [MappingAttribute](docs/MappingAttribute.md)
 - [MappingAttributeLabelMatchingType](docs/MappingAttributeLabelMatchingType.md)
 - [MappingAttributeMetadataField](docs/MappingAttributeMetadataField.md)
 - [MappingAttributeSourceType](docs/MappingAttributeSourceType.md)
 - [MatchDocumentTag](docs/MatchDocumentTag.md)
 - [ModelError](docs/ModelError.md)
 - [Nigo](docs/Nigo.md)
 - [NigoStatus](docs/NigoStatus.md)
 - [OcrConfig](docs/OcrConfig.md)
 - [OcrEngine](docs/OcrEngine.md)
 - [OcrKeyValues](docs/OcrKeyValues.md)
 - [OcrOutputType](docs/OcrOutputType.md)
 - [OcrTable](docs/OcrTable.md)
 - [OcrTableData](docs/OcrTableData.md)
 - [OpaPolicy](docs/OpaPolicy.md)
 - [OpaPolicyAttribute](docs/OpaPolicyAttribute.md)
 - [OpaPolicyAttributeEq](docs/OpaPolicyAttributeEq.md)
 - [OpaPolicyAttributeGt](docs/OpaPolicyAttributeGt.md)
 - [OpaPolicyAttributeGte](docs/OpaPolicyAttributeGte.md)
 - [OpaPolicyAttributeIn](docs/OpaPolicyAttributeIn.md)
 - [OpaPolicyAttributeInput](docs/OpaPolicyAttributeInput.md)
 - [OpaPolicyAttributeLt](docs/OpaPolicyAttributeLt.md)
 - [OpaPolicyAttributeLte](docs/OpaPolicyAttributeLte.md)
 - [OpaPolicyAttributeNeq](docs/OpaPolicyAttributeNeq.md)
 - [OpaPolicyAttributeNotIn](docs/OpaPolicyAttributeNotIn.md)
 - [OpaPolicyInput](docs/OpaPolicyInput.md)
 - [OpaPolicyInputMethod](docs/OpaPolicyInputMethod.md)
 - [OpaPolicyInputResource](docs/OpaPolicyInputResource.md)
 - [OpaPolicyItem](docs/OpaPolicyItem.md)
 - [OpenSearchAlias](docs/OpenSearchAlias.md)
 - [OpenSearchIndex](docs/OpenSearchIndex.md)
 - [OpenSearchIndexSetting](docs/OpenSearchIndexSetting.md)
 - [OpenSearchS3Repository](docs/OpenSearchS3Repository.md)
 - [OpenSearchSnapshot](docs/OpenSearchSnapshot.md)
 - [OpenSearchSnapshotFailure](docs/OpenSearchSnapshotFailure.md)
 - [OpenSearchSnapshotShard](docs/OpenSearchSnapshotShard.md)
 - [PdfDocument](docs/PdfDocument.md)
 - [PdfDocumentField](docs/PdfDocumentField.md)
 - [QueryFulltextResponse](docs/QueryFulltextResponse.md)
 - [Queue](docs/Queue.md)
 - [ReindexTarget](docs/ReindexTarget.md)
 - [ResourceItem](docs/ResourceItem.md)
 - [Rule](docs/Rule.md)
 - [RuleCondition](docs/RuleCondition.md)
 - [RuleConditionAttribute](docs/RuleConditionAttribute.md)
 - [RuleConditionCriterion](docs/RuleConditionCriterion.md)
 - [RuleConditionMust](docs/RuleConditionMust.md)
 - [RuleConditionOperation](docs/RuleConditionOperation.md)
 - [Ruleset](docs/Ruleset.md)
 - [RulesetStatus](docs/RulesetStatus.md)
 - [SchemaAttributes](docs/SchemaAttributes.md)
 - [SearchRangeDataType](docs/SearchRangeDataType.md)
 - [SearchResponseFields](docs/SearchResponseFields.md)
 - [SearchResultDocument](docs/SearchResultDocument.md)
 - [SearchResultDocumentAttribute](docs/SearchResultDocumentAttribute.md)
 - [SetClassificationRequest](docs/SetClassificationRequest.md)
 - [SetDocumentAttributeRequest](docs/SetDocumentAttributeRequest.md)
 - [SetDocumentAttributesRequest](docs/SetDocumentAttributesRequest.md)
 - [SetDocumentDataClassificationRequest](docs/SetDocumentDataClassificationRequest.md)
 - [SetDocumentDataClassificationResponse](docs/SetDocumentDataClassificationResponse.md)
 - [SetDocumentFulltextRequest](docs/SetDocumentFulltextRequest.md)
 - [SetDocumentFulltextResponse](docs/SetDocumentFulltextResponse.md)
 - [SetDocumentOcrRequest](docs/SetDocumentOcrRequest.md)
 - [SetDocumentRestoreResponse](docs/SetDocumentRestoreResponse.md)
 - [SetDocumentTagKeyRequest](docs/SetDocumentTagKeyRequest.md)
 - [SetDocumentVersionRequest](docs/SetDocumentVersionRequest.md)
 - [SetDocumentVersionResponse](docs/SetDocumentVersionResponse.md)
 - [SetFolderPermissionsRequest](docs/SetFolderPermissionsRequest.md)
 - [SetGroupPermissionsRequest](docs/SetGroupPermissionsRequest.md)
 - [SetLocaleResourceItemRequest](docs/SetLocaleResourceItemRequest.md)
 - [SetMappingRequest](docs/SetMappingRequest.md)
 - [SetOpaAccessPolicyItemsRequest](docs/SetOpaAccessPolicyItemsRequest.md)
 - [SetOpenSearchIndexRequest](docs/SetOpenSearchIndexRequest.md)
 - [SetOpenSearchIndexResponse](docs/SetOpenSearchIndexResponse.md)
 - [SetOpenSearchIndiceRequest](docs/SetOpenSearchIndiceRequest.md)
 - [SetResponse](docs/SetResponse.md)
 - [SetSchemaAttributes](docs/SetSchemaAttributes.md)
 - [SetSitesSchemaRequest](docs/SetSitesSchemaRequest.md)
 - [SetWorkflowRequest](docs/SetWorkflowRequest.md)
 - [SetWorkflowResponse](docs/SetWorkflowResponse.md)
 - [Site](docs/Site.md)
 - [SiteConfig](docs/SiteConfig.md)
 - [SiteGroup](docs/SiteGroup.md)
 - [SiteGroupPermissions](docs/SiteGroupPermissions.md)
 - [SiteStatus](docs/SiteStatus.md)
 - [SiteUsage](docs/SiteUsage.md)
 - [StringFormat](docs/StringFormat.md)
 - [StringGeneratorType](docs/StringGeneratorType.md)
 - [Task](docs/Task.md)
 - [TaskStatus](docs/TaskStatus.md)
 - [TextractQuery](docs/TextractQuery.md)
 - [UpdateAttribute](docs/UpdateAttribute.md)
 - [UpdateAttributeRequest](docs/UpdateAttributeRequest.md)
 - [UpdateCase](docs/UpdateCase.md)
 - [UpdateCaseRequest](docs/UpdateCaseRequest.md)
 - [UpdateCaseResponse](docs/UpdateCaseResponse.md)
 - [UpdateConfigurationRequest](docs/UpdateConfigurationRequest.md)
 - [UpdateConfigurationResponse](docs/UpdateConfigurationResponse.md)
 - [UpdateDocumentFulltextRequest](docs/UpdateDocumentFulltextRequest.md)
 - [UpdateDocumentFulltextResponse](docs/UpdateDocumentFulltextResponse.md)
 - [UpdateDocumentRequest](docs/UpdateDocumentRequest.md)
 - [UpdateEntityRequest](docs/UpdateEntityRequest.md)
 - [UpdateMatchingDocumentTagsRequest](docs/UpdateMatchingDocumentTagsRequest.md)
 - [UpdateMatchingDocumentTagsRequestMatch](docs/UpdateMatchingDocumentTagsRequestMatch.md)
 - [UpdateMatchingDocumentTagsRequestUpdate](docs/UpdateMatchingDocumentTagsRequestUpdate.md)
 - [UpdateMatchingDocumentTagsResponse](docs/UpdateMatchingDocumentTagsResponse.md)
 - [UpdateNigo](docs/UpdateNigo.md)
 - [UpdateNigoRequest](docs/UpdateNigoRequest.md)
 - [UpdateNigoResponse](docs/UpdateNigoResponse.md)
 - [UpdateResponse](docs/UpdateResponse.md)
 - [UpdateRule](docs/UpdateRule.md)
 - [UpdateRuleRequest](docs/UpdateRuleRequest.md)
 - [UpdateRuleResponse](docs/UpdateRuleResponse.md)
 - [UpdateRuleset](docs/UpdateRuleset.md)
 - [UpdateRulesetRequest](docs/UpdateRulesetRequest.md)
 - [UpdateRulesetResponse](docs/UpdateRulesetResponse.md)
 - [UpdateSite](docs/UpdateSite.md)
 - [UpdateSiteRequest](docs/UpdateSiteRequest.md)
 - [UpdateTask](docs/UpdateTask.md)
 - [UpdateTaskRequest](docs/UpdateTaskRequest.md)
 - [UpdateTaskResponse](docs/UpdateTaskResponse.md)
 - [UpdateWorkflowRequest](docs/UpdateWorkflowRequest.md)
 - [UpdateWorkflowResponse](docs/UpdateWorkflowResponse.md)
 - [User](docs/User.md)
 - [UserActivity](docs/UserActivity.md)
 - [UserActivityChanges](docs/UserActivityChanges.md)
 - [UserActivityType](docs/UserActivityType.md)
 - [UserAttributes](docs/UserAttributes.md)
 - [UserShare](docs/UserShare.md)
 - [UserSharePermission](docs/UserSharePermission.md)
 - [UserSharePermissionType](docs/UserSharePermissionType.md)
 - [ValidationError](docs/ValidationError.md)
 - [ValidationErrorsResponse](docs/ValidationErrorsResponse.md)
 - [Watermark](docs/Watermark.md)
 - [WatermarkPosition](docs/WatermarkPosition.md)
 - [WatermarkPositionXAnchor](docs/WatermarkPositionXAnchor.md)
 - [WatermarkPositionYAnchor](docs/WatermarkPositionYAnchor.md)
 - [WatermarkScale](docs/WatermarkScale.md)
 - [WebhookTag](docs/WebhookTag.md)
 - [WorkflowDocument](docs/WorkflowDocument.md)
 - [WorkflowQueue](docs/WorkflowQueue.md)
 - [WorkflowStatus](docs/WorkflowStatus.md)
 - [WorkflowStep](docs/WorkflowStep.md)
 - [WorkflowStepDecision](docs/WorkflowStepDecision.md)
 - [WorkflowStepDecisionType](docs/WorkflowStepDecisionType.md)
 - [WorkflowSummary](docs/WorkflowSummary.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization

Endpoints do not require authorization.

