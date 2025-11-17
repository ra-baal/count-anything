import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Alert } from "@mui/material";
import FormCard from "@/components/auth/FormCard";
import PageHeader from "@/components/auth/PageHeader";
import ValidatedTextField from "@/components/auth/ValidatedTextField";
import PrimaryButton from "@/components/auth/PrimaryButton";
import FormFooter from "@/components/auth/FormFooter";
import {
  validateEmail,
  validatePassword,
  validatePasswordMatch,
} from "@/common/validation";
import Path from "@/common/path";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleRegister() {
    setError("");

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError("Proszę wypełnić wszystkie pola");
      return;
    }

    if (!validatePassword(password)) {
      setError("Hasło musi mieć co najmniej 6 znaków");
      return;
    }

    if (!validatePasswordMatch(password, confirmPassword)) {
      setError("Hasła nie są identyczne");
      return;
    }

    console.log("Register attempt:", { email, password });
    setSuccess(true);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      handleRegister();
    }
  }

  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  const isConfirmPasswordValid = validatePasswordMatch(password, confirmPassword);

  if (success) {
    return (
      <FormCard>
        <Stack spacing={3}>
          <PageHeader title="Sign up" subtitle="Account created successfully" />

          <Alert severity="success" sx={{ borderRadius: 2 }}>
            Rejestracja zakończona sukcesem! Możesz się teraz zalogować.
          </Alert>

          <PrimaryButton
            variant="contained"
            onClick={() => navigate(Path.Login, { replace: true })}
            fullWidth
          >
            Go to login
          </PrimaryButton>
        </Stack>
      </FormCard>
    );
  }

  return (
    <FormCard>
      <Stack spacing={3}>
        <PageHeader title="Sign up" subtitle="Create your account" />

        <Stack spacing={2.5}>
          {error && (
            <Alert severity="error" sx={{ borderRadius: 2 }}>
              {error}
            </Alert>
          )}

          <ValidatedTextField
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            fullWidth
            required
            autoComplete="email"
            isValid={isEmailValid}
          />

          <ValidatedTextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            fullWidth
            required
            autoComplete="new-password"
            helperText="Minimum 6 characters"
            isValid={isPasswordValid}
          />

          <ValidatedTextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            fullWidth
            required
            autoComplete="new-password"
            isValid={isConfirmPasswordValid}
          />

          <PrimaryButton
            variant="contained"
            onClick={handleRegister}
            disabled={!email.trim() || !password.trim() || !confirmPassword.trim()}
            fullWidth
            sx={{ mt: 2 }}
          >
            Sign up
          </PrimaryButton>
        </Stack>

        <FormFooter
          text="Already have an account?"
          linkText="Log in now!"
          to={Path.Login}
        />
      </Stack>
    </FormCard>
  );
}

