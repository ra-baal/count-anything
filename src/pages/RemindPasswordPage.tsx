import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Alert, Button } from "@mui/material";
import FormCard from "@/components/auth/FormCard";
import PageHeader from "@/components/auth/PageHeader";
import ValidatedTextField from "@/components/auth/ValidatedTextField";
import PrimaryButton from "@/components/auth/PrimaryButton";
import FormFooter from "@/components/auth/FormFooter";
import { validateEmail } from "@/common/validation";
import Path from "@/common/path";

export default function RemindPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleRemindPassword() {
    setError("");

    if (!email.trim()) {
      setError("Proszę podać adres email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Proszę podać poprawny adres email");
      return;
    }

    console.log("Remind password for:", email);
    setSuccess(true);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      handleRemindPassword();
    }
  }

  const isEmailValid = validateEmail(email);

  if (success) {
    return (
      <FormCard>
        <Stack spacing={3}>
          <PageHeader title="Reset password" subtitle="Check your email" />

          <Alert severity="success" sx={{ borderRadius: 2 }}>
            Jeśli podany adres email istnieje w systemie, otrzymasz wiadomość z
            instrukcjami resetowania hasła.
          </Alert>

          <Stack spacing={2}>
            <PrimaryButton
              variant="contained"
              onClick={() => navigate(Path.Login, { replace: true })}
              fullWidth
            >
              Back to login
            </PrimaryButton>
            <Button
              variant="outlined"
              onClick={() => {
                setSuccess(false);
                setEmail("");
              }}
              fullWidth
              sx={{
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              Send again
            </Button>
          </Stack>
        </Stack>
      </FormCard>
    );
  }

  return (
    <FormCard>
      <Stack spacing={3}>
        <PageHeader title="Reset password" subtitle="Enter your email to reset" />

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

          <PrimaryButton
            variant="contained"
            onClick={handleRemindPassword}
            disabled={!email.trim()}
            fullWidth
            sx={{ mt: 2 }}
          >
            Send instructions
          </PrimaryButton>
        </Stack>

        <FormFooter
          text="Remember your password?"
          linkText="Log in now!"
          to={Path.Login}
        />
      </Stack>
    </FormCard>
  );
}
