'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
    function Logger() {
        _classCallCheck(this, Logger);

        this.noColor = false;
        this.base = _chalk2.default.black;
        this.logNoColor = _chalk2.default.white;
        this.noPrefix = false;

        // Colors
        this.green = _chalk2.default.green;
        this.yellow = _chalk2.default.yellow;
        this.red = _chalk2.default.red;
        this.cyan = _chalk2.default.cyan;
    }

    _createClass(Logger, [{
        key: 'NoColor',


        /* Removes the Color from all the Log Levels */
        value: function NoColor() {
            this.noColor = true;
        }
    }, {
        key: 'NoPrefix',


        /* Removes the Prefix from all the Log Levels */
        value: function NoPrefix() {
            this.noPrefix = true;
        }
    }, {
        key: 'addPrefix',


        /* Adds the Prefix to all the Log Levels */
        value: function addPrefix() {
            this.noPrefix = false;
        }
    }, {
        key: 'AddColor',


        /* Add's Color to all the Log Levels */
        value: function AddColor() {
            this.noColor = false;
        }
    }, {
        key: 'log',


        // Loggers

        /* 
         * Basic Log, No Prefix 
         */
        value: function log() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            /* Not Affected By No Color or No Prefix; TODO: Make Better */
            console.log(this.logNoColor(args));
        }
    }, {
        key: 'info',


        /* Log Info, Color: Green, Prefix: [INFO] */
        value: function info() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

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
        }
    }, {
        key: 'warn',


        /* Log Warn, Color: Yellow, Prefix: [INFO] */
        value: function warn() {
            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

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
        }
    }, {
        key: 'error',


        /* Log Error, Color: Red, Prefix: [ERROR] */
        value: function error() {
            for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
            }

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
        }
    }, {
        key: 'debug',


        /* Log Debug, Color: Cyan, Prefix: [DEBUG] */
        value: function debug() {
            for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                args[_key5] = arguments[_key5];
            }

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
        }
    }]);

    return Logger;
}();

;

var logger = new Logger();
module.exports = logger; // Not ES6 but dose not work with export defualt logger, Why? I don't know.