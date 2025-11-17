export function validateEmail(email: string): boolean {
  if (!email.trim()) {
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password: string, minLength: number = 6): boolean {
  return password.length >= minLength;
}

export function validatePasswordMatch(password: string, confirmPassword: string): boolean {
  return password === confirmPassword && password.length > 0;
}

