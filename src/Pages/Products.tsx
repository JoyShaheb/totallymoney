import { Grid, Stack, Skeleton, Typography, Button } from "@mui/material";
import CardComponent from "../components/Common/CardComponent";
import { useGetProductsQuery } from "../store";
import { iProductData } from "../types/interface";
import Error404 from "./Error404";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const Products = () => {
  const { data, isError, isLoading, isFetching } = useGetProductsQuery("");

  console.log(data);
  const navigate = useNavigate();

  if (isLoading || isFetching) {
    return (
      <Stack my={6}>
        <Typography variant="h5" textAlign="center">
          Loading please wait .....
        </Typography>
        <Grid container mt={1} mb={6} rowSpacing={2} columnSpacing={2}>
          {Array(3)
            .fill(0)
            .map((x) => (
              <Grid key={nanoid()} item xs={12} md={4}>
                <Skeleton
                  sx={{ borderRadius: "4px" }}
                  variant="rectangular"
                  width="100%"
                  height={118}
                />
              </Grid>
            ))}
        </Grid>
      </Stack>
    );
  }

  if (isError) {
    return <Error404 />;
  }

  return (
    <>
      <Stack direction="column" mt={6}>
        <Typography variant="h5" textAlign="center">
          Available Credit Cards
        </Typography>
        <Typography color="text.secondary" textAlign="center">
          {dayjs().format("DD MMMM, YYYY")}
        </Typography>
      </Stack>
      <Grid container mt={2} mb={6} rowSpacing={2} columnSpacing={2}>
        {/* @ts-ignore */}
        {data?.map((product: iProductData) => {
          return (
            <Grid key={nanoid()} item xs={12} md={4}>
              {/* @ts-ignore */}
              <CardComponent {...product} />
            </Grid>
          );
        })}
        <Grid item xs={12} mt={1.5}>
          <Stack direction="row" justifyContent="center">
            <Button
              onClick={() => navigate("/")}
              type="submit"
              variant="contained"
              color="warning"
            >
              Check eligibility
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Products;
