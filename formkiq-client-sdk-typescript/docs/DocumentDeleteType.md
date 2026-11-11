# DocumentDeleteType

Deletion mode for DELETE /documents/{documentId}. SOFT_DELETE temporarily hides the document until restored. HARD_DELETE deletes document metadata and current contents. CONTENT_ONLY deletes the current S3 object while preserving document metadata and associated records. Existing S3 versions are retained; this mode does not purge historical content.

## Enum

* `SoftDelete` (value: `'SOFT_DELETE'`)

* `HardDelete` (value: `'HARD_DELETE'`)

* `ContentOnly` (value: `'CONTENT_ONLY'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
