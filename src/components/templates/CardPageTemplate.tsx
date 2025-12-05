import { ReactNode } from "react";
import BoxCard from "../molecules/BoxCard";
import { Stack } from "@mui/material";
import PageHeader from "../molecules/PageHeader";

interface CardPageTemplateProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export function CardPageTemplate({
  children,
  title,
  subtitle,
}: CardPageTemplateProps) {
  return (
    <BoxCard>
      <Stack spacing={3}>
        <PageHeader title={title} subtitle={subtitle} />
        {children}
      </Stack>
    </BoxCard>
  );
}
