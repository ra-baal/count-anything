import { Button, ButtonProps } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface PrimaryButtonProps extends ButtonProps {
  showArrow?: boolean;
}

export default function PrimaryButton({
  showArrow = true,
  children,
  sx,
  ...props
}: PrimaryButtonProps) {
  return (
    <Button
      {...props}
      endIcon={showArrow ? <ArrowForwardIcon /> : undefined}
      sx={{
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
        ...sx,
      }}
    >
      {children}
    </Button>
  );
}
