import { extractErrorDetails } from './extract-error-details';

describe('extractErrorDetails', () => {
  describe('known errors', () => {
    it('should return the error name and message for Error', () => {
      const error = new Error('This is an error');

      const result = extractErrorDetails(error);

      expect(result).toEqual({
        errorName: 'Error',
        errorMessage: 'This is an error',
        errorStack: error.stack,
      });
    });

    it('should return the error name and message for custom Error class', () => {
      class CustomError extends Error {}
      const customError = new CustomError('This is an error');

      const result = extractErrorDetails(customError);

      expect(result).toEqual({
        errorName: 'Error',
        errorMessage: 'This is an error',
        errorStack: customError.stack,
      });
    });

    it('should handle custom error with "errorMessage" property', () => {
      class ErrorWithErrorMessage extends Error {
        errorMessage: string;
        constructor(message: string) {
          super();
          this.errorMessage = message;
        }
      }

      const errorMessage = 'potato with message';
      const error = new ErrorWithErrorMessage(errorMessage);
      const result = extractErrorDetails(error);

      expect(result).toEqual({
        errorName: 'Error',
        errorMessage: errorMessage,
        errorStack: error.stack,
      });
    });

    it('should handle custom error with "internalErrorMessage" property', () => {
      class ErrorWithInternalErrorMessage extends Error {
        internalErrorMessage: string;
        constructor(message: string) {
          super();
          this.internalErrorMessage = message;
        }
      }

      const errorMessage = 'potato with internal message';
      const error = new ErrorWithInternalErrorMessage(errorMessage);
      const result = extractErrorDetails(error);

      expect(result).toEqual({
        errorName: 'Error',
        errorMessage: errorMessage,
        errorStack: error.stack,
      });
    });

    it('should handle custom error with "externalErrorMessage" property', () => {
      class ErrorWithExternalErrorMessage extends Error {
        externalErrorMessage: string;
        constructor(message: string) {
          super();
          this.externalErrorMessage = message;
        }
      }

      const errorMessage = 'potato with external message';
      const error = new ErrorWithExternalErrorMessage(errorMessage);
      const result = extractErrorDetails(error);

      expect(result).toEqual({
        errorName: 'Error',
        errorMessage: errorMessage,
        errorStack: error.stack,
      });
    });
  });

  describe('unknown errors', () => {
    describe('with empty content', () => {
      it('should return the error name and message when the error is an empty string', () => {
        const error = '';

        const result = extractErrorDetails(error);

        expect(result).toMatchSnapshot();
      });

      it('should return the error name and message when the error is null', () => {
        const error = null;

        const result = extractErrorDetails(error);

        expect(result).toMatchSnapshot();
      });

      it('should return the error name and message when the error is undefined', () => {
        const error = undefined;

        const result = extractErrorDetails(error);

        expect(result).toMatchSnapshot();
      });
    });

    describe('with content', () => {
      it('should return the error name and message when the error is string', () => {
        const error = 'This is an error';

        const result = extractErrorDetails(error);

        expect(result).toMatchSnapshot();
      });

      it('should return the error name and message when the error is a number', () => {
        const error = 123;

        const result = extractErrorDetails(error);

        expect(result).toMatchSnapshot();
      });

      it('should return the error name and message when the error is a boolean', () => {
        const error = true;

        const result = extractErrorDetails(error);

        expect(result).toMatchSnapshot();
      });

      it('should return the error name and message when the error is an object', () => {
        const error = {
          foo: 'bar',
        };

        const result = extractErrorDetails(error);

        expect(result).toMatchSnapshot();
      });

      it('should return the error name and message when the error is an array', () => {
        const error = ['foo', 'bar'];

        const result = extractErrorDetails(error);

        expect(result).toMatchSnapshot();
      });

      it('should return the error name and message when the error is a function', () => {
        const error = () => void 0;

        const result = extractErrorDetails(error);

        expect(result).toMatchSnapshot();
      });
    });
  });
});
