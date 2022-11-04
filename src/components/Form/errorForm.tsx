import { Alert } from '@mui/material';

interface ErrorFormProps {
  errorMessage: string;
}

export const ErrorForm = ({ errorMessage }: ErrorFormProps) => {
  return (
    <>
      {errorMessage && (
        <Alert variant="filled" severity="error">
          {errorMessage}
        </Alert>
      )}
    </>
  );
};
