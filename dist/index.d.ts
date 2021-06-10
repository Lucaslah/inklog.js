/**
 * A Chalk Based Logger
 * @constructor
 */
declare class Logger {
    noColor: Boolean;
    private base;
    private logNoColor;
    noPrefix: Boolean;
    private green;
    private yellow;
    private red;
    private cyan;
    constructor();
    /**
     * Removes the Color from all the Log Levels
     * @type {void}
     */
    NoColor(): void;
    /**
     * Removes the Prefix from all the Log Levels
     * @type {void}
     */
    NoPrefix(): void;
    /**
     * Adds the Prefix to all the Log Levels
     * @type {void}
     */
    addPrefix(): void;
    /**
     * Add's Color to all the Log Levels
     * @type {void}
     */
    AddColor(): void;
    /**
     * Basic Log, Prefix: [LOG]
     * @param  {...any} args
     */
    log(...args: any[]): void;
    /**
     * Log Info, Color: Green, Prefix: [INFO]
     * @param  {...any} args
     */
    info(...args: any[]): void;
    /**
     * Log Warn, Color: Yellow, Prefix: [INFO]
     * @param  {...any} args
     */
    warn(...args: any[]): void;
    /**
     * Log Error, Color: Red, Prefix: [ERROR]
     * @param  {...any} args
     */
    error(...args: any[]): void;
    /**
     * Log Debug, Color: Cyan, Prefix: [DEBUG]
     * @param  {...any} args
     */
    debug(...args: any[]): void;
}
declare const logger: Logger;
export = logger;
