import { useState, useCallback, useMemo } from "react";
import { z } from "zod";

interface UseAuthFormOptions {
  mode: "login" | "register";
}

export const minPasswordLength = 9;

const loginSchema = z.object({
  email: z
    .email({ message: "Podaj poprawny adres email" })
    .min(1, "Email jest wymagany"),

  password: z
    .string()
    .min(
      minPasswordLength,
      `Hasło musi mieć co najmniej ${minPasswordLength} znaków`
    )
    .regex(/[A-Z]/, "Hasło musi zawierać przynajmniej jedną wielką literę")
    .regex(/\d/, "Hasło musi zawierać przynajmniej jedną cyfrę"),
});

const registerSchema = loginSchema
  .extend({
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Hasła nie pasują do siebie",
    path: ["confirmPassword"],
  });

export function useAuthForm({ mode }: UseAuthFormOptions) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const schema = useMemo(
    () => (mode === "login" ? loginSchema : registerSchema),
    [mode]
  );

  const canSubmit = useMemo(() => {
    if (!email || !password) return false;
    if (mode === "register" && !confirmPassword) return false;
    return true;
  }, [email, password, confirmPassword, mode]);

  const validateForm = useCallback(() => {
    const result = schema.safeParse({ email, password, confirmPassword });

    if (!result.success) {
      const firstIssue = result.error.issues[0];
      setError(firstIssue.message);
      return false;
    }

    setError("");
    return true;
  }, [email, password, confirmPassword, schema]);

  const onFieldChange = useCallback((setter: (v: string) => void) => {
    return (value: string) => {
      setter(value);
      setError("");
    };
  }, []);

  return {
    email,
    password,
    confirmPassword,
    error,
    canSubmit,

    setEmail: onFieldChange(setEmail),
    setPassword: onFieldChange(setPassword),
    setConfirmPassword: onFieldChange(setConfirmPassword),

    validateForm,
  };
}
