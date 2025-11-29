import { Stack, Alert } from "@mui/material";
import PageHeader from "@/components/molecules/PageHeader";
import ValidatedTextField from "@/components/molecules/ValidatedTextField";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import FormFooter from "@/components/molecules/FormFooter";
import Path from "@/common/path";
import { useAuthForm } from "@/hooks/useAuthForm";

interface RegisterFormOrganismProps {
  onSubmit: (data: { email: string; password: string }) => void;
  onSuccess: () => void;
}

export default function RegisterFormOrganism({
  onSubmit,
  onSuccess,
}: RegisterFormOrganismProps) {
  const {
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
  } = useAuthForm({ mode: "register" });

  function handleRegister() {
    if (!validateForm()) return;
    onSubmit({ email, password });
    onSuccess();
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") handleRegister();
  }

  return (
    <Stack spacing={3}>
      <Stack spacing={2.5}>
        {error && (
          <Alert severity="error" sx={{ borderRadius: 2 }}>
            {error}
          </Alert>
        )}

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
          autoComplete="new-password"
          helperText="Minimum 6 characters"
          isValid={isPasswordValid}
        />

        <ValidatedTextField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          fullWidth
          required
          autoComplete="new-password"
          isValid={isConfirmPasswordValid}
        />

        <PrimaryButton
          onClick={handleRegister}
          disabled={!canSubmit}
          text="Sign up"
        />
      </Stack>

      <FormFooter
        text="Already have an account?"
        linkText="Log in now!"
        to={Path.Login}
      />
    </Stack>
  );
}
