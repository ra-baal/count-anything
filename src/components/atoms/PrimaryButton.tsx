import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface PrimaryButtonProps {
  text: string;
  onClick: () => void;
  icon?: "arrow-forward";
  iconPosition?: "end" | "start";
  disabled?: boolean;
}

export default function PrimaryButton({
  text,
  onClick,
  icon,
  iconPosition = "end",
  disabled,
}: PrimaryButtonProps) {
  const iconComponent = getIconComponent(icon);

  return (
    <Button
      startIcon={iconPosition === "start" ? iconComponent : undefined}
      endIcon={iconPosition === "end" ? iconComponent : undefined}
      sx={sx}
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      fullWidth
    >
      {text}
    </Button>
  );
}

const sx = {
  py: 1.5,
  borderRadius: 2,
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: 500,
  backgroundColor: "#1976d2",
  "&:hover": {
    backgroundColor: "#1565c0",
  },
  "&:disabled": {
    backgroundColor: "#e0e0e0",
    color: "#9e9e9e",
  },
};

function getIconComponent(icon: "arrow-forward" | undefined) {
  switch (icon) {
    case "arrow-forward":
      return <ArrowForwardIcon />;
    default:
      return <></>;
  }
}
