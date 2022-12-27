import React from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import { Stack, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { nanoid } from "@reduxjs/toolkit";
import EmptyForm from "../components/EmptyForm/EmptyForm";
import { useNavigate } from "react-router-dom";

const Eligibility = () => {
  const navigate = useNavigate();
  const { userSelect } = useSelector((state: any) => state);
  const { eligibility } = userSelect;

  return eligibility?.length === 0 ? (
    <EmptyForm />
  ) : (
    <Stack direction="column" alignItems="center">
      <Stack direction="column" alignItems="center" my={4}>
        <Typography variant="h6">Thank You For Your Info</Typography>
        <Typography variant="body2" color="text.secondary">
          {dayjs().format("DD MMMM, YYYY")}
        </Typography>
      </Stack>
      <ProfileCard {...userSelect} />

      <Stack mt={4} alignItems="center">
        <Typography variant="h6">You Will Be Eligible For</Typography>
        <Stack component="ul">
          {eligibility?.map((item: string) => (
            <Typography key={nanoid()} component="li">
              {item}
            </Typography>
          ))}
        </Stack>
      </Stack>

      <Button
        onClick={() => navigate("/card-select")}
        type="submit"
        variant="contained"
        color="warning"
      >
        select cards
      </Button>
    </Stack>
  );
};

export default Eligibility;
