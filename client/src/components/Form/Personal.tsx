import { Button, Stack } from "@mui/material";
import Input from "../Common/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import InputSelect from "../Common/InputSelect";
import { JobStatusEnum } from "../../types/enums";
import { useSelector, useDispatch } from "react-redux";
import { RootState, fillForm } from "../../store";
import { useNavigate } from "react-router-dom";
import { getEligibility, resetForm } from "../../store/slices/userSelectSlice";

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
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const { userSelect } = useSelector((state: RootState) => state);

  const onSubmit: SubmitHandler<iPersonalInput> = (data: iPersonalInput) => {
    dispatch(fillForm(data));
    dispatch(getEligibility());
    navigate("/eligibility");
  };

  const onReset = () => {
    reset();
    dispatch(resetForm());
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
            label="Name *"
            placeholder="Write your full name here"
            register={register("name", {
              required: true,
              value: userSelect.name,
            })}
            error={errors.name ? true : false}
            helperText={errors.name ? "This field is required" : ""}
          />
          <InputSelect
            label="Job Status *"
            register={register("job", {
              required: true,
              value: userSelect.job,
            })}
            error={errors.job ? true : false}
            helperText={errors.job ? "This field is required" : ""}
            placeholder="Please Select your occupation"
            options={[
              { value: JobStatusEnum.FullTime, label: JobStatusEnum.FullTime },
              { value: JobStatusEnum.PartTime, label: JobStatusEnum.PartTime },
              { value: JobStatusEnum.Student, label: JobStatusEnum.Student },
            ]}
            value={userSelect.job}
            onChange={(value: string) => {
              dispatch(fillForm({ job: value }));
            }}
          />
          <Input
            type="number"
            label="Salary *"
            placeholder="Annual Amount ($)"
            register={register("salary", {
              required: true,
              value: userSelect.salary,
            })}
            error={errors.salary ? true : false}
            helperText={errors.salary ? "This field is required" : ""}
          />
          <Input
            label="Location"
            placeholder="Your Location"
            register={register("location", {
              required: false,
              value: userSelect.location,
            })}
            error={errors.location ? true : false}
            helperText={errors.location ? "This field is required" : ""}
          />
          <Button fullWidth type="submit" variant="contained" color="success">
            Submit
          </Button>
          <Button
            onClick={onReset}
            fullWidth
            type="reset"
            variant="contained"
            color="error"
          >
            Reset
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default Personal;
