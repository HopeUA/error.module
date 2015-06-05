/**
 * API Error class
 *
 * @module @hope/error
 * @version 1.0.1
 *
 * @author Sergey Sadovoi [sergey@hope.ua]
 * @license MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var ApiError = (function (_Error) {
    /**
     * ApiError constructor
     *
     * @param {string} [message] - Error message
     * @param {int} [code]       - App error code
     * @param {int} [status]     - HTTP status code
     * @param {string} [stack]   - Error stack trace
     * @param {Error} [parent]   - Parent error object, this from have been created
     */

    function ApiError() {
        var _ref = arguments[0] === undefined ? {} : arguments[0];

        var _ref$message = _ref.message;
        var message = _ref$message === undefined ? 'Unexpected error' : _ref$message;
        var _ref$code = _ref.code;
        var code = _ref$code === undefined ? 500 : _ref$code;
        var _ref$status = _ref.status;
        var status = _ref$status === undefined ? 500 : _ref$status;
        var _ref$stack = _ref.stack;
        var stack = _ref$stack === undefined ? '' : _ref$stack;
        var _ref$parent = _ref.parent;
        var parent = _ref$parent === undefined ? {} : _ref$parent;

        _classCallCheck(this, ApiError);

        _get(Object.getPrototypeOf(ApiError.prototype), 'constructor', this).call(this);

        if (stack) {
            Object.defineProperty(this, 'stack', {
                value: stack
            });
        } else if (Error.hasOwnProperty('captureStackTrace')) {
            Error.captureStackTrace(this, this.constructor);
        }

        Object.defineProperty(this, 'code', {
            value: code
        });

        Object.defineProperty(this, 'status', {
            value: status
        });

        Object.defineProperty(this, 'message', {
            value: message
        });

        Object.defineProperty(this, 'parent', {
            value: parent
        });
    }

    _inherits(ApiError, _Error);

    _createClass(ApiError, [{
        key: 'name',

        /**
         *
         * @returns {string} - This object's name
         */
        get: function () {
            return this.constructor.name;
        }
    }], [{
        key: 'createFromError',

        /**
         * Create new ApiError child
         *
         * @param {Error} error - Parent error object
         * @returns {ApiError}
         */
        value: function createFromError(error) {
            if (error instanceof Error) {
                return new ApiError({
                    message: error.message,
                    stack: error.stack,
                    parent: error
                });
            }

            return new ApiError();
        }
    }]);

    return ApiError;
})(Error);

exports['default'] = ApiError;
module.exports = exports['default'];
