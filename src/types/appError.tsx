interface AppError {
  type?: string;
  errorMessage: string | null;
  errorData: any;
}

export default AppError;
