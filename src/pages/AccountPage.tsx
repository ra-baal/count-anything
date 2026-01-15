import { JSX } from "react";
import { Typography, Stack } from "@mui/material";
import { CardPageTemplate } from "@/components/templates/CardPageTemplate";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { useAuth } from "@/hooks/useAuth";

export default function AccountPage(): JSX.Element {
  const auth = useAuth();

  return (
    <CardPageTemplate
      title="Konto"
      subtitle="Twoje konto"
      isLoading={auth.isLoading}
      showGoBack
    >
      <Stack spacing={2}>
        <Typography variant="body1">Email: {auth.me.email}</Typography>
        <SecondaryButton text="Wyloguj" onClick={auth.logout} />
      </Stack>
    </CardPageTemplate>
  );
}
