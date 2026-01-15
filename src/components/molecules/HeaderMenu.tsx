import { Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";

export interface HeaderMenuItem {
  id: string;
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  color?: "inherit" | "error";
}

interface HeaderMenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  items: HeaderMenuItem[];
}

export default function HeaderMenu({
  anchorEl,
  onClose,
  items,
}: HeaderMenuProps) {
  const isOpen = Boolean(anchorEl);

  return (
    <Menu anchorEl={anchorEl} open={isOpen} onClose={onClose}>
      {items.map((item) => (
        <MenuItem
          key={item.id}
          onClick={() => {
            item.onClick();
            onClose();
          }}
          sx={{ color: item.color === "error" ? "error.main" : "inherit" }}
        >
          {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
          <ListItemText>{item.label}</ListItemText>
        </MenuItem>
      ))}
    </Menu>
  );
}
