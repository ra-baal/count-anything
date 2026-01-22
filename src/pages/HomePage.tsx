import Path from "@/common/path";
import { CardPageTemplate } from "@/components/templates/CardPageTemplate";
import { Link } from "react-router-dom";
import { Box, Link as MuiLink } from "@mui/material";

export default function HomePage() {
  const linkSx = {
    underline: "hover" as const,
    fontSize: "1.1rem",
    fontWeight: 500,
    textDecoration: "none",
    textAlign: "center",
    padding: 2,
    borderRadius: 2,
    backgroundColor: "primary.main",
    color: "primary.contrastText" as const,
    "&:hover": {
      backgroundColor: "primary.dark",
      textDecoration: "none",
    },
  };

  return (
    <CardPageTemplate
      title="Count anything"
      showMenu={false}
      showGoBack={false}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <MuiLink component={Link} to={Path.Login} sx={linkSx}>
          Zaloguj się
        </MuiLink>
        <MuiLink component={Link} to={Path.Register} sx={linkSx}>
          Zarejestruj się
        </MuiLink>
        <MuiLink component={Link} to={Path.Home} sx={linkSx}>
          Korzystaj bez konta
        </MuiLink>
      </Box>
    </CardPageTemplate>
  );
}
