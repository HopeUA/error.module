import { expect } from 'chai';
import ApiError from '../index.js';

describe('Api Error', () => {
    it('should initialize', () => {
        let error = new ApiError({
            message: 'Error message',
            code: 100
        });

        expect(error).to.be.an.instanceof(ApiError);
        expect(error).to.be.an.instanceof(Error);

        expect(error.name).to.be.equal('ApiError');
    });

    describe('#message', () => {
        it('should return message', () => {
            let error = new ApiError({
                message: 'Error message',
                code: 100
            });

            expect(error.message).to.be.equal('Error message');
        });

        it('should return default message "Unexpected error"', () => {
            let error = new ApiError();

            expect(error.message).to.be.equal('Unexpected error');
        });

        it('should be immutable', () => {
            let testImmutable = () => {
                let error = new ApiError();
                error.message = 'Another message';
            };

            expect(testImmutable).to.throw(TypeError);
        });
    });

    describe('#code', () => {
        it('should return code', () => {
            let error = new ApiError({
                message: 'Error message',
                code: 100
            });

            expect(error.code).to.be.equal(100);
        });

        it('should return default code = 500', () => {
            let error = new ApiError({
                message: 'Error message'
            });

            expect(error.code).to.be.equal(500);
        });

        it('should be immutable', () => {
            let testImmutable = () => {
                let error = new ApiError();
                error.code = 200;
            };

            expect(testImmutable).to.throw(TypeError);
        });
    });

    describe('#status', () => {
        it('should return status', () => {
            let error = new ApiError({
                message: 'Error message',
                code: 100,
                status: 200
            });

            expect(error.status).to.be.equal(200);
        });

        it('should return default status = 500', () => {
            let error = new ApiError({
                message: 'Error message'
            });

            expect(error.status).to.be.equal(500);
        });

        it('should be immutable', () => {
            let testImmutable = () => {
                let error = new ApiError();
                error.status = 200;
            };

            expect(testImmutable).to.throw(TypeError);
        });
    });

    describe('#stack', () => {
        it('should return stack', () => {
            let error = new ApiError({
                message: 'Error message'
            });

            expect(error.stack).to.match(/\/test\/errorSpec\.js:\d+:\d+/);
            expect(error.stack).to.string('ApiError: Error message');
        });
    });

    describe('#parent', () => {
        it('shoult return parent Error', function(){
            let parentError = new Error('Parent error message');
            let error = new ApiError({
                message: 'Error message',
                parent: parentError
            });

            expect(error.parent).to.be.equal(parentError);
        });

        it('should be immutable', () => {
            let testImmutable = () => {
                let error = new ApiError();
                error.parent = new Error();
            };

            expect(testImmutable).to.throw(TypeError);
        });
    });

    describe('#createFromError', () => {
        it('should be copied from Error', () => {
            let parentError = new Error('Error message');
            let error = ApiError.createFromError(parentError);

            expect(error.message).to.be.equal(parentError.message);
            expect(error.stack).to.be.equal(parentError.stack);
        });

        it('should return default error', () => {
            let error = ApiError.createFromError();

            expect(error).to.be.an.instanceof(ApiError);
        });
    });
});
