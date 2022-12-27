import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EmptyForm = () => {
  const navigate = useNavigate();
  return (
    <Stack direction="column" alignItems="center" my={4} gap={1}>
      <Typography variant="h5">No Information Provided</Typography>
      <Typography variant="subtitle2" color="text.secondary">
        Please provide some information so that we can fetch some data
      </Typography>
      <Button
        onClick={() => navigate("/")}
        type="submit"
        variant="contained"
        color="warning"
      >
        go to form
      </Button>
    </Stack>
  );
};

export default EmptyForm;
