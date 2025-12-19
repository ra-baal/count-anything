import { useState } from "react";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import Path from "@/common/path";
import RegisterForm from "@/components/organisms/RegisterForm";
import { CardPageTemplate } from "@/components/templates/CardPageTemplate";
import { useRegisterAccount } from "@/api/accounts/hooks";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const register = useRegisterAccount();

  function handleSubmit(data: { email: string; password: string }) {
    register
      .mutateAsync({
        email: data.email,
        password: data.password,
      })
      .then(() => {
        setSuccess(true);
      })
      .catch((reason) => {
        setSuccess(false);
        const exMessage = reason instanceof Error ? reason.message : null;
        setMessage(
          exMessage || "Nie udało się założyć konta. Spróbuj ponownie."
        );
      });
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
      <RegisterForm onSubmit={handleSubmit} message={message} />
    </CardPageTemplate>
  );
}
