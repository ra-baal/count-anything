import {
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
  Fab,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import Path from "@/common/path";
import { useCounters } from "@/hooks/useCounters";
import { CardPageTemplate } from "@/components/templates/CardPageTemplate";
import RemoveIcon from "@mui/icons-material/Remove";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CountersPage() {
  const navigate = useNavigate();
  const counters = useCounters();

  return (
    // <FullPageTemplate title={"Count Anything"}>
    <CardPageTemplate title={"Count Anything"} showGoBack={false}>
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
              <Tooltip title="Zwiększ licznik o 1">
                <IconButton
                  color="primary"
                  onClick={() => counters.increment(item.id)}
                  aria-label="Zwiększ"
                >
                  <AddIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Zmniejsz licznik o 1">
                <IconButton
                  color="primary"
                  onClick={() => counters.decrement(item.id)}
                  aria-label="Zmniejsz"
                >
                  <RemoveIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Resetuj">
                <IconButton
                  color="default"
                  onClick={() => counters.reset(item.id)}
                  aria-label="Resetuj"
                >
                  <RestartAltIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Usuń">
                <IconButton
                  color="default"
                  onClick={() => counters.remove(item.id)}
                  aria-label="Usuń"
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
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
      {/* </FullPageTemplate> */}
    </CardPageTemplate>
  );
}
