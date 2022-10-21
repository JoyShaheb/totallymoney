import React, { FC } from "react";
import FormComponent from "../components/FormComponent/Index";
import Question from "../components/Question/Question";
import Welcome from "../components/Welcome/Welcome";

const Home: FC = () => {
  return (
    <div className="mt-3">
      <Welcome />
      <FormComponent />
      <Question />
    </div>
  );
};

export default Home;
