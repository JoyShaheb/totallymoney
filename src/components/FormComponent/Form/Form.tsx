import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "../Input/InputField";
import Select from "../Select/Select";
import { JobEnum, UserDataProps } from "../../../store/index";

import { inject, observer } from "mobx-react";

const Form: FC = inject("store")(
  observer(({ store }: any) => {
    let { collectUserData } = store;
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<UserDataProps> = (data) => {
      console.log(data);
      collectUserData(data);
      navigate("/eligibility");
    };
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container form-container d-flex flex-column"
      >
        <InputField
          label="name"
          field="name"
          register={register}
          type="text"
          placeholder="Your name here"
          required={true}
        />

        <Select
          required={true}
          register={register}
          label="Job Status"
          field="job"
          options={[JobEnum.fullTime, JobEnum.partTime, JobEnum.student]}
        />

        <InputField
          label="salary"
          field="salary"
          register={register}
          type="number"
          placeholder="Annual Salary (£)"
          required={true}
        />

        <InputField
          label="location"
          field="location"
          register={register}
          type="text"
          placeholder="Your location"
          required={true}
        />

        <button type="submit" className="form-submit-btn btn btn-dark">
          Submit
        </button>
      </form>
    );
  })
);

export default Form;
