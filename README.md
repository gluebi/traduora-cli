# traduora-cli
## A package for talking to the Traduora API via npm scripts

### Installation

yarn:
`yarn add -D PACKAGE_NAME`

npm:
`npm i --save-dev PACKAGE_NAME`

### Usage

Go to your project in traduora and get an API Key.
Also get the project ID from the URL.

Create an `.env` file with the following:
```
TRADUORACLIENTID="<REPLACE_WITH_CLIENT_ID>"
TRADUORACLIENTSECRET="<REPLACE_WITH_CLIENT_SECRET>"
TRADUORABASEURL="<REPLACE_WITH_BASE_URL>"
TRADUORAPROJECTID="<REPLACE_WITH_PROJECT_ID>"
```

Add the following commands to your `package.json` under the `scripts` section.

`"traduora-cli:stats": "yarn traduora getStats"`

`"traduora-cli:addTerm": "yarn traduora addTerm"`

You can then run these commands from the `package.json`

### Todo

Implement remaining traduora API functions.
