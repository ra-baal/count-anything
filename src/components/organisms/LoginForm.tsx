import { Stack, Box, Link as MuiLink } from "@mui/material";
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
  const { email, password, canSubmit, setEmail, setPassword, validateForm } =
    useAuthForm({ mode: "login" });

  function submit() {
    if (!validateForm()) return;
    onSubmit({ email, password });
  }

  function onEnter(event: React.KeyboardEvent) {
    if (event.key === "Enter") submit();
  }

  return (
    <>
      <Stack spacing={3}>
        <ValidatedTextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={onEnter}
          required
          autoComplete="email"
        />

        <ValidatedTextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={onEnter}
          required
          autoComplete="current-password"
          showValidation={false}
        />

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <MuiLink
            component={Link}
            to={Path.ResetPassword}
            underline="hover"
            fontSize="0.875rem"
            color="primary"
          >
            Forgot password?
          </MuiLink>
        </Box>

        <PrimaryButton onClick={submit} disabled={!canSubmit} text="Log in" />
      </Stack>

      <FormFooter
        text="Don't have an account?"
        linkText="Sign up now!"
        to={Path.Register}
      />
    </>
  );
}
