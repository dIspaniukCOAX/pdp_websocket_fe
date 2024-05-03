export const REGEXP = {
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*+=?&.,;:_-])[A-Za-z\d@$!%*+=?&.,;:_-]{8,}$/,
  GOOGLE_LOCATION: /^(https?:\/\/)?(maps\.app\.goo\.gl|www\.google\.com)\/.+$/,
  EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
} as const;
