import { ReactNode } from "react";
import BoxCard from "../molecules/BoxCard";
import { Stack, CircularProgress, Box } from "@mui/material";
import PageHeader from "../molecules/PageHeader";

interface CardPageTemplateProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  isLoading?: boolean;
}

export function CardPageTemplate({
  children,
  title,
  subtitle,
  isLoading,
}: CardPageTemplateProps) {
  return (
    <BoxCard>
      <Box position="relative">
        <Stack spacing={3}>
          <PageHeader title={title} subtitle={subtitle} />
          {children}
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
  );
}
