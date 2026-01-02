import { useState } from "react";
import LoginForm from "@/components/organisms/LoginForm";
import { CardPageTemplate } from "@/components/templates/CardPageTemplate";
import { authLogin } from "@/api/auth/endpoints";
import { useNavigate } from "react-router-dom";
import Path from "@/common/path";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (data: { email: string; password: string }) => {
    setIsLoading(true);
    authLogin({
      email: data.email,
      password: data.password,
    })
      .then((res) => {
        console.log(`Witaj, ${res.email}!`);
        navigate(Path.Counters);
      })
      .catch((reason) => {
        console.log("Nie udało się zalogować.");
        const exMessage = reason instanceof Error ? reason.message : null;
        setMessage(exMessage || "Nie udało się zalogować. Spróbuj ponownie.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <CardPageTemplate title="Log in" subtitle="to start" isLoading={isLoading}>
      <LoginForm onSubmit={handleSubmit} message={message} />
    </CardPageTemplate>
  );
}
