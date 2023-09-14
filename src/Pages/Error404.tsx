import errorImage from "../assets/error404.svg";
import { Grid } from "@mui/material";

const Error404 = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" my={4}>
      <img src={errorImage} alt="" />;
    </Grid>
  );
};

export default Error404;
