API Error class
===========================
[![Test passing](https://travis-ci.org/HopeUA/error.module.svg?branch=master)](https://travis-ci.org/HopeUA/error.module/)

Custom error type for REST applications

Usage
-----
    // Import
    import ApiError from '@hope/error';
    // Use
    let error = new ApiError({
        message: "Custom error",
        code: 100,
        status: 500
    });
    // Send response
    response.json({
        error: {
            code: 'APP-' + error.code,
            message: error.message,
            stack: error.stack,
            parent: {
                message: error.parent.message,
                stack: error.parent.stack
            }
        }
    });
