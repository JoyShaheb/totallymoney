import { Stack, Typography, Button } from "@mui/material";
import Personal from "../components/Form/Personal";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Stack mt={5}>
      <Stack mb={4} gap={0.5}>
        <Typography color="text.secondary" textAlign="center">
          Welcome !
        </Typography>
        <Typography textAlign="center" variant="h5">
          Let's Pick A Credit Card For You
        </Typography>
      </Stack>
      <Personal />

      <Stack mt={4} direction="column" alignItems="center" gap={1.5}>
        <Typography textAlign="center" variant="h6">
          Not Sure What You're Looking For ?
        </Typography>
        <Button
          onClick={() => navigate("/products")}
          type="submit"
          variant="contained"
          color="warning"
        >
          See products
        </Button>
      </Stack>
    </Stack>
  );
};

export default Home;
