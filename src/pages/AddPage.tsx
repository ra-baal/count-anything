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

export default function AddPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const addCounter = () => {
    storage.addCounter(name);
    navigate(Path.Counters, { replace: true });
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Add Counter</Typography>
        </Toolbar>
      </AppBar>

      <Container
        maxWidth="sm"
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Add New Counter
        </Typography>

        <Stack spacing={2} sx={{ width: "100%", mt: 2 }}>
          <TextField
            label="Counter Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />

          <Button
            variant="contained"
            onClick={addCounter}
            disabled={!name.trim()}
          >
            Add
          </Button>

          <Button
            variant="text"
            onClick={() => navigate("/", { replace: true })}
          >
            Cancel
          </Button>
        </Stack>
      </Container>
    </>
  );
}
