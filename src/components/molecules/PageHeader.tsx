import { Typography, Box } from "@mui/material";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: 700,
          mb: 0.5,
          color: "#1a1a1a",
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            fontSize: "0.95rem",
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
