# inklog.js
Nodejs Logger

![npm](https://img.shields.io/npm/v/inklog.js) ![npm](https://img.shields.io/npm/dw/inklog.js) ![npm bundle size](https://img.shields.io/bundlephobia/min/inklog.js) ![Dependents (via libraries.io)](https://img.shields.io/librariesio/dependents/npm/inklog.js?label=npm%20dependents) ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Lucaslah/inklog.js)

## Install
- yarn: `yarn add inklog.js`
- npm `npm i inklog.js`

## Usage
| Name  | Usage              | Example                     | Color  | Prefix  |
|-------|--------------------|-----------------------------|--------|---------|
| error |   <logger>.error() | logger.error('Hello World') | Red    | [ERROR] |
| info  |   <logger>.info()  | logger.info('Hello World')  | Green  | [INFO]  |
| warn  |   <logger>.warn()  | logger.warn('Hello World')  | Yellow | [WARN]  |
| debug |   <logger>.debug() | logger.debug('Hello World') | Cyan   | [DEBUG] |
| log   |   <logger>.log()   | logger.log('Hello World')   | None   | [LOG]   |

## Development
1. Clone Repo: `gh repo clone Lucaslah/inklog.js` or `git clone https://github.com/lucaslah/inklog.js`
2. Install Dependencies: `npm install` or `yarn`
3. Build Code: `yarn build` or `npm run build`

## Examples
```javascript
const logger = require('inklog.js');

// Loggers
logger.debug('Debug Message');
logger.info('Info Message');
logger.error('Error Message');
logger.warn('Warn Message');
logger.log('Log Message');

// Extras
logger.AddColor();
logger.NoColor();
logger.addPrefix();
logger.NoPrefix();
```

## Runkit Example
https://runkit.com/embed/kcvxsyw90pq9
