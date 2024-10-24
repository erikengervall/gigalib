type ErrorDetails = {
  errorMessage: string;
  errorName: string;
  errorStack?: string;
};

const GENERIC_ERROR_MESSAGE = 'An error occurred';

export function extractErrorDetails(error: unknown): ErrorDetails {
  if (error instanceof Error) {
    let errorMessage = error.message;

    if (
      'errorMessage' in error &&
      typeof error.errorMessage === 'string' &&
      error.errorMessage.length > 0
    ) {
      errorMessage = error.errorMessage;
    } else if (
      'externalErrorMessage' in error &&
      typeof error.externalErrorMessage === 'string' &&
      error.externalErrorMessage.length > 0
    ) {
      errorMessage = error.externalErrorMessage;
    } else if (
      'internalErrorMessage' in error &&
      typeof error.internalErrorMessage === 'string' &&
      error.internalErrorMessage.length > 0
    ) {
      errorMessage = error.internalErrorMessage;
    }

    return {
      errorMessage,
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
