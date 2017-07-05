# Parse Version

Takes a version in a format produced by NPM (e.g. `"1.9.4"`) and returns an object like:

```javascript
{
  major: 1,
  minor: 9,
  patch: 4
}
```

Throws if version string is incorrect.

## Install

```sh
npm install @scrambled/parse-version
```

## Use

```javascript
const parse = require("@scrambled/parse-version");

const { name, version } = require("../package.json");

const project = {
  name,
  version: parse(version)
};

JSON.stringify(project, null, 2) === `{
  "name": "my-awesome-project",
  "version": {
    "major": 1,
    "minor": 0,
    "patch": 9997
  }
}`
// true
```

## Develop

Clone the repository and hack on. Check out friendly NPM scripts:

```sh
npm run develop   # Watch and run tests
npm run debug     # Run tests with node inspector
```

PRs are very welcome.
