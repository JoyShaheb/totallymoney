import React, { FC } from "react";
import { Link } from "react-router-dom";

const PageNotFound: FC = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-5 gap-3">
      <h2>Page Not Found</h2>
      <Link to="/">
        <button className="btn btn-dark">Back to Home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
