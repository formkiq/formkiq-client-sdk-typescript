// example.ts (TypeScript)
import axios from "axios";
import { Configuration, DocumentsApi } from "formkiq-client-sdk-typescript";
import fs from "node:fs";

const FORMKIQ_API_URL = process.env.FORMKIQ_API_URL || "https://your-formkiq-api.example.com";
const JWT = process.env.JWT || "YOUR_JWT_ACCESS_TOKEN";
const SITE_ID = "default";

/**
 * Demonstrates how to:
 *  1. Configure the FormKiQ Typescript Axios client
 *  2. Add a document to a FormKiQ site
 *  3. Retrieve that same document’s metadata
 *
 * Requirements:
 *  - FORMKIQ_API_URL must point to your FormKiQ API endpoint
 *  - JWT must be a valid OAuth access token (not ID token)
 *  - SITE_ID must be a site you have permission to access
 *
 * The client is generated using: openapi-generator-cli -g typescript-axios
 */
async function main() {
  // Create a configuration object that will be used by the API client.
  // `basePath` sets the FormKiQ API endpoint to call.
  // `baseOptions.headers` automatically adds the Authorization header
  // to every outgoing request.
  const cfg = new Configuration({
    basePath: FORMKIQ_API_URL,
    baseOptions: {
      headers: { Authorization: `Bearer ${JWT}` }, // Send JWT for all requests
    },
  });

  // Initialize the Documents API using our configuration.
  const api = new DocumentsApi(cfg);

  // Add a document to FormKiQ.
  // - First argument is the document body (path, contentType, content)
  // - Second argument is the siteId (FormKiQ supports multiple sites)
  const addResp = await api.addDocument(
    {
      path: "inbox/hello.txt",      // Virtual path inside FormKiQ
      contentType: "text/plain",    // MIME type of the content
      content: "Hello World",       // Content of the file (string or base64)
    },
    SITE_ID
  );

  // The response may be wrapped in AxiosResponse, so access `.data`
  const documentId = addResp.data.documentId;
  console.log("✅ Added documentId:", documentId);

  // Retrieve document metadata
  // - First argument: the documentId returned when adding the document
  // - Second argument: the siteId again
  const getResp = await api.getDocument(documentId, SITE_ID);

  // Log the returned metadata (does not include full file content)
  console.log("✅ Metadata:", getResp.data);

  // Upload a file upto 5GB in size
  const filePath = "hello.txt";
  const contentType = "text/plain";
  const fileBytes = fs.readFileSync("example.ts"); // Buffer
  const contentLength = fileBytes.length;

  // 2) Ask FormKiQ for a pre-signed S3 upload URL
  //    Body typically needs: path, contentType, contentLength (bytes)
  const uploadResp = await api.addDocumentUpload(
    {
      path: "example.ts",
      contentType,
      contentLength,
    },
    SITE_ID
  );

  console.log("✅ Upload S3 Presigned Url:", uploadResp.data.url);

  const presignedUrl: string = uploadResp.data.url;
  if (!presignedUrl) {
    throw new Error("Missing upload URL in addDocumentUpload response");
  }

  await axios.put(presignedUrl, fileBytes, {
    // headers: s3Headers,
    maxBodyLength: Infinity, // for large uploads
  });

  console.log("✅ Upload complete");
}

// Execute main() and exit cleanly; if an error occurs, print and exit with failure code.
main().catch((e) => {
  console.error("❌ Error:", e);
  process.exit(1);
});
