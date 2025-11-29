import { useState } from "react";
import { FullPageTemplate } from "@/components/templates/FullPageTemplate";
import LoginForm from "@/components/organisms/LoginForm";
import { CardPageTemplate } from "@/components/templates/CardPageTemplate";

export default function LoginPage() {
  const [submittedData, setSubmittedData] = useState<{
    email: string;
    password: string;
  } | null>(null);

  function handleSubmit(data: { email: string; password: string }) {
    setSubmittedData(data);
    console.log("Login attempt:", data);
  }

  return (
    <CardPageTemplate title="Log in" subtitle="to start">
      <LoginForm onSubmit={handleSubmit} />
    </CardPageTemplate>
  );
}
