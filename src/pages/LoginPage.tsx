import { useState } from "react";
import { Link } from "react-router-dom";
import { Stack, Box } from "@mui/material";
import FormCard from "@/components/auth/FormCard";
import PageHeader from "@/components/auth/PageHeader";
import ValidatedTextField from "@/components/auth/ValidatedTextField";
import PrimaryButton from "@/components/auth/PrimaryButton";
import FormFooter from "@/components/auth/FormFooter";
import { validateEmail } from "@/common/validation";
import Path from "@/common/path";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (!email.trim() || !password.trim()) {
      return;
    }

    console.log("Login attempt:", { email, password });
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      handleLogin();
    }
  }

  const isEmailValid = validateEmail(email);

  return (
    <FormCard>
      <Stack spacing={3}>
        <PageHeader title="Log in" subtitle="to start learning" />

        <Stack spacing={2.5}>
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
            autoComplete="current-password"
            showValidation={false}
          />

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Link
              to={Path.RemindPassword}
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
            variant="contained"
            onClick={handleLogin}
            disabled={!email.trim() || !password.trim()}
            fullWidth
            sx={{ mt: 2 }}
          >
            Log in
          </PrimaryButton>
        </Stack>

        <FormFooter
          text="Don't have an account?"
          linkText="Sign up now!"
          to={Path.Register}
        />
      </Stack>
    </FormCard>
  );
}

