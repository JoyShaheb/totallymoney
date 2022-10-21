import { FC } from "react";
import ProductCards from "../components/ProductCards/ProductCards";
import { ProductCardData } from "../API/ProductCardData";
import { nanoid } from "nanoid";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const Products: FC = () => {
  return (
    <div className="my-5">
      <div className="mb-5">
        <h2 className="text-center">Available Credit Cards</h2>
        <h6 className="text-center text-secondary">
          {dayjs().format("DD MMMM, YYYY")}
        </h6>
      </div>
      <div className="ProductsContainer container">
        {ProductCardData?.map((item) => {
          return <ProductCards key={nanoid(6)} {...item} />;
        })}
      </div>
      <div className="text-center">
        <Link to="/">
          <button className="btn btn-warning mt-3 back-btn">
            Check Eligibility
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
