import { regex } from "./regex";

export function validateEmail(email: string): boolean {
  if (!email.trim()) {
    return false;
  }
  return regex.email.test(email);
}

export function validatePassword(
  password: string,
  minLength: number = 6
): boolean {
  return password.length >= minLength;
}

export function validatePasswordMatch(
  password: string,
  confirmPassword: string
): boolean {
  return password === confirmPassword && password.length > 0;
}
