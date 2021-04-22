const chalk = require('chalk');

class Logger {
    constructor() {
        this.noColor = false;
        this.base = chalk.black;
        this.logNoColor = chalk.white;

        // Colors
        this.green = chalk.green;
        this.yellow = chalk.yellow;
        this.red = chalk.red;
        this.cyan = chalk.cyan;

    };

    /* Removes the Color from all the Log Levels */
    NoColor() {
        this.noColor = true;
    };

    /* Add's Color to all the Log Levels */
    AddColor() {
        this.noColor = false;
    };

    // Loggers

    /* 
     * Basic Log, No Prefix 
     */
    log(...args) {
        console.log(this.logNoColor(args));
    };

    /* Log Info, Color: Green, Prefix: [INFO] */
    info(...args) {
        if (this.noColor) {
            console.log('[INFO] ' + this.logNoColor(args));
        } else {
            console.log(this.base.bgGreen('[INFO]') + ' ' + this.green(args));
        };
    };

    /* Log Warn, Color: Yellow, Prefix: [INFO] */
    warn(...args) {
        if (this.noColor) {
            console.log('[INFO] ' + this.logNoColor(args));
        } else {
            console.log(this.base.bgYellow('[WARN]') + ' ' + this.yellow(args));
        };
    };

    /* Log Error, Color: Red, Prefix: [ERROR] */
    error(...args) {
        if (this.noColor) {
            console.log('[ERROR] ' + this.logNoColor(args));
        } else {
            console.log(this.base.bgRed('[ERROR]') + ' ' + this.yellow(args));
        };

    };

    /* Log Debug, Color: Cyan, Prefix: [DEBUG] */
    debug(...args) {
        if (this.noColor) {
            console.log('[DEBUG] ' + this.logNoColor(args));
        } else {
            console.log(this.base.bgCyan('[DEBUG]') + ' ' + this.cyan(args));
        };

    };

};

const logger = new Logger();
module.exports = logger;