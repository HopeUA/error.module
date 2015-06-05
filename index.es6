/**
 * API Error class
 *
 * @module @hope/error
 * @version 1.0.1
 *
 * @author Sergey Sadovoi [sergey@hope.ua]
 * @license MIT
 */

export default class ApiError extends Error {
    /**
     * ApiError constructor
     *
     * @param {string} [message] - Error message
     * @param {int} [code]       - App error code
     * @param {int} [status]     - HTTP status code
     * @param {string} [stack]   - Error stack trace
     * @param {Error} [parent]   - Parent error object, this from have been created
     */
    constructor({message = 'Unexpected error', code = 500, status = 500, stack = '', parent = {}} = {}) {
        super();

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

    /**
     *
     * @returns {string} - This object's name
     */
    get name() {
        return this.constructor.name;
    }

    /**
     * Create new ApiError child
     *
     * @param {Error} error - Parent error object
     * @returns {ApiError}
     */
    static createFromError(error) {
        if (error instanceof Error) {
            return new ApiError({
                message: error.message,
                stack: error.stack,
                parent: error
            });
        }

        return new ApiError();
    }
}
