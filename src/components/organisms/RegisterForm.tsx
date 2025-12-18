import { Stack, Alert } from "@mui/material";
import ValidatedTextField from "@/components/molecules/ValidatedTextField";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import FormFooter from "@/components/molecules/FormFooter";
import Path from "@/common/path";
import { minPasswordLength, useAuthForm } from "@/hooks/useAuthForm";

interface RegisterFormOrganismProps {
  onSubmit: (data: { email: string; password: string }) => void;
  message?: string;
}

export default function RegisterFormOrganism({
  onSubmit,
  message,
}: RegisterFormOrganismProps) {
  const {
    email,
    password,
    confirmPassword,
    error,
    canSubmit,
    setEmail,
    setPassword,
    setConfirmPassword,
    validateForm,
  } = useAuthForm({ mode: "register" });

  const alertMessage = message || error;

  function submit() {
    if (!validateForm()) return;
    onSubmit({ email, password });
  }

  function enterSubmit(event: React.KeyboardEvent) {
    if (event.key === "Enter") submit();
  }

  return (
    <Stack spacing={3}>
      <Stack spacing={2.5}>
        {alertMessage && (
          <Alert severity="error" sx={{ borderRadius: 2 }}>
            {alertMessage}
          </Alert>
        )}

        <ValidatedTextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={enterSubmit}
          required
          autoComplete="email"
        />

        <ValidatedTextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={enterSubmit}
          required
          autoComplete="new-password"
          helperText={`Co najmniej ${minPasswordLength} znaków`}
        />

        <ValidatedTextField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onKeyDown={enterSubmit}
          required
          autoComplete="new-password"
        />

        <PrimaryButton onClick={submit} disabled={!canSubmit} text="Sign up" />
      </Stack>

      <FormFooter
        text="Already have an account?"
        linkText="Log in now!"
        to={Path.Login}
      />
    </Stack>
  );
}
