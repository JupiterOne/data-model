#!/usr/bin/env bash

MARKER='// Schema Imports'

function sed_delete_after_marker() {
    sed -i"" -e "\|$MARKER|,$ {" -e "\|$MARKER|b" -e "${1}d" -e "}" src/IntegrationSchema.ts
}

sed_delete_after_marker

for SCHEMA in $(ls src/schemas | sed "s/\.json$//" | sort -f); do
    sed -i"" "\|$MARKER|a\\
import $SCHEMA from \"./schemas/$SCHEMA.json\";\\
IntegrationSchema.addSchema($SCHEMA);\\
" src/IntegrationSchema.ts

    # Stabilize output between MacOS and Linux by removing empty lines in text
    # after the marker
    sed_delete_after_marker "/^$/"
done

git add src/IntegrationSchema.ts
