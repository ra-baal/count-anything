import { useState, useCallback } from "react";
import {
  validateEmail,
  validatePassword,
  validatePasswordMatch,
} from "@/common/validation";

interface UseAuthFormOptions {
  mode: "login" | "register";
}

export function useAuthForm({ mode }: UseAuthFormOptions) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const isEmailValid = validateEmail(email);

  const isPasswordValid =
    mode === "register" ? validatePassword(password) : true;

  const isConfirmPasswordValid =
    mode === "register"
      ? validatePasswordMatch(password, confirmPassword)
      : true;

  const canSubmit =
    email.trim().length > 0 &&
    password.trim().length > 0 &&
    (mode !== "register" || confirmPassword.trim().length > 0);

  const validateForm = useCallback(() => {
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("All fields are required");
      return false;
    }

    if (mode === "register") {
      if (!password.trim() || !confirmPassword.trim()) {
        setError("All fields are required");
        return false;
      }
      if (!validatePassword(password)) {
        setError("Password must have at least 6 characters");
        return false;
      }
      if (!validatePasswordMatch(password, confirmPassword)) {
        setError("Passwords do not match");
        return false;
      }
    }

    return true;
  }, [email, password, confirmPassword, mode]);

  return {
    email,
    password,
    confirmPassword,
    error,
    isEmailValid,
    isPasswordValid,
    isConfirmPasswordValid,
    canSubmit,
    setEmail,
    setPassword,
    setConfirmPassword,
    setError,
    validateForm,
  };
}
