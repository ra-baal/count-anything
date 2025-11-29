import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import storage from "../common/storage";
import Path from "@/common/path";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { FullPageTemplate } from "@/components/templates/FullPageTemplate";

export default function AddPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const addCounter = () => {
    storage.addCounter(name);
    navigate(Path.Counters, { replace: true });
  };

  return (
    <FullPageTemplate title="Add Counter">
      <Container
        maxWidth="sm"
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack spacing={2} sx={{ width: "100%", mt: 2 }}>
          <TextField
            label="Counter Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />

          <PrimaryButton
            onClick={addCounter}
            disabled={!name.trim()}
            text="Add"
          />

          <SecondaryButton
            text={"Cancel"}
            onClick={() => navigate("/", { replace: true })}
          />
        </Stack>
      </Container>
    </FullPageTemplate>
  );
}
