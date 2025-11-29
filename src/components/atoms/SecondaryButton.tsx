import { Button } from "@mui/material";

interface SecondaryButtonProps {
  text: string;
  onClick: () => void;
}

export function SecondaryButton({ text, onClick }: SecondaryButtonProps) {
  return (
    <Button variant="outlined" onClick={onClick} fullWidth sx={sx}>
      {text}
    </Button>
  );
}

const sx = {
  py: 1.5,
  borderRadius: 2,
  textTransform: "none",
  fontSize: "1rem",
};
