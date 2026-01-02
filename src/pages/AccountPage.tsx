import { JSX, useEffect, useState } from "react";
import { Typography, Stack } from "@mui/material";
import { CardPageTemplate } from "@/components/templates/CardPageTemplate";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { authLogout, authMe } from "@/api/auth/endpoints";
import Path from "@/common/path";
import { useNavigate } from "react-router-dom";

interface Account {
  email: string;
}

export default function AccountPage(): JSX.Element {
  const [account, setAccount] = useState<Account | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect((): void => {
    setLoading(true);
    authMe()
      .then((res) => {
        if (res.isSuccess) {
          setAccount({ email: res.data.email });
        }
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  async function logout(): Promise<void> {
    setLoading(true);
    await authLogout();
    setLoading(false);
    navigate(Path.Home);
  }

  return (
    <CardPageTemplate title="Konto" subtitle="Twoje konto" isLoading={loading}>
      <Stack spacing={2}>
        <Typography variant="body1">Email: {account?.email ?? "-"}</Typography>
        <SecondaryButton text="Wyloguj" onClick={logout} />
      </Stack>
    </CardPageTemplate>
  );
}
