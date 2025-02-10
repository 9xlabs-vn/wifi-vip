export interface AuthError extends Error {
  code?: string;
  status?: number;
  message: string;
}