import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Alert } from "@mui/material";

import BoxCard from "@/components/molecules/BoxCard";
import PageHeader from "@/components/organisms/PageHeader";
import FormFooter from "@/components/molecules/FormFooter";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { FullPageTemplate } from "@/components/templates/FullPageTemplate";
import Path from "@/common/path";
import { ResetPasswordForm } from "@/components/organisms/ResetPasswordForm";
import { CardPageTemplate } from "@/components/templates/CardPageTemplate";

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  function handleSuccess(email: string) {
    setSuccess(true);
  }

  if (success) {
    return (
      <CardPageTemplate title="Reset password" subtitle="Check your email">
        <Alert severity="success" sx={{ borderRadius: 2 }}>
          Jeśli podany adres email istnieje w systemie, otrzymasz wiadomość z
          instrukcjami resetowania hasła.
        </Alert>

        <Stack spacing={2}>
          <PrimaryButton
            onClick={() => navigate(Path.Login, { replace: true })}
            text="Back to login"
          />
          <SecondaryButton
            text="Send again"
            onClick={() => setSuccess(false)}
          />
        </Stack>
      </CardPageTemplate>
    );
  }

  return (
    <CardPageTemplate
      title={"Reset password"}
      subtitle="Enter your email to reset"
    >
      <ResetPasswordForm onSuccess={handleSuccess} />

      <FormFooter
        text="Remember your password?"
        linkText="Log in now!"
        to={Path.Login}
      />
    </CardPageTemplate>
  );
}
