# AWS SDK plus X-Ray

## Install

```bash
npm install --save aws-sdk-plus-xray
npm install --save-dev aws-sdk
```

## Usage

```js
const AWS = require('aws-sdk-plus-xray');
```

### Disabling X-Ray support

Useful when running tests.

```bash
XRAY_DISABLED="true"
```
