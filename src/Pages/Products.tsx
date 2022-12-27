import React from "react";
import { Grid, Stack, Skeleton, Typography, Button } from "@mui/material";
import CardComponent from "../components/Common/CardComponent";
import { useGetProductsQuery } from "../store";
import { iProductCardData } from "../types";
import Error404 from "./Error404";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const Products = () => {
  // @ts-ignore
  const { data, error, isLoading } = useGetProductsQuery();

  const navigate = useNavigate();

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
        {isLoading &&
          Array(3)
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
        {!isLoading && error && <Error404 />}
        {!isLoading &&
          !error &&
          data?.map((product: iProductCardData) => (
            <Grid key={nanoid()} item xs={12} md={4}>
              <CardComponent
                title={product?.name}
                description={product?.info}
                apr={product?.apr}
                balanceTransfer={product?.balanceTransfer}
                purchaseOffer={product?.purchaseOffer}
                credit={product?.credit}
              />
            </Grid>
          ))}

        {!isLoading && !error && (
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
        )}
      </Grid>
    </>
  );
};

export default Products;
