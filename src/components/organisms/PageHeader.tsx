import { Box, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useMemo, useState } from "react";
import HeaderMenu, { HeaderMenuItem } from "../molecules/HeaderMenu";
import HeaderMenuButton from "../atoms/HeaderMenuButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface PageHeaderProps {
  title: string;
  subtitle?: string;

  showGoBack?: boolean;
  onGoBack?: () => void;
  goBackLabel?: string;

  showMenu?: boolean;
  menuItems?: HeaderMenuItem[];
}

export default function PageHeader({
  title,
  subtitle,
  showGoBack = false,
  onGoBack,
  goBackLabel = "Wróć",
  showMenu = true,
  menuItems,
}: PageHeaderProps) {
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 1,
        }}
      >
        <Box>
          {showGoBack && (
            <Button
              variant="text"
              startIcon={<ArrowBackIcon />}
              onClick={onGoBack}
              sx={{
                px: 0,
                minWidth: "auto",
                textTransform: "none",
                color: "#1a1a1a",
              }}
            >
              {goBackLabel}
            </Button>
          )}
        </Box>

        {showMenu && (
          <>
            <HeaderMenuButton
              onClick={(e) => setMenuAnchorEl(e.currentTarget)}
            />
            <HeaderMenu
              anchorEl={menuAnchorEl}
              onClose={() => setMenuAnchorEl(null)}
              items={menuItems ?? []}
            />
          </>
        )}
      </Box>

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
