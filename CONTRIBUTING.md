## Guide

1. Install nodebuilder
```sh
git clone https://github.com/feelgood-interface/nodebuilder.git
cd nodebuilder
npm i
```

2. Get an API key from Twenty
```sh
set API_KEY <API_key_from_Twenty_settings>
```
3. Use the API key to download the OpenApi spec


```sh
curl --request GET \
        --url $TWENTY_URL/open-api/core \
        --header "Accept: application/json" \
        --header "Authorization: Bearer $API_KEY" > src/input/openApi/twenty.json
```

E.g. `set TWENTY_URL https://api-demo.twenty.com`

Modify api:
```sh
# Use Prettier to clean up twenty.json, and then...
jq 'walk(if type == "object" and has("enum") then .enum |= sort else . end)' src/input/openApi/twenty.json > src/input/openApi/twenty.json
```


4. Generate docs
```sh
npm run generate
# Follow guide to create files in src/output/
```

Copy src/output/ files to n8n node. Keep GenericFunctions and the top of Twenty.node.ts

5. Build the node
```sh
npm run build
```


## Testing

```sh
cd ~/.n8n/custom/
pnpm link ${N8N_NODES_TWENTY FOLDER}
```
