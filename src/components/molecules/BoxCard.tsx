import { ReactNode } from "react";
import { Box, Card, SxProps, Theme } from "@mui/material";

interface BoxCardProps {
  children: ReactNode;
  containerSx?: SxProps<Theme>;
  cardSx?: SxProps<Theme>;
}

export default function BoxCard({
  children,
  containerSx,
  cardSx,
}: BoxCardProps) {
  return (
    <Box
      sx={{
        minHeight: { xs: "100dvh", sm: "100vh" },
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",

        backgroundColor: "#f5f5f5",
        display: "flex",
        alignItems: { xs: "flex-start", sm: "center" },
        justifyContent: "center",

        // padding must not cause overflow
        p: { xs: 0, sm: 2 },

        // allow scrolling only on mobile if content is taller
        overflowY: { xs: "auto", sm: "visible" },
        WebkitOverflowScrolling: "touch",

        ...containerSx,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: 450 },

          // IMPORTANT for flex layouts: prevent min-content overflow
          minWidth: 0,

          boxSizing: "border-box",

          p: { xs: 2, sm: 4 },
          borderRadius: { xs: 0, sm: 3 },
          boxShadow: { xs: "none", sm: "0 2px 8px rgba(0,0,0,0.1)" },

          ...cardSx,
        }}
      >
        {children}
      </Card>
    </Box>
  );
}
