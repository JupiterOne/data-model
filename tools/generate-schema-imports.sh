#!/usr/bin/env bash

MARKER='// Schema Imports'

sed -i "" -e "\|$MARKER|,$ {" -e "\|$MARKER|b" -e d -e "}" src/IntegrationSchema.ts

for SCHEMA_FILENAME in $(ls src/schemas | sort); do
    SCHEMA=$(echo $SCHEMA_FILENAME | cut -d . -f 1)
    sed -i "" "\|$MARKER|a\\
import $SCHEMA from \"./schemas/$SCHEMA_FILENAME\";\\
IntegrationSchema.addSchema($SCHEMA);\\
" src/IntegrationSchema.ts
done

git add src/IntegrationSchema.ts
