import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";
import ValidatedTextField from "@/components/molecules/ValidatedTextField";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import FormFooter from "@/components/molecules/FormFooter";
import Path from "@/common/path";
import { useAuthForm } from "@/hooks/useAuthForm";

interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const {
    email,
    password,
    isEmailValid,
    canSubmit,
    setEmail,
    setPassword,
    validateForm,
  } = useAuthForm({ mode: "login" });

  function handleLogin() {
    if (!validateForm()) return;
    onSubmit({ email, password });
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") handleLogin();
  }

  return (
    <>
      <Stack spacing={3}>
        <ValidatedTextField
          label="Email"
          type="email"
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          fullWidth
          required
          autoComplete="current-password"
          showValidation={false}
        />

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Link
            to={Path.ResetPassword}
            style={{
              textDecoration: "none",
              color: "#1976d2",
              fontSize: "0.875rem",
            }}
          >
            Forgot password?
          </Link>
        </Box>

        <PrimaryButton
          onClick={handleLogin}
          disabled={!canSubmit}
          text="Log in"
        />
      </Stack>

      <FormFooter
        text="Don't have an account?"
        linkText="Sign up now!"
        to={Path.Register}
      />
    </>
  );
}
