## FormKiQ Client SDK - TypeScript

The FormKiQ TypeScript client utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

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


### How to Run Example

1. Install and build the generated client (one-time):
   ```
   npm install axios @formkiq/client-sdk-typescript
   ```
2. Set your environment for the API call (replace with your values):
   ```
   export FORMKIQ_API_URL="https://<your-formkiq-api-url>"
   export JWT="<your-oauth-access-token>"
   export SITE_ID="default"   # optional; defaults to "default"
   ```
3. Run the example from the repo root (forcing CommonJS output for ts-node):
   ```
   npx ts-node --transpile-only --compiler-options '{"module":"CommonJS"}' example.ts
   ```
   The script will add a sample document and log the result. Ensure the JWT has access to `SITE_ID`.

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
npm install formkiq-client-sdk-typescript@1.19.1 --save
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
*CustomIndexApi* | [**deleteIndex**](docs/CustomIndexApi.md#deleteindex) | **DELETE** /indices/{indexType}/{indexKey} | 
*CustomIndexApi* | [**indexFolderMove**](docs/CustomIndexApi.md#indexfoldermove) | **POST** /indices/{indexType}/move | 
*CustomIndexApi* | [**indexSearch**](docs/CustomIndexApi.md#indexsearch) | **POST** /indices/search | 
*DocumentActionsApi* | [**addDocumentActions**](docs/DocumentActionsApi.md#adddocumentactions) | **POST** /documents/{documentId}/actions | Add document action
*DocumentActionsApi* | [**addDocumentRetryAction**](docs/DocumentActionsApi.md#adddocumentretryaction) | **POST** /documents/{documentId}/actions/retry | Retries failed document action(s)
*DocumentActionsApi* | [**getDocumentActions**](docs/DocumentActionsApi.md#getdocumentactions) | **GET** /documents/{documentId}/actions | Get document actions
*DocumentAttributesApi* | [**addDocumentAttributes**](docs/DocumentAttributesApi.md#adddocumentattributes) | **POST** /documents/{documentId}/attributes | Add attribute to document
*DocumentAttributesApi* | [**deleteDocumentAttribute**](docs/DocumentAttributesApi.md#deletedocumentattribute) | **DELETE** /documents/{documentId}/attributes/{attributeKey} | Delete document attribute
*DocumentAttributesApi* | [**deleteDocumentAttributeAndValue**](docs/DocumentAttributesApi.md#deletedocumentattributeandvalue) | **DELETE** /documents/{documentId}/attributes/{attributeKey}/{attributeValue} | Delete document\&#39;s attribute value
*DocumentAttributesApi* | [**generateDocumentAttributeValue**](docs/DocumentAttributesApi.md#generatedocumentattributevalue) | **POST** /documents/{documentId}/attributes/{attributeKey}/generate | Generate document attribute value
*DocumentAttributesApi* | [**getDocumentAttribute**](docs/DocumentAttributesApi.md#getdocumentattribute) | **GET** /documents/{documentId}/attributes/{attributeKey} | Get document attribute by key
*DocumentAttributesApi* | [**getDocumentAttributes**](docs/DocumentAttributesApi.md#getdocumentattributes) | **GET** /documents/{documentId}/attributes | Get document\&#39;s attributes
*DocumentAttributesApi* | [**setDocumentAttributeValue**](docs/DocumentAttributesApi.md#setdocumentattributevalue) | **PUT** /documents/{documentId}/attributes/{attributeKey} | Set document\&#39;s attributes value
*DocumentAttributesApi* | [**setDocumentAttributes**](docs/DocumentAttributesApi.md#setdocumentattributes) | **PUT** /documents/{documentId}/attributes | Set document\&#39;s attributes
*DocumentFoldersApi* | [**addFolder**](docs/DocumentFoldersApi.md#addfolder) | **POST** /folders | Add document folder
*DocumentFoldersApi* | [**deleteFolder**](docs/DocumentFoldersApi.md#deletefolder) | **DELETE** /folders/{indexKey} | Delete document folder
*DocumentFoldersApi* | [**getFolderDocuments**](docs/DocumentFoldersApi.md#getfolderdocuments) | **GET** /folders | Get document folders
*DocumentFoldersApi* | [**getFolderPermissions**](docs/DocumentFoldersApi.md#getfolderpermissions) | **GET** /folders/{indexKey}/permissions | Get folder permissions
*DocumentFoldersApi* | [**moveFolder**](docs/DocumentFoldersApi.md#movefolder) | **POST** /folders/{indexKey}/moves | Move document folder
*DocumentFoldersApi* | [**setFolderPermissions**](docs/DocumentFoldersApi.md#setfolderpermissions) | **PUT** /folders/permissions | Sets Folder Permissions
*DocumentGenerationApi* | [**addDocumentCertification**](docs/DocumentGenerationApi.md#adddocumentcertification) | **POST** /documents/{documentId}/certifications | Add Document Certification
*DocumentGenerationApi* | [**addDocumentGenerate**](docs/DocumentGenerationApi.md#adddocumentgenerate) | **POST** /documents/{documentId}/generate | Add Document Generate
*DocumentNotificationsApi* | [**addDocumentNotification**](docs/DocumentNotificationsApi.md#adddocumentnotification) | **POST** /documents/{documentId}/notifications | Add an ad hoc document notification
*DocumentNotificationsApi* | [**getDocumentNotifications**](docs/DocumentNotificationsApi.md#getdocumentnotifications) | **GET** /documents/{documentId}/notifications | Get document notifications
*DocumentNotificationsApi* | [**getUserNotifications**](docs/DocumentNotificationsApi.md#getusernotifications) | **GET** /userNotifications | Get user notifications
*DocumentOCRApi* | [**addDocumentOcr**](docs/DocumentOCRApi.md#adddocumentocr) | **POST** /documents/{documentId}/ocr | Perform document ocr
*DocumentOCRApi* | [**deleteDocumentOcr**](docs/DocumentOCRApi.md#deletedocumentocr) | **DELETE** /documents/{documentId}/ocr | Delete document ocr
*DocumentOCRApi* | [**getDocumentOcr**](docs/DocumentOCRApi.md#getdocumentocr) | **GET** /documents/{documentId}/ocr | Get document ocr content
*DocumentOCRApi* | [**setDocumentOcr**](docs/DocumentOCRApi.md#setdocumentocr) | **PUT** /documents/{documentId}/ocr | Set document ocr result
*DocumentReviewsApi* | [**addDocumentReview**](docs/DocumentReviewsApi.md#adddocumentreview) | **POST** /documents/{documentId}/reviews | Add document review
*DocumentReviewsApi* | [**addDocumentReviewDecision**](docs/DocumentReviewsApi.md#adddocumentreviewdecision) | **POST** /documents/{documentId}/reviews/{reviewId}/decisions | Add document review decision
*DocumentReviewsApi* | [**getDocumentReview**](docs/DocumentReviewsApi.md#getdocumentreview) | **GET** /documents/{documentId}/reviews/{reviewId} | Get document review
*DocumentReviewsApi* | [**getDocumentReviewDecisions**](docs/DocumentReviewsApi.md#getdocumentreviewdecisions) | **GET** /documents/{documentId}/reviews/{reviewId}/decisions | Get document review decisions
*DocumentReviewsApi* | [**getDocumentReviews**](docs/DocumentReviewsApi.md#getdocumentreviews) | **GET** /documents/{documentId}/reviews | Get document reviews
*DocumentReviewsApi* | [**updateDocumentReview**](docs/DocumentReviewsApi.md#updatedocumentreview) | **PATCH** /documents/{documentId}/reviews/{reviewId} | Update document review
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
*DocumentsApi* | [**getDocumentArtifacts**](docs/DocumentsApi.md#getdocumentartifacts) | **GET** /documents/{documentId}/artifacts | Get document artifacts
*DocumentsApi* | [**getDocumentContent**](docs/DocumentsApi.md#getdocumentcontent) | **GET** /documents/{documentId}/content | Get document\&#39;s contents
*DocumentsApi* | [**getDocumentIdUpload**](docs/DocumentsApi.md#getdocumentidupload) | **GET** /documents/{documentId}/upload | Get url to update large document
*DocumentsApi* | [**getDocumentSyncs**](docs/DocumentsApi.md#getdocumentsyncs) | **GET** /documents/{documentId}/syncs | Get document syncs
*DocumentsApi* | [**getDocumentUpload**](docs/DocumentsApi.md#getdocumentupload) | **GET** /documents/upload | Get url to add large document
*DocumentsApi* | [**getDocumentUrl**](docs/DocumentsApi.md#getdocumenturl) | **GET** /documents/{documentId}/url | Get document content url
*DocumentsApi* | [**getDocuments**](docs/DocumentsApi.md#getdocuments) | **GET** /documents | Get Documents listing
*DocumentsApi* | [**getPublishedDocumentContent**](docs/DocumentsApi.md#getpublisheddocumentcontent) | **GET** /publications/{documentId} | Get published document\&#39;s contents
*DocumentsApi* | [**promoteDocumentArtifact**](docs/DocumentsApi.md#promotedocumentartifact) | **PUT** /documents/{documentId}/artifacts/promoteArtifact | Promote document artifact
*DocumentsApi* | [**purgeDocument**](docs/DocumentsApi.md#purgedocument) | **DELETE** /documents/{documentId}/purge | Purge document
*DocumentsApi* | [**setDocumentCheckout**](docs/DocumentsApi.md#setdocumentcheckout) | **PUT** /documents/{documentId}/checkout | Perform document checkout
*DocumentsApi* | [**setDocumentCheckoutLegalHold**](docs/DocumentsApi.md#setdocumentcheckoutlegalhold) | **PUT** /documents/{documentId}/legalHold | Perform document legal hold checkout
*DocumentsApi* | [**setDocumentRestore**](docs/DocumentsApi.md#setdocumentrestore) | **PUT** /documents/{documentId}/restore | Restore soft deleted document
*DocumentsApi* | [**updateDocument**](docs/DocumentsApi.md#updatedocument) | **PATCH** /documents/{documentId} | Update document
*ESignatureApi* | [**addDocusignEnvelopeReminders**](docs/ESignatureApi.md#adddocusignenvelopereminders) | **POST** /esignature/docusign/{documentId}/envelopes/{envelopeId}/reminders | Request DocuSign signing reminders
*ESignatureApi* | [**addDocusignEnvelopes**](docs/ESignatureApi.md#adddocusignenvelopes) | **POST** /esignature/docusign/{documentId}/envelopes | Create Docusign Envelope request
*ESignatureApi* | [**addDocusignRecipientView**](docs/ESignatureApi.md#adddocusignrecipientview) | **POST** /esignature/docusign/{documentId}/envelopes/{envelopeId}/views/recipient | Create Docusign Recipient View request
*ESignatureApi* | [**addDocusignSenderView**](docs/ESignatureApi.md#adddocusignsenderview) | **POST** /esignature/docusign/{documentId}/envelopes/{envelopeId}/views/sender | Create Docusign Sender View request
*ESignatureApi* | [**addEsignatureDocusignEvents**](docs/ESignatureApi.md#addesignaturedocusignevents) | **POST** /esignature/docusign/events | Add E-signature event
*ESignatureApi* | [**getDocusignEnvelope**](docs/ESignatureApi.md#getdocusignenvelope) | **GET** /esignature/docusign/{documentId}/envelopes/{envelopeId} | Get Docusign envelope and recipient status
*ESignatureApi* | [**voidDocusignEnvelope**](docs/ESignatureApi.md#voiddocusignenvelope) | **POST** /esignature/docusign/{documentId}/envelopes/{envelopeId}/void | Void a DocuSign envelope
*EntityApi* | [**addEntity**](docs/EntityApi.md#addentity) | **POST** /entities/{entityTypeId} | Add New Entity
*EntityApi* | [**addEntityType**](docs/EntityApi.md#addentitytype) | **POST** /entityTypes | Add New EntityType
*EntityApi* | [**deleteEntity**](docs/EntityApi.md#deleteentity) | **DELETE** /entities/{entityTypeId}/{entityId} | Deletes Entity
*EntityApi* | [**deleteEntityAttribute**](docs/EntityApi.md#deleteentityattribute) | **DELETE** /entities/{entityTypeId}/{entityId}/attributes/{attributeKey} | Deletes Entity Attribute
*EntityApi* | [**deleteEntityType**](docs/EntityApi.md#deleteentitytype) | **DELETE** /entityTypes/{entityTypeId} | Deletes Entity Type
*EntityApi* | [**getEntities**](docs/EntityApi.md#getentities) | **GET** /entities/{entityTypeId} | Get Entities
*EntityApi* | [**getEntity**](docs/EntityApi.md#getentity) | **GET** /entities/{entityTypeId}/{entityId} | Get Entity
*EntityApi* | [**getEntityType**](docs/EntityApi.md#getentitytype) | **GET** /entityTypes/{entityTypeId} | Get EntityType
*EntityApi* | [**getEntityTypes**](docs/EntityApi.md#getentitytypes) | **GET** /entityTypes | Get EntityTypes
*EntityApi* | [**setEntity**](docs/EntityApi.md#setentity) | **PUT** /entities/{entityTypeId}/{entityId} | Set Entity
*EntityApi* | [**setEntityType**](docs/EntityApi.md#setentitytype) | **PUT** /entityTypes/{entityTypeId} | Set EntityType
*EntityApi* | [**updateEntity**](docs/EntityApi.md#updateentity) | **PATCH** /entities/{entityTypeId}/{entityId} | Update Entity
*ExamineObjectsApi* | [**getExaminePdf**](docs/ExamineObjectsApi.md#getexaminepdf) | **GET** /objects/examine/{id}/pdf | Add Examine Pdf
*ExamineObjectsApi* | [**getExaminePdfUrl**](docs/ExamineObjectsApi.md#getexaminepdfurl) | **GET** /objects/examine/pdf | Add Examine Pdf
*GoogleIntegrationApi* | [**addGoogleDocumentExport**](docs/GoogleIntegrationApi.md#addgoogledocumentexport) | **POST** /integrations/google/drive/documents/{documentId}/export | Add Google Document Export
*IntelligentDocumentProcessingApi* | [**addDocumentAiPrompt**](docs/IntelligentDocumentProcessingApi.md#adddocumentaiprompt) | **POST** /documents/{documentId}/ai/prompts/{llmPromptEntityName} | Add document AI result from LLM prompt
*IntelligentDocumentProcessingApi* | [**addDocumentMetadataExtractionResult**](docs/IntelligentDocumentProcessingApi.md#adddocumentmetadataextractionresult) | **POST** /documents/{documentId}/metadataExtractionResults/{llmPromptEntityName} | Add document\&#39;s metadata extraction result
*IntelligentDocumentProcessingApi* | [**getAllDocumentMetadataExtractionResults**](docs/IntelligentDocumentProcessingApi.md#getalldocumentmetadataextractionresults) | **GET** /documents/{documentId}/metadataExtractionResults | Get all document\&#39;s metadata extraction results
*IntelligentDocumentProcessingApi* | [**getDocumentAiPromptResults**](docs/IntelligentDocumentProcessingApi.md#getdocumentaipromptresults) | **GET** /documents/{documentId}/ai/prompts/{llmPromptEntityName} | Get document AI results from LLM prompt
*IntelligentDocumentProcessingApi* | [**getDocumentAiPromptsResults**](docs/IntelligentDocumentProcessingApi.md#getdocumentaipromptsresults) | **GET** /documents/{documentId}/ai/prompts | Get document AI results from LLM prompts
*IntelligentDocumentProcessingApi* | [**getDocumentDataClassification**](docs/IntelligentDocumentProcessingApi.md#getdocumentdataclassification) | **GET** /documents/{documentId}/dataClassification | Get document\&#39;s data classification
*IntelligentDocumentProcessingApi* | [**getDocumentMetadataExtractionResults**](docs/IntelligentDocumentProcessingApi.md#getdocumentmetadataextractionresults) | **GET** /documents/{documentId}/metadataExtractionResults/{llmPromptEntityName} | Get document\&#39;s metadata extraction results
*IntelligentDocumentProcessingApi* | [**setDocumentDataClassification**](docs/IntelligentDocumentProcessingApi.md#setdocumentdataclassification) | **PUT** /documents/{documentId}/dataClassification | Set document\&#39;s data classification
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
*ShortlinksApi* | [**addShortlink**](docs/ShortlinksApi.md#addshortlink) | **POST** /shortlinks | Add shortlink
*SystemManagementApi* | [**addApiKey**](docs/SystemManagementApi.md#addapikey) | **POST** /sites/{siteId}/apiKeys | Add API Key
*SystemManagementApi* | [**addLocale**](docs/SystemManagementApi.md#addlocale) | **POST** /sites/{siteId}/locales | Add Locale
*SystemManagementApi* | [**addLocaleResourceItem**](docs/SystemManagementApi.md#addlocaleresourceitem) | **POST** /sites/{siteId}/locales/{locale}/resourceItems | Add Locale Resource Item
*SystemManagementApi* | [**addNotificationTest**](docs/SystemManagementApi.md#addnotificationtest) | **POST** /sites/{siteId}/configuration/notification/test | Send a test notification
*SystemManagementApi* | [**addOpenSearchRestoreSnapshot**](docs/SystemManagementApi.md#addopensearchrestoresnapshot) | **POST** /sites/{siteId}/opensearch/snapshots/{snapshotName}/restore | Restore site OpenSearch snapshot
*SystemManagementApi* | [**addOpenSearchSnapshot**](docs/SystemManagementApi.md#addopensearchsnapshot) | **POST** /sites/{siteId}/opensearch/snapshots/{snapshotName} | Create site OpenSearch snapshot
*SystemManagementApi* | [**addSite**](docs/SystemManagementApi.md#addsite) | **POST** /sites | Add Site
*SystemManagementApi* | [**addSystemInferenceModelAgreement**](docs/SystemManagementApi.md#addsysteminferencemodelagreement) | **POST** /system/inferenceModels/agreement | Agree to a system inference model
*SystemManagementApi* | [**cleanupOpenSearchSnapshotRepository**](docs/SystemManagementApi.md#cleanupopensearchsnapshotrepository) | **POST** /sites/global/opensearch/snapshotRepositories/{repositoryName}/cleanup | Cleanup OpenSearch snapshot repository
*SystemManagementApi* | [**deleteApiKey**](docs/SystemManagementApi.md#deleteapikey) | **DELETE** /sites/{siteId}/apiKeys/{apiKey} | Delete API Key
*SystemManagementApi* | [**deleteLocale**](docs/SystemManagementApi.md#deletelocale) | **DELETE** /sites/{siteId}/locales/{locale} | Delete Locale
*SystemManagementApi* | [**deleteLocaleResourceItem**](docs/SystemManagementApi.md#deletelocaleresourceitem) | **DELETE** /sites/{siteId}/locales/{locale}/resourceItems/{itemKey} | Delete Local Resource Item
*SystemManagementApi* | [**deleteOpenSearchIndex**](docs/SystemManagementApi.md#deleteopensearchindex) | **DELETE** /sites/{siteId}/opensearch/index | Deletes site(s) OpenSearch index
*SystemManagementApi* | [**deleteOpenSearchIndexByName**](docs/SystemManagementApi.md#deleteopensearchindexbyname) | **DELETE** /sites/global/opensearch/indices/{indexName} | Deletes OpenSearch index by name
*SystemManagementApi* | [**deleteOpenSearchRestoreSnapshot**](docs/SystemManagementApi.md#deleteopensearchrestoresnapshot) | **DELETE** /sites/{siteId}/opensearch/snapshots/{snapshotName}/restore | Delete restored OpenSearch snapshot index
*SystemManagementApi* | [**deleteOpenSearchSnapshot**](docs/SystemManagementApi.md#deleteopensearchsnapshot) | **DELETE** /sites/{siteId}/opensearch/snapshots/{snapshotName} | Delete site OpenSearch snapshot
*SystemManagementApi* | [**deleteOpenSearchSnapshotRepository**](docs/SystemManagementApi.md#deleteopensearchsnapshotrepository) | **DELETE** /sites/{siteId}/opensearch/snapshotRepository | Delete site OpenSearch snapshot repository
*SystemManagementApi* | [**deleteSiteGroup**](docs/SystemManagementApi.md#deletesitegroup) | **DELETE** /sites/{siteId}/groups/{groupName} | Deletes Site Group and permissions
*SystemManagementApi* | [**generateDelegationToken**](docs/SystemManagementApi.md#generatedelegationtoken) | **POST** /sites/{siteId}/delegationTokens | Generate a delegation token
*SystemManagementApi* | [**getAllOpenSearchIndices**](docs/SystemManagementApi.md#getallopensearchindices) | **GET** /sites/global/opensearch/indices | Get all OpenSearch indices
*SystemManagementApi* | [**getApiKeys**](docs/SystemManagementApi.md#getapikeys) | **GET** /sites/{siteId}/apiKeys | Get API Keys
*SystemManagementApi* | [**getConfiguration**](docs/SystemManagementApi.md#getconfiguration) | **GET** /sites/{siteId}/configuration | Get site configuration
*SystemManagementApi* | [**getLocaleResourceItem**](docs/SystemManagementApi.md#getlocaleresourceitem) | **GET** /sites/{siteId}/locales/{locale}/resourceItems/{itemKey} | Get Resource Item by Locale
*SystemManagementApi* | [**getLocaleResourceItems**](docs/SystemManagementApi.md#getlocaleresourceitems) | **GET** /sites/{siteId}/locales/{locale}/resourceItems | Get Resource Items by Locale
*SystemManagementApi* | [**getLocales**](docs/SystemManagementApi.md#getlocales) | **GET** /sites/{siteId}/locales | Get Locales
*SystemManagementApi* | [**getNumberingSequence**](docs/SystemManagementApi.md#getnumberingsequence) | **GET** /sites/{siteId}/numberingSequences/{attributeKey} | Get numbering sequence
*SystemManagementApi* | [**getNumberingSequences**](docs/SystemManagementApi.md#getnumberingsequences) | **GET** /sites/{siteId}/numberingSequences | Get numbering sequences
*SystemManagementApi* | [**getOpenSearchIndex**](docs/SystemManagementApi.md#getopensearchindex) | **GET** /sites/{siteId}/opensearch/index | Get site(s) OpenSearch index settings
*SystemManagementApi* | [**getOpenSearchIndices**](docs/SystemManagementApi.md#getopensearchindices) | **GET** /sites/{siteId}/opensearch/indices | Get site(s) OpenSearch indices
*SystemManagementApi* | [**getOpenSearchSnapshot**](docs/SystemManagementApi.md#getopensearchsnapshot) | **GET** /sites/{siteId}/opensearch/snapshots/{snapshotName} | Get site OpenSearch snapshot
*SystemManagementApi* | [**getOpenSearchSnapshotRepositories**](docs/SystemManagementApi.md#getopensearchsnapshotrepositories) | **GET** /sites/global/opensearch/snapshotRepositories | List OpenSearch snapshot repositories
*SystemManagementApi* | [**getOpenSearchSnapshotRepository**](docs/SystemManagementApi.md#getopensearchsnapshotrepository) | **GET** /sites/{siteId}/opensearch/snapshotRepository | Get site OpenSearch snapshot repository
*SystemManagementApi* | [**getOpenSearchSnapshots**](docs/SystemManagementApi.md#getopensearchsnapshots) | **GET** /sites/{siteId}/opensearch/snapshots | List site OpenSearch snapshots
*SystemManagementApi* | [**getSiteGroup**](docs/SystemManagementApi.md#getsitegroup) | **GET** /sites/{siteId}/groups/{groupName} | Get group and permissions belonging to site
*SystemManagementApi* | [**getSiteGroups**](docs/SystemManagementApi.md#getsitegroups) | **GET** /sites/{siteId}/groups | Get group(s) and permissions belonging to site
*SystemManagementApi* | [**getSites**](docs/SystemManagementApi.md#getsites) | **GET** /sites | Get site(s) access
*SystemManagementApi* | [**getSystemConfiguration**](docs/SystemManagementApi.md#getsystemconfiguration) | **GET** /system/configuration | Get system configuration
*SystemManagementApi* | [**getSystemInferenceModels**](docs/SystemManagementApi.md#getsysteminferencemodels) | **GET** /system/inferenceModels | Get system inference models
*SystemManagementApi* | [**getVersion**](docs/SystemManagementApi.md#getversion) | **GET** /version | Get FormKiQ version
*SystemManagementApi* | [**setLocaleResourceItem**](docs/SystemManagementApi.md#setlocaleresourceitem) | **PUT** /sites/{siteId}/locales/{locale}/resourceItems/{itemKey} | Set Locale Resource Item
*SystemManagementApi* | [**setNumberingSequence**](docs/SystemManagementApi.md#setnumberingsequence) | **PUT** /sites/{siteId}/numberingSequences/{attributeKey} | Set numbering sequence
*SystemManagementApi* | [**setOpenSearchIndex**](docs/SystemManagementApi.md#setopensearchindex) | **PUT** /sites/{siteId}/opensearch/index | Set site(s) OpenSearch index settings
*SystemManagementApi* | [**setOpenSearchIndices**](docs/SystemManagementApi.md#setopensearchindices) | **PUT** /sites/{siteId}/opensearch/indices | Set site(s) OpenSearch index to use for a SiteId
*SystemManagementApi* | [**setSiteGroupPermissions**](docs/SystemManagementApi.md#setsitegrouppermissions) | **PUT** /sites/{siteId}/groups/{groupName}/permissions | Set Site\&#39;s Group Permissions
*SystemManagementApi* | [**updateConfiguration**](docs/SystemManagementApi.md#updateconfiguration) | **PATCH** /sites/{siteId}/configuration | Update site configuration
*SystemManagementApi* | [**updateSite**](docs/SystemManagementApi.md#updatesite) | **PATCH** /sites/{siteId} | Update Site
*SystemManagementApi* | [**updateSystemConfiguration**](docs/SystemManagementApi.md#updatesystemconfiguration) | **PATCH** /system/configuration | Update system configuration
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
 - [ActivityDelegation](docs/ActivityDelegation.md)
 - [ActivityStatus](docs/ActivityStatus.md)
 - [AddAction](docs/AddAction.md)
 - [AddActionParameters](docs/AddActionParameters.md)
 - [AddApiKeyRequest](docs/AddApiKeyRequest.md)
 - [AddApiKeyResponse](docs/AddApiKeyResponse.md)
 - [AddAttribute](docs/AddAttribute.md)
 - [AddAttributeRequest](docs/AddAttributeRequest.md)
 - [AddAttributeSchemaOptional](docs/AddAttributeSchemaOptional.md)
 - [AddAttributeSchemaRequired](docs/AddAttributeSchemaRequired.md)
 - [AddChildDocument](docs/AddChildDocument.md)
 - [AddChildDocumentResponse](docs/AddChildDocumentResponse.md)
 - [AddClassification](docs/AddClassification.md)
 - [AddClassificationRequest](docs/AddClassificationRequest.md)
 - [AddClassificationResponse](docs/AddClassificationResponse.md)
 - [AddDelegationTokenRequest](docs/AddDelegationTokenRequest.md)
 - [AddDelegationTokenResponse](docs/AddDelegationTokenResponse.md)
 - [AddDocumentActionsRequest](docs/AddDocumentActionsRequest.md)
 - [AddDocumentAiPromptRequest](docs/AddDocumentAiPromptRequest.md)
 - [AddDocumentAiResponse](docs/AddDocumentAiResponse.md)
 - [AddDocumentAttribute](docs/AddDocumentAttribute.md)
 - [AddDocumentAttributeClassification](docs/AddDocumentAttributeClassification.md)
 - [AddDocumentAttributeEntities](docs/AddDocumentAttributeEntities.md)
 - [AddDocumentAttributeEntity](docs/AddDocumentAttributeEntity.md)
 - [AddDocumentAttributeEntityValue](docs/AddDocumentAttributeEntityValue.md)
 - [AddDocumentAttributeRelationship](docs/AddDocumentAttributeRelationship.md)
 - [AddDocumentAttributeStandard](docs/AddDocumentAttributeStandard.md)
 - [AddDocumentAttributeValue](docs/AddDocumentAttributeValue.md)
 - [AddDocumentAttributesRequest](docs/AddDocumentAttributesRequest.md)
 - [AddDocumentCertificationRequest](docs/AddDocumentCertificationRequest.md)
 - [AddDocumentCertificationResponse](docs/AddDocumentCertificationResponse.md)
 - [AddDocumentFulltextRequest](docs/AddDocumentFulltextRequest.md)
 - [AddDocumentFulltextResponse](docs/AddDocumentFulltextResponse.md)
 - [AddDocumentGenerateRequest](docs/AddDocumentGenerateRequest.md)
 - [AddDocumentGenerateResponse](docs/AddDocumentGenerateResponse.md)
 - [AddDocumentMetadata](docs/AddDocumentMetadata.md)
 - [AddDocumentMetadataExtractionResponse](docs/AddDocumentMetadataExtractionResponse.md)
 - [AddDocumentNotificationRequest](docs/AddDocumentNotificationRequest.md)
 - [AddDocumentNotificationResponse](docs/AddDocumentNotificationResponse.md)
 - [AddDocumentOcrRequest](docs/AddDocumentOcrRequest.md)
 - [AddDocumentOcrResponse](docs/AddDocumentOcrResponse.md)
 - [AddDocumentRequest](docs/AddDocumentRequest.md)
 - [AddDocumentResponse](docs/AddDocumentResponse.md)
 - [AddDocumentReview](docs/AddDocumentReview.md)
 - [AddDocumentReviewDecision](docs/AddDocumentReviewDecision.md)
 - [AddDocumentReviewDecision409Response](docs/AddDocumentReviewDecision409Response.md)
 - [AddDocumentReviewDecisionRequest](docs/AddDocumentReviewDecisionRequest.md)
 - [AddDocumentReviewDecisionResponse](docs/AddDocumentReviewDecisionResponse.md)
 - [AddDocumentReviewRequest](docs/AddDocumentReviewRequest.md)
 - [AddDocumentReviewResponse](docs/AddDocumentReviewResponse.md)
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
 - [AddDocusignEnvelopeRemindersRequest](docs/AddDocusignEnvelopeRemindersRequest.md)
 - [AddDocusignEnvelopeRemindersResponse](docs/AddDocusignEnvelopeRemindersResponse.md)
 - [AddDocusignEnvelopesRequest](docs/AddDocusignEnvelopesRequest.md)
 - [AddDocusignEnvelopesResponse](docs/AddDocusignEnvelopesResponse.md)
 - [AddDocusignRecipientViewRequest](docs/AddDocusignRecipientViewRequest.md)
 - [AddDocusignRecipientViewResponse](docs/AddDocusignRecipientViewResponse.md)
 - [AddDocusignSenderViewRequest](docs/AddDocusignSenderViewRequest.md)
 - [AddDocusignSenderViewResponse](docs/AddDocusignSenderViewResponse.md)
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
 - [AddNotificationTestRequest](docs/AddNotificationTestRequest.md)
 - [AddNotificationTestResponse](docs/AddNotificationTestResponse.md)
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
 - [AddShortlinkRequest](docs/AddShortlinkRequest.md)
 - [AddShortlinkResponse](docs/AddShortlinkResponse.md)
 - [AddSite](docs/AddSite.md)
 - [AddSiteRequest](docs/AddSiteRequest.md)
 - [AddSystemInferenceModelAgreementRequest](docs/AddSystemInferenceModelAgreementRequest.md)
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
 - [ApiKeyPermission](docs/ApiKeyPermission.md)
 - [Attribute](docs/Attribute.md)
 - [AttributeDataType](docs/AttributeDataType.md)
 - [AttributeSchemaCompositeKey](docs/AttributeSchemaCompositeKey.md)
 - [AttributeSchemaOptional](docs/AttributeSchemaOptional.md)
 - [AttributeSchemaRequired](docs/AttributeSchemaRequired.md)
 - [AttributeType](docs/AttributeType.md)
 - [AttributeValueType](docs/AttributeValueType.md)
 - [BrandingConfig](docs/BrandingConfig.md)
 - [ChecksumType](docs/ChecksumType.md)
 - [ChildDocument](docs/ChildDocument.md)
 - [Classification](docs/Classification.md)
 - [ClassificationSummary](docs/ClassificationSummary.md)
 - [CleanupOpenSearchSnapshotRepositoryResponse](docs/CleanupOpenSearchSnapshotRepositoryResponse.md)
 - [DataClassification](docs/DataClassification.md)
 - [DataClassificationAttribute](docs/DataClassificationAttribute.md)
 - [DelegationTokenPermission](docs/DelegationTokenPermission.md)
 - [DelegationTokenPrincipal](docs/DelegationTokenPrincipal.md)
 - [DeleteApiKeyResponse](docs/DeleteApiKeyResponse.md)
 - [DeleteFolderResponse](docs/DeleteFolderResponse.md)
 - [DeleteFulltextResponse](docs/DeleteFulltextResponse.md)
 - [DeleteIndicesResponse](docs/DeleteIndicesResponse.md)
 - [DeleteQueueResponse](docs/DeleteQueueResponse.md)
 - [DeleteResponse](docs/DeleteResponse.md)
 - [DeleteRuleResponse](docs/DeleteRuleResponse.md)
 - [DeleteRulesetResponse](docs/DeleteRulesetResponse.md)
 - [DeleteShareResponse](docs/DeleteShareResponse.md)
 - [DeleteType](docs/DeleteType.md)
 - [Document](docs/Document.md)
 - [DocumentAction](docs/DocumentAction.md)
 - [DocumentActionStatus](docs/DocumentActionStatus.md)
 - [DocumentActionType](docs/DocumentActionType.md)
 - [DocumentAiPromptNamedResult](docs/DocumentAiPromptNamedResult.md)
 - [DocumentAiPromptResult](docs/DocumentAiPromptResult.md)
 - [DocumentAiPromptResultAttribute](docs/DocumentAiPromptResultAttribute.md)
 - [DocumentAiPromptResultType](docs/DocumentAiPromptResultType.md)
 - [DocumentAiPromptValue](docs/DocumentAiPromptValue.md)
 - [DocumentAttribute](docs/DocumentAttribute.md)
 - [DocumentCertification](docs/DocumentCertification.md)
 - [DocumentCertificationAwsSecretsManager](docs/DocumentCertificationAwsSecretsManager.md)
 - [DocumentCertificationTarget](docs/DocumentCertificationTarget.md)
 - [DocumentCertificationType](docs/DocumentCertificationType.md)
 - [DocumentConfig](docs/DocumentConfig.md)
 - [DocumentConfigContentTypes](docs/DocumentConfigContentTypes.md)
 - [DocumentConfigDispositionAction](docs/DocumentConfigDispositionAction.md)
 - [DocumentConfigRetentionAndDisposition](docs/DocumentConfigRetentionAndDisposition.md)
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
 - [DocumentNotification](docs/DocumentNotification.md)
 - [DocumentNotificationStatus](docs/DocumentNotificationStatus.md)
 - [DocumentNotificationType](docs/DocumentNotificationType.md)
 - [DocumentRelationshipType](docs/DocumentRelationshipType.md)
 - [DocumentResourceType](docs/DocumentResourceType.md)
 - [DocumentReview](docs/DocumentReview.md)
 - [DocumentReviewDecision](docs/DocumentReviewDecision.md)
 - [DocumentReviewStatus](docs/DocumentReviewStatus.md)
 - [DocumentSearch](docs/DocumentSearch.md)
 - [DocumentSearchAttribute](docs/DocumentSearchAttribute.md)
 - [DocumentSearchFilename](docs/DocumentSearchFilename.md)
 - [DocumentSearchFolder](docs/DocumentSearchFolder.md)
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
 - [DocumentsCompressDocument](docs/DocumentsCompressDocument.md)
 - [DocumentsCompressRequest](docs/DocumentsCompressRequest.md)
 - [DocumentsCompressResponse](docs/DocumentsCompressResponse.md)
 - [DocusignConfig](docs/DocusignConfig.md)
 - [DocusignEnvelopeRecipient](docs/DocusignEnvelopeRecipient.md)
 - [DocusignEnvelopeRecipients](docs/DocusignEnvelopeRecipients.md)
 - [DocusignEnvelopeStatus](docs/DocusignEnvelopeStatus.md)
 - [DocusignEnvironment](docs/DocusignEnvironment.md)
 - [DocusignInpersonSigner](docs/DocusignInpersonSigner.md)
 - [DocusignNotification](docs/DocusignNotification.md)
 - [DocusignNotificationExpirations](docs/DocusignNotificationExpirations.md)
 - [DocusignNotificationReminders](docs/DocusignNotificationReminders.md)
 - [DocusignRecipientView](docs/DocusignRecipientView.md)
 - [DocusignReminderRecipient](docs/DocusignReminderRecipient.md)
 - [DocusignSignHereTabs](docs/DocusignSignHereTabs.md)
 - [DocusignSigner](docs/DocusignSigner.md)
 - [DocusignSignerReadyToSignNotification](docs/DocusignSignerReadyToSignNotification.md)
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
 - [GenerateDocumentAttributeValueResponse](docs/GenerateDocumentAttributeValueResponse.md)
 - [GetActivitesResponse](docs/GetActivitesResponse.md)
 - [GetApiKeysResponse](docs/GetApiKeysResponse.md)
 - [GetAttributeAllowedValuesResponse](docs/GetAttributeAllowedValuesResponse.md)
 - [GetAttributeResponse](docs/GetAttributeResponse.md)
 - [GetAttributesResponse](docs/GetAttributesResponse.md)
 - [GetClassificationResponse](docs/GetClassificationResponse.md)
 - [GetClassificationsResponse](docs/GetClassificationsResponse.md)
 - [GetConfigurationResponse](docs/GetConfigurationResponse.md)
 - [GetDocumentActionsResponse](docs/GetDocumentActionsResponse.md)
 - [GetDocumentAiPromptResultsResponse](docs/GetDocumentAiPromptResultsResponse.md)
 - [GetDocumentAiPromptsResultsResponse](docs/GetDocumentAiPromptsResultsResponse.md)
 - [GetDocumentAttributeResponse](docs/GetDocumentAttributeResponse.md)
 - [GetDocumentAttributesResponse](docs/GetDocumentAttributesResponse.md)
 - [GetDocumentContentResponse](docs/GetDocumentContentResponse.md)
 - [GetDocumentDataClassificationResponse](docs/GetDocumentDataClassificationResponse.md)
 - [GetDocumentFulltextResponse](docs/GetDocumentFulltextResponse.md)
 - [GetDocumentMetadataExtractionResponse](docs/GetDocumentMetadataExtractionResponse.md)
 - [GetDocumentNotificationsResponse](docs/GetDocumentNotificationsResponse.md)
 - [GetDocumentOcrResponse](docs/GetDocumentOcrResponse.md)
 - [GetDocumentResponse](docs/GetDocumentResponse.md)
 - [GetDocumentReviewDecisionsResponse](docs/GetDocumentReviewDecisionsResponse.md)
 - [GetDocumentReviewResponse](docs/GetDocumentReviewResponse.md)
 - [GetDocumentReviewsResponse](docs/GetDocumentReviewsResponse.md)
 - [GetDocumentSyncResponse](docs/GetDocumentSyncResponse.md)
 - [GetDocumentTagResponse](docs/GetDocumentTagResponse.md)
 - [GetDocumentTagsResponse](docs/GetDocumentTagsResponse.md)
 - [GetDocumentUrlResponse](docs/GetDocumentUrlResponse.md)
 - [GetDocumentVersionsResponse](docs/GetDocumentVersionsResponse.md)
 - [GetDocumentWorkflowResponse](docs/GetDocumentWorkflowResponse.md)
 - [GetDocumentWorkflowsResponse](docs/GetDocumentWorkflowsResponse.md)
 - [GetDocumentsResponse](docs/GetDocumentsResponse.md)
 - [GetDocusignEnvelopeResponse](docs/GetDocusignEnvelopeResponse.md)
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
 - [GetNumberingSequenceResponse](docs/GetNumberingSequenceResponse.md)
 - [GetNumberingSequencesResponse](docs/GetNumberingSequencesResponse.md)
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
 - [GetSystemConfigurationResponse](docs/GetSystemConfigurationResponse.md)
 - [GetSystemInferenceModelsResponse](docs/GetSystemInferenceModelsResponse.md)
 - [GetUserActivitesResponse](docs/GetUserActivitesResponse.md)
 - [GetUserGroupsResponse](docs/GetUserGroupsResponse.md)
 - [GetUserNotificationsResponse](docs/GetUserNotificationsResponse.md)
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
 - [MappingAttributeAiPromptResult](docs/MappingAttributeAiPromptResult.md)
 - [MappingAttributeContent](docs/MappingAttributeContent.md)
 - [MappingAttributeDataClassification](docs/MappingAttributeDataClassification.md)
 - [MappingAttributeLabelMatchingType](docs/MappingAttributeLabelMatchingType.md)
 - [MappingAttributeMalwareScan](docs/MappingAttributeMalwareScan.md)
 - [MappingAttributeManual](docs/MappingAttributeManual.md)
 - [MappingAttributeMetadata](docs/MappingAttributeMetadata.md)
 - [MappingAttributeMetadataExtractionResult](docs/MappingAttributeMetadataExtractionResult.md)
 - [MappingAttributeMetadataField](docs/MappingAttributeMetadataField.md)
 - [MappingAttributeSourceType](docs/MappingAttributeSourceType.md)
 - [MappingClassification](docs/MappingClassification.md)
 - [MappingClassificationCondition](docs/MappingClassificationCondition.md)
 - [MappingClassificationConditionAiPromptResult](docs/MappingClassificationConditionAiPromptResult.md)
 - [MappingClassificationConditionContent](docs/MappingClassificationConditionContent.md)
 - [MappingClassificationConditionDataClassification](docs/MappingClassificationConditionDataClassification.md)
 - [MappingClassificationConditionMatchingType](docs/MappingClassificationConditionMatchingType.md)
 - [MappingClassificationConditionMetadataExtractionResult](docs/MappingClassificationConditionMetadataExtractionResult.md)
 - [MappingClassificationConditionSourceType](docs/MappingClassificationConditionSourceType.md)
 - [MatchDocumentTag](docs/MatchDocumentTag.md)
 - [MetadataExtraction](docs/MetadataExtraction.md)
 - [MetadataExtractionAttribute](docs/MetadataExtractionAttribute.md)
 - [ModelError](docs/ModelError.md)
 - [MoveFolderRequest](docs/MoveFolderRequest.md)
 - [MoveFolderResponse](docs/MoveFolderResponse.md)
 - [NotificationConfig](docs/NotificationConfig.md)
 - [NotificationEmailProvider](docs/NotificationEmailProvider.md)
 - [NotificationEmailSmtpConfig](docs/NotificationEmailSmtpConfig.md)
 - [NotificationEmailSmtpConnectionSecurity](docs/NotificationEmailSmtpConnectionSecurity.md)
 - [NumberingSequence](docs/NumberingSequence.md)
 - [NumberingSequenceReset](docs/NumberingSequenceReset.md)
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
 - [PromoteDocumentArtifactRequest](docs/PromoteDocumentArtifactRequest.md)
 - [QueryFulltextResponse](docs/QueryFulltextResponse.md)
 - [Queue](docs/Queue.md)
 - [ReindexTarget](docs/ReindexTarget.md)
 - [ResourceItem](docs/ResourceItem.md)
 - [ReviewDecisionType](docs/ReviewDecisionType.md)
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
 - [SetEntityRequest](docs/SetEntityRequest.md)
 - [SetEntityTypeRequest](docs/SetEntityTypeRequest.md)
 - [SetFolderPermissionsRequest](docs/SetFolderPermissionsRequest.md)
 - [SetGroupPermissionsRequest](docs/SetGroupPermissionsRequest.md)
 - [SetLocaleResourceItemRequest](docs/SetLocaleResourceItemRequest.md)
 - [SetMappingRequest](docs/SetMappingRequest.md)
 - [SetNumberingSequenceRequest](docs/SetNumberingSequenceRequest.md)
 - [SetOpaAccessPolicyItemsRequest](docs/SetOpaAccessPolicyItemsRequest.md)
 - [SetOpenSearchIndexRequest](docs/SetOpenSearchIndexRequest.md)
 - [SetOpenSearchIndexResponse](docs/SetOpenSearchIndexResponse.md)
 - [SetOpenSearchIndiceRequest](docs/SetOpenSearchIndiceRequest.md)
 - [SetResponse](docs/SetResponse.md)
 - [SetSchemaAttributes](docs/SetSchemaAttributes.md)
 - [SetSitesSchemaRequest](docs/SetSitesSchemaRequest.md)
 - [SetWorkflowRequest](docs/SetWorkflowRequest.md)
 - [Site](docs/Site.md)
 - [SiteConfig](docs/SiteConfig.md)
 - [SiteGroup](docs/SiteGroup.md)
 - [SiteGroupPermissions](docs/SiteGroupPermissions.md)
 - [SitePermission](docs/SitePermission.md)
 - [SiteStatus](docs/SiteStatus.md)
 - [SiteUsage](docs/SiteUsage.md)
 - [SystemConfigurationWebUi](docs/SystemConfigurationWebUi.md)
 - [SystemInferenceModel](docs/SystemInferenceModel.md)
 - [SystemInferenceModelInvocation](docs/SystemInferenceModelInvocation.md)
 - [TextractQuery](docs/TextractQuery.md)
 - [UpdateAttribute](docs/UpdateAttribute.md)
 - [UpdateAttributeRequest](docs/UpdateAttributeRequest.md)
 - [UpdateConfigurationRequest](docs/UpdateConfigurationRequest.md)
 - [UpdateConfigurationResponse](docs/UpdateConfigurationResponse.md)
 - [UpdateDocumentFulltextRequest](docs/UpdateDocumentFulltextRequest.md)
 - [UpdateDocumentFulltextResponse](docs/UpdateDocumentFulltextResponse.md)
 - [UpdateDocumentRequest](docs/UpdateDocumentRequest.md)
 - [UpdateDocumentReview](docs/UpdateDocumentReview.md)
 - [UpdateDocumentReviewRequest](docs/UpdateDocumentReviewRequest.md)
 - [UpdateEntityRequest](docs/UpdateEntityRequest.md)
 - [UpdateMatchingDocumentTagsRequest](docs/UpdateMatchingDocumentTagsRequest.md)
 - [UpdateMatchingDocumentTagsRequestMatch](docs/UpdateMatchingDocumentTagsRequestMatch.md)
 - [UpdateMatchingDocumentTagsRequestUpdate](docs/UpdateMatchingDocumentTagsRequestUpdate.md)
 - [UpdateMatchingDocumentTagsResponse](docs/UpdateMatchingDocumentTagsResponse.md)
 - [UpdateResponse](docs/UpdateResponse.md)
 - [UpdateRule](docs/UpdateRule.md)
 - [UpdateRuleRequest](docs/UpdateRuleRequest.md)
 - [UpdateRuleResponse](docs/UpdateRuleResponse.md)
 - [UpdateRuleset](docs/UpdateRuleset.md)
 - [UpdateRulesetRequest](docs/UpdateRulesetRequest.md)
 - [UpdateRulesetResponse](docs/UpdateRulesetResponse.md)
 - [UpdateSite](docs/UpdateSite.md)
 - [UpdateSiteRequest](docs/UpdateSiteRequest.md)
 - [UpdateSystemConfigurationRequest](docs/UpdateSystemConfigurationRequest.md)
 - [UpdateWorkflowRequest](docs/UpdateWorkflowRequest.md)
 - [User](docs/User.md)
 - [UserActivity](docs/UserActivity.md)
 - [UserActivityChanges](docs/UserActivityChanges.md)
 - [UserActivityType](docs/UserActivityType.md)
 - [UserAttributes](docs/UserAttributes.md)
 - [UserNotification](docs/UserNotification.md)
 - [UserShare](docs/UserShare.md)
 - [UserSharePermission](docs/UserSharePermission.md)
 - [UserSharePermissionType](docs/UserSharePermissionType.md)
 - [ValidationError](docs/ValidationError.md)
 - [ValidationErrorsResponse](docs/ValidationErrorsResponse.md)
 - [VoidDocusignEnvelopeRequest](docs/VoidDocusignEnvelopeRequest.md)
 - [VoidDocusignEnvelopeResponse](docs/VoidDocusignEnvelopeResponse.md)
 - [Watermark](docs/Watermark.md)
 - [WatermarkPosition](docs/WatermarkPosition.md)
 - [WatermarkPositionXAnchor](docs/WatermarkPositionXAnchor.md)
 - [WatermarkPositionYAnchor](docs/WatermarkPositionYAnchor.md)
 - [WatermarkScale](docs/WatermarkScale.md)
 - [WebhookTag](docs/WebhookTag.md)
 - [WorkflowDecision](docs/WorkflowDecision.md)
 - [WorkflowDocument](docs/WorkflowDocument.md)
 - [WorkflowQueue](docs/WorkflowQueue.md)
 - [WorkflowStatus](docs/WorkflowStatus.md)
 - [WorkflowStep](docs/WorkflowStep.md)
 - [WorkflowStepCondition](docs/WorkflowStepCondition.md)
 - [WorkflowStepConditionAttributeAggregateType](docs/WorkflowStepConditionAttributeAggregateType.md)
 - [WorkflowStepConditionAttributeValueComparison](docs/WorkflowStepConditionAttributeValueComparison.md)
 - [WorkflowStepConditionAttributeValueComparisonAggregate](docs/WorkflowStepConditionAttributeValueComparisonAggregate.md)
 - [WorkflowStepConditionAttributeValueComparisonAttribute](docs/WorkflowStepConditionAttributeValueComparisonAttribute.md)
 - [WorkflowStepConditionAttributeValueComparisonSourceType](docs/WorkflowStepConditionAttributeValueComparisonSourceType.md)
 - [WorkflowStepConditionAttributeValueComparisonTarget](docs/WorkflowStepConditionAttributeValueComparisonTarget.md)
 - [WorkflowStepConditionCriterion](docs/WorkflowStepConditionCriterion.md)
 - [WorkflowStepConditionDocumentAttribute](docs/WorkflowStepConditionDocumentAttribute.md)
 - [WorkflowStepConditionDocumentStandardMetadata](docs/WorkflowStepConditionDocumentStandardMetadata.md)
 - [WorkflowStepConditionOperator](docs/WorkflowStepConditionOperator.md)
 - [WorkflowStepConditionSource](docs/WorkflowStepConditionSource.md)
 - [WorkflowStepDecision](docs/WorkflowStepDecision.md)
 - [WorkflowStepDecisionType](docs/WorkflowStepDecisionType.md)
 - [WorkflowStepDecisions](docs/WorkflowStepDecisions.md)
 - [WorkflowStepMapping](docs/WorkflowStepMapping.md)
 - [WorkflowStepTransition](docs/WorkflowStepTransition.md)
 - [WorkflowStepTransitionType](docs/WorkflowStepTransitionType.md)
 - [WorkflowSummary](docs/WorkflowSummary.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization

Endpoints do not require authorization.

