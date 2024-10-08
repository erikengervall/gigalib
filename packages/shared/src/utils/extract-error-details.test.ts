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
