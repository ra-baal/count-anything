import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, TextField, Stack } from "@mui/material";
import Path from "@/common/path";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import { SecondaryButton } from "@/components/atoms/SecondaryButton";
import { FullPageTemplate } from "@/components/templates/FullPageTemplate";
import { useCreateCounter } from "@/api/counters/hooks";

export default function AddPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const create = useCreateCounter();

  const addCounter = () => {
    create.mutate(name);
    navigate(Path.Counters, { replace: true });
  };

  return (
    <FullPageTemplate title="Nowy licznik">
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
            label="Nazwa licznika"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />

          <PrimaryButton
            onClick={addCounter}
            disabled={!name.trim()}
            text="Dodaj"
          />

          <SecondaryButton
            text={"Anuluj"}
            onClick={() => navigate(Path.Counters, { replace: true })}
          />
        </Stack>
      </Container>
    </FullPageTemplate>
  );
}
