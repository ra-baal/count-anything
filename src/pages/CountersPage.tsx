import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
  Fab,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import type { Counter } from "../common/types";
import storage from "../common/storage";
import Path from "@/common/path";
import { FullPageTemplate } from "@/components/templates/FullPageTemplate";

export default function CountersPage() {
  const navigate = useNavigate();
  const [counters, setCounters] = useState<Counter[]>([]);

  useEffect(() => {
    const saved = storage.getCounters();
    setCounters(saved);
  }, []);

  const saveCounters = (newCounters: Counter[]) => {
    setCounters(newCounters);
    storage.setCounters(newCounters);
  };

  const increment = (id: string) =>
    saveCounters(
      counters.map((c) => (c.id === id ? { ...c, count: c.count + 1 } : c))
    );

  const decrement = (id: string) =>
    saveCounters(
      counters.map((c) => (c.id === id ? { ...c, count: c.count - 1 } : c))
    );

  const reset = (id: string) =>
    saveCounters(counters.map((c) => (c.id === id ? { ...c, count: 0 } : c)));

  const remove = (id: string) =>
    saveCounters(counters.filter((c) => c.id !== id));

  return (
    <FullPageTemplate title={"Count Anything"}>
      <Container sx={{ mt: 3, mb: 10 }}>
        {counters.map((item) => (
          <Card key={item.id} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography color="text.secondary">
                Count: {item.count}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => increment(item.id)}>+1</Button>
              <Button onClick={() => decrement(item.id)}>-1</Button>
              <Button onClick={() => reset(item.id)}>Reset</Button>
              <Button color="error" onClick={() => remove(item.id)}>
                Remove
              </Button>
            </CardActions>
          </Card>
        ))}
      </Container>

      <Box
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
        }}
      >
        <Fab color="primary" onClick={() => navigate(Path.Add)}>
          <AddIcon />
        </Fab>
      </Box>
    </FullPageTemplate>
  );
}
