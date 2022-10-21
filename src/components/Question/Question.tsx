import React, { FC } from "react";
import { Link } from "react-router-dom";

const Question: FC = () => {
  return (
    <div className="text-center mt-4 text-capitalize">
      <h4>Not sure what you're looking for ?</h4>
      <Link to="/products">
        <button className="btn btn-warning">See Products</button>
      </Link>
    </div>
  );
};

export default Question;
