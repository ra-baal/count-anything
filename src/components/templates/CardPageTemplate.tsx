import { ReactNode, useMemo, useState } from "react";
import BoxCard from "../molecules/BoxCard";
import { Stack, CircularProgress, Box } from "@mui/material";
import PageHeader from "../organisms/PageHeader";
import { useNavigate } from "react-router-dom";
import { HeaderMenuItem } from "../molecules/HeaderMenu";
import Path from "@/common/path";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { authLogout } from "@/api/auth/endpoints";
import LogoutIcon from "@mui/icons-material/Logout";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { useAuth } from "@/hooks/useAuth";

interface CardPageTemplateProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  isLoading?: boolean;
  onGoBack?: () => void;
  goBackPath?: string;

  showGoBack?: boolean;
  showMenu?: boolean;
}

export function CardPageTemplate({
  children,
  title,
  subtitle,
  isLoading,
  onGoBack,
  goBackPath,
  showGoBack = true,
  showMenu = true,
}: CardPageTemplateProps) {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleGoBack = useMemo(() => {
    if (onGoBack) {
      return onGoBack;
    } else if (goBackPath) {
      return () => navigate(goBackPath);
    } else {
      return () => navigate(-1);
    }
  }, [navigate, onGoBack]);

  const menuItems = useMemo<HeaderMenuItem[]>(() => {
    return [
      {
        id: "counters",
        label: "Liczniki",
        onClick: () => navigate(Path.Counters),
        icon: <FormatListNumberedIcon fontSize="small" />,
      },

      {
        id: "account",
        label: "Konto",
        onClick: () => navigate(Path.Account),
        icon: <AccountCircleIcon fontSize="small" />,
      },
      {
        id: "logout",
        label: "Wyloguj",
        onClick: () => auth.logout(),
        icon: <LogoutIcon fontSize="small" />,
        color: "error",
      },
    ];
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "100dvh", sm: "auto" },
        px: { xs: 0, sm: 0 },
      }}
    >
      <BoxCard
        containerSx={{
          width: "100%",
          height: { xs: "100%", sm: "auto" },
          minHeight: { xs: "100dvh", sm: "unset" },
        }}
        cardSx={{
          borderRadius: { xs: 0, sm: 2 },
        }}
      >
        <Box position="relative" sx={{ height: { xs: "100%", sm: "auto" } }}>
          <Stack spacing={3} sx={{ height: { xs: "100%", sm: "auto" } }}>
            <PageHeader
              title={title}
              subtitle={subtitle}
              showGoBack={showGoBack}
              onGoBack={handleGoBack}
              menuItems={menuItems}
              showMenu={showMenu}
            />

            <Box sx={{ flex: { xs: 1, sm: "unset" } }}>{children}</Box>
          </Stack>

          {isLoading && (
            <Box
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor="rgba(255,255,255,0.6)"
              zIndex={10}
            >
              <CircularProgress />
            </Box>
          )}
        </Box>
      </BoxCard>
    </Box>
  );
}
