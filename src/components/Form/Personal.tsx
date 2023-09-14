import React from "react";
import { Button, Stack } from "@mui/material";
import Input from "../Common/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import InputSelect from "../Common/InputSelect";
import { JobStatusEnum } from "../../types/enums";
import { useSelector, useDispatch } from "react-redux";
import { fillForm } from "../../store";
import { useNavigate } from "react-router-dom";
import { getEligibility } from "../../store/slices/userSelectSlice";

interface iPersonalInput {
  name?: string;
  jobStatus?: JobStatusEnum;
  salary?: string;
  location?: string;
}

const Personal = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const { userSelect } = useSelector((state: any) => state);
  console.log(userSelect);

  const onSubmit: SubmitHandler<iPersonalInput> = (data: any) => {
    dispatch(fillForm(data));
    dispatch(getEligibility());
    navigate("/eligibility");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" justifyContent="center">
        <Stack
          alignItems="center"
          direction="column"
          gap={2}
          sx={{
            width: { xs: "100%", sm: "80%", md: "70%", lg: "60%", xl: "50%" },
          }}
        >
          <Input
            type="text"
            label="Name *"
            variant="outlined"
            placeholder="Write your full name here"
            register={register("name", { required: true })}
            error={errors.name ? true : false}
            helperText={errors.name ? "This field is required" : ""}
            defaultValue={userSelect.name}
          />

          <InputSelect
            label="Job Status *"
            register={register("job", { required: true })}
            error={errors.job ? true : false}
            helperText={errors.job ? "This field is required" : ""}
            placeholder="Please Select your occupation"
            options={[
              { value: JobStatusEnum.FullTime, label: JobStatusEnum.FullTime },
              { value: JobStatusEnum.PartTime, label: JobStatusEnum.PartTime },
              { value: JobStatusEnum.Student, label: JobStatusEnum.Student },
            ]}
            defaultValue={userSelect.job}
          />
          <Input
            type="number"
            label="Salary *"
            variant="outlined"
            placeholder="Annual Amount ($)"
            register={register("salary", { required: true })}
            error={errors.salary ? true : false}
            helperText={errors.salary ? "This field is required" : ""}
            defaultValue={userSelect.salary}
          />

          <Input
            type="text"
            label="Location"
            variant="outlined"
            placeholder="Your Location"
            register={register("location")}
            error={errors.location ? true : false}
            helperText={errors.location ? "This field is required" : ""}
            defaultValue={userSelect.location}
          />
          <Button fullWidth type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default Personal;
