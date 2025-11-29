import { ReactNode } from "react";
import { Box, Card } from "@mui/material";

interface BoxCardProps {
  children: ReactNode;
}

export default function BoxCard({ children }: BoxCardProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 450,
          p: 4,
          borderRadius: 3,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        {children}
      </Card>
    </Box>
  );
}
