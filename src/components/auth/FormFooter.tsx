import { Typography, Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface FormFooterProps {
  text: string;
  linkText: string;
  to: string;
}

export default function FormFooter({ text, linkText, to }: FormFooterProps) {
  return (
    <Box
      sx={{
        textAlign: "center",
        pt: 2,
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "#666",
          fontSize: "0.875rem",
        }}
      >
        {text}{" "}
        <Link
          component={RouterLink}
          to={to}
          sx={{
            textDecoration: "none",
            color: "#1976d2",
            fontWeight: 500,
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          {linkText}
        </Link>
      </Typography>
    </Box>
  );
}

