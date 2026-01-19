import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface HeaderMenuButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  ariaLabel?: string;
}

export default function HeaderMenuButton({
  onClick,
  ariaLabel = "Menu",
}: HeaderMenuButtonProps) {
  return (
    <IconButton onClick={onClick} aria-label={ariaLabel}>
      <MoreVertIcon />
    </IconButton>
  );
}
