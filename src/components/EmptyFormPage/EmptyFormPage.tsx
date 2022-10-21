import React, { FC } from "react";
import { Link } from "react-router-dom";

const EmptyFormPage: FC = () => {
  return (
    <div className="text-center my-5 d-flex flex-column gap-2">
      <h3>No data to process</h3>
      <span className="text-secondary mb-2">
        please fill up this form so that we can check your eligibility
      </span>
      <Link to="/">
        <button className="btn btn-warning">Go to Form</button>
      </Link>
    </div>
  );
};

export default EmptyFormPage;
