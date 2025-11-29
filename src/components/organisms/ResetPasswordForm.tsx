import { useState } from "react";
import { Stack, Alert } from "@mui/material";
import ValidatedTextField from "@/components/molecules/ValidatedTextField";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import { validateEmail } from "@/common/validation";

type ResetPasswordProps = {
  onSuccess: (email: string) => void;
};

export function ResetPasswordForm({ onSuccess }: ResetPasswordProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit() {
    setError("");

    if (!email.trim()) {
      setError("Proszę podać adres email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Proszę podać poprawny adres email");
      return;
    }

    onSuccess(email);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") handleSubmit();
  }

  return (
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
        isValid={validateEmail(email)}
      />

      <PrimaryButton
        onClick={handleSubmit}
        disabled={!email.trim()}
        text="Send instructions"
      />
    </Stack>
  );
}
