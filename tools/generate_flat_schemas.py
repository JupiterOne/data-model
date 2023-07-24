import json
import os
import pandas as pd

# Get schemas out of schema files
path_to_json = f"{os.getcwd()}/../src/schemas/"
json_files = [
    pos_json for pos_json in os.listdir(path_to_json) if pos_json.endswith(".json")
]
schemas = []
for json_file in json_files:
    with open(f"{path_to_json}{json_file}") as f:
        schemas.append(json.load(f))

# Remove the hashes in references
schema_map = {}
for schema in schemas:
    schema = json.loads(
        json.dumps(schema)
        .replace('"$id": "#', '"$id": "')
        .replace('"$ref": "#', '"$ref": "')
    )
    schema_map[schema["$id"]] = schema

# Define function to recursivley get all properties for a class and it's ancestors
def get_properties(class_name: str, schema_map: dict):
    # Get schema for this class
    schema = schema_map[class_name]

    # Initialize variables
    self_properties = []
    self_required_properties = set()
    excluded_properties = set()
    inherited_properties = []

    # Handle properties referenced directly in this class
    self_properties.extend([(k, v) for k, v in schema.get("properties", {}).items()])
    self_required_properties.update(schema.get("required", []))
    for item in schema.get("allOf", []):
        self_properties.extend([(k, v) for k, v in item.get("properties", {}).items()])
        self_required_properties.update(item.get("required", []))
        excluded_properties.update(item.get("excludes", []))

    # Get inherited properties
    for item in schema.get("allOf", []):
        if "$ref" in item:
            inherited_properties = get_properties(
                class_name=item["$ref"], schema_map=schema_map
            )
            break

    # Construct return value
    all_properties = []

    for prop in self_properties:
        if prop[0] not in excluded_properties:
            all_properties.append(
                {
                    "class": class_name,
                    "property": prop[0],
                    "required": prop[0] in self_required_properties,
                    "is_inherited": False,
                    "defining_class": class_name,
                    "type": prop[1].get("type", "multiple"),
                    "description": prop[1].get("description", ""),
                    "full_spec": json.dumps(prop[1]),
                }
            )

    for prop in inherited_properties:
        if prop["property"] not in excluded_properties:
            prop["class"] = class_name
            prop["is_inherited"] = True
            all_properties.append(prop)

    return all_properties


# Calculate properties
properties = []
for class_name in schema_map.keys():
    properties.extend(get_properties(class_name=class_name, schema_map=schema_map))

# Output results to csv
df = pd.DataFrame.from_dict(properties)
df.to_csv(os.getcwd() + "/flat_class_schemas.csv", index=False)
