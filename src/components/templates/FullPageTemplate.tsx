import { ReactNode } from "react";
import { Stack } from "@mui/material";
import PageHeader from "../organisms/PageHeader";

interface FullPageTemplateProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export function FullPageTemplate({
  children,
  title,
  subtitle,
}: FullPageTemplateProps) {
  return (
    <Stack spacing={3}>
      <PageHeader title={title} subtitle={subtitle} />
      {children}
    </Stack>
  );
}
