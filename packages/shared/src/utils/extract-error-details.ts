type ErrorDetails = {
  errorMessage: string;
  errorName: string;
  errorStack?: string;
};

const GENERIC_ERROR_MESSAGE = 'An error occurred';

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
      errorName: GENERIC_ERROR_MESSAGE,
    };
  }

  if (typeof error !== 'string' && typeof error !== 'object') {
    return {
      errorMessage: `${error ?? 'Unknown error (with unknown type)'}`,
      errorName: GENERIC_ERROR_MESSAGE,
    };
  }

  return {
    errorMessage: JSON.stringify(error),
    errorName: GENERIC_ERROR_MESSAGE,
  };
}
