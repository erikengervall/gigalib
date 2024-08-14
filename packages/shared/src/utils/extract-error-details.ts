import { copywrite } from '../constants';

type ErrorDetails = {
  errorMessage: string;
  errorName: string;
  errorStack?: string;
};

export function extractErrorDetails(error: unknown): ErrorDetails {
  if (error instanceof Error) {
    return {
      errorMessage: error.message,
      errorName: error.name,
      errorStack: error.stack,
    };
  }

  if (!error) {
    return {
      errorMessage: 'Unknown error (with empty content)',
      errorName: copywrite.genericErrorMessage,
    };
  }

  if (typeof error !== 'string' && typeof error !== 'object') {
    return {
      errorMessage: `${error ?? 'Unknown error (with unknown type)'}`,
      errorName: copywrite.genericErrorMessage,
    };
  }

  return {
    errorMessage: JSON.stringify(error),
    errorName: copywrite.genericErrorMessage,
  };
}
