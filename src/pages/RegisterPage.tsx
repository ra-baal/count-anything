import { useState } from "react";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import Path from "@/common/path";
import RegisterForm from "@/components/organisms/RegisterForm";
import { CardPageTemplate } from "@/components/templates/CardPageTemplate";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    email: string;
    password: string;
  } | null>(null);

  function handleSubmit(data: { email: string; password: string }) {
    setSubmittedData(data);
  }

  function handleSuccess() {
    setSuccess(true);
  }

  if (success) {
    return (
      <CardPageTemplate title="Sign up" subtitle="Account created successfully">
        <Alert severity="success" sx={{ borderRadius: 2 }}>
          Rejestracja zakończona sukcesem! Możesz się teraz zalogować.
        </Alert>
        <PrimaryButton
          onClick={() => navigate(Path.Login, { replace: true })}
          text="Go to login"
        />
      </CardPageTemplate>
    );
  }

  return (
    <CardPageTemplate title="Sign up" subtitle="Create your account">
      <RegisterForm onSubmit={handleSubmit} onSuccess={handleSuccess} />
    </CardPageTemplate>
  );
}
