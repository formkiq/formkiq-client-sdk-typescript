#!/bin/bash
#
# generate-ts-client.sh
#
# Description:
#   This script uses OpenAPI Generator to produce a TypeScript Axios client
#   SDK for the FormKiQ API. It pulls the OpenAPI spec directly from the
#   formkiq-core GitHub repository (JWT variant) and outputs a generated
#   client into the `formkiq-ts-client` directory.
#
# Requirements:
#   - openapi-generator-cli installed and available in PATH
#   - curl access to GitHub raw URLs
#
# Usage:
#   ./generate-ts-client.sh
#
# Notes:
#   - The script always pulls the latest version from the `master` branch.
#   - Adjust the `-i` (input spec) or `-o` (output directory) values as needed.
#   - The generator type `typescript-axios` creates a fully typed Axios-based SDK.

VERSION=1.19.1

# URL to the OpenAPI specification (JWT variant)
OPENAPI_SPEC_URL="https://raw.githubusercontent.com/formkiq/formkiq-core/refs/heads/master/docs/openapi/openapi-jwt.yaml"

# Output directory for the generated client
OUTPUT_DIR="formkiq-client-sdk-typescript"

# Generate the TypeScript Axios client
openapi-generator generate \
  -i "$OPENAPI_SPEC_URL" \
  -g typescript-axios \
  -o "$OUTPUT_DIR" \
  --additional-properties=supportsES6=true,withInterfaces=true,npmName=formkiq-client-sdk-typescript,npmVersion="${VERSION}"

echo "TypeScript Axios client generated in: $OUTPUT_DIR"
cp "$OUTPUT_DIR/README.md" .
