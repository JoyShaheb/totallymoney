import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EmptyForm from "../components/EmptyForm/EmptyForm";
import {
  Stack,
  Typography,
  Box,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip,
  Grid,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useGetProductsQuery } from "../store/API/productsAPI";
import Error404 from "./Error404";

const CardSelectionPage = () => {
  const { userSelect } = useSelector((state: any) => state);
  const { eligibility } = userSelect;
  const [selection, setSelection] = useState<string[]>([]);
  const [credits, setCredits] = useState<number>(0);
  // @ts-ignore
  const { data, error, isLoading } = useGetProductsQuery();

  useEffect(() => {
    if (!isLoading && !error && data) {
      const filterData = data?.filter((item: any) =>
        selection.includes(item.name)
      );
      const totalCredits = filterData?.reduce(
        (acc: number, item: any) => acc + item.credit,
        0
      );
      setCredits(totalCredits);
      console.log(totalCredits);
    }
  }, [selection]);

  const handleChange = (event: SelectChangeEvent<typeof selection>) => {
    const {
      target: { value },
    } = event;
    setSelection(typeof value === "string" ? value.split(",") : value);

    console.log(value);
  };

  return (
    <>
      {isLoading && (
        <Typography textAlign="center" variant="h4" mt={6}>
          Loading please wait{" "}
        </Typography>
      )}
      {!isLoading && error && <Error404 />}
      {!isLoading && !error && eligibility?.length !== 0 && (
        <Stack my={4} gap={2}>
          <Typography textAlign="center" variant="h5">
            Select your cards
          </Typography>

          <FormControl sx={{ m: 1 }}>
            <InputLabel id="demo-multiple-chip-label">
              Available Cards
            </InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={selection}
              onChange={handleChange}
              input={
                <OutlinedInput
                  id="select-multiple-chip"
                  label="Available Cards"
                />
              }
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {eligibility?.map((card: string) => (
                <MenuItem key={card} value={card}>
                  {card}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Stack gap={0.5} mt={1}>
            <Typography textAlign="center">Credits Available</Typography>
            <Typography textAlign="center" variant="h5">
              $ {credits}
            </Typography>
          </Stack>
        </Stack>
      )}

      {eligibility?.length === 0 && !error && !isLoading && <EmptyForm />}
    </>
  );
};

export default CardSelectionPage;
