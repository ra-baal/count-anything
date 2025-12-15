import {
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
import Path from "@/common/path";
import { FullPageTemplate } from "@/components/templates/FullPageTemplate";
import { useCounters } from "@/hooks/useCounters";

export default function CountersPage() {
  const navigate = useNavigate();
  const counters = useCounters();

  return (
    <FullPageTemplate title={"Count Anything"}>
      <Container sx={{ mt: 3, mb: 10 }}>
        {counters.counters.map((item) => (
          <Card key={item.id} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography color="text.secondary">
                Count: {item.value}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => counters.increment(item.id)}>+1</Button>
              <Button onClick={() => counters.decrement(item.id)}>-1</Button>
              <Button onClick={() => counters.reset(item.id)}>Reset</Button>
              <Button color="error" onClick={() => counters.remove(item.id)}>
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
