#!/usr/bin/bash

MARKER='// Schema Imports'

sed -i "\|$MARKER|,$ { \|$MARKER|b; d }" src/IntegrationSchema.ts

for SCHEMA_FILENAME in $(ls src/schemas); do
    SCHEMA=$(echo $SCHEMA_FILENAME | cut -d . -f 1)
    sed -i "\|$MARKER|a\
import $SCHEMA from \"./schemas/$SCHEMA_FILENAME\";\n\
IntegrationSchema.addSchema($SCHEMA);
    " src/IntegrationSchema.ts
done

git add src/IntegrationSchema.ts
