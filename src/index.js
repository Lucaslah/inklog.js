import chalk from "chalk";

class Logger {
    constructor() {
        this.noColor = false;
        this.base = chalk.black;
        this.logNoColor = chalk.white;
        this.noPrefix = false;

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

    /* Removes the Prefix from all the Log Levels */
    NoPrefix() {
        this.noPrefix = true;
    };

    /* Adds the Prefix to all the Log Levels */
    addPrefix() {
        this.noPrefix = false;
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
        /* Not Affected By No Color or No Prefix; TODO: Make Better */
        console.log(this.logNoColor(args));
    };

    /* Log Info, Color: Green, Prefix: [INFO] */
    info(...args) {
        if (this.noColor) {
            if (this.noPrefix) {
                console.log(this.logNoColor(args));
            } else {
                console.log('[INFO] ' + this.logNoColor(args));
            }
        } else {
            if (this.noPrefix) {
                console.log(this.green(args));
            } else {
                console.log(this.base.bgGreen('[INFO]') + ' ' + this.green(args));
            }
        };
    };

    /* Log Warn, Color: Yellow, Prefix: [INFO] */
    warn(...args) {
        if (this.noColor) {
            if (this.noPrefix) {
                console.log(this.logNoColor(args));
            } else {
                console.log('[WARN] ' + this.logNoColor(args));
            }
        } else {
            if (this.noPrefix) {
                console.log(this.yellow(args));
            } else {
                console.log(this.base.bgYellow('[WARN]') + ' ' + this.yellow(args));
            }
        };
    };

    /* Log Error, Color: Red, Prefix: [ERROR] */
    error(...args) {
        if (this.noColor) {
            if (this.noPrefix) {
                console.log(this.logNoColor(args));
            } else {
                console.log('[ERROR] ' + this.logNoColor(args));
            }
        } else {
            if (this.noPrefix) {
                console.log(this.red(args));
            } else {
                console.log(this.base.bgRed('[ERROR]') + ' ' + this.red(args));
            }
        };

    };

    /* Log Debug, Color: Cyan, Prefix: [DEBUG] */
    debug(...args) {
        if (this.noColor) {
            if (this.noPrefix) {
                console.log(this.logNoColor(args));
            } else {
                console.log('[DEBUG] ' + this.logNoColor(args));
            }
        } else {
            if (this.noPrefix) {
                console.log(this.cyan(args));
            } else {
                console.log(this.base.bgCyan('[DEBUG]') + ' ' + this.cyan(args));
            }
        };

    };

};

const logger = new Logger();
module.exports = logger; // Not ES6 but dose not work with export defualt logger, Why? I don't know.