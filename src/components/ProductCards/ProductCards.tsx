import React, { FC } from "react";
import "./ProductCards.scss";

type ProductCardProps = {
  id: number;
  name: string;
  apr: number;
  balanceTransfer: number;
  purchaseOffer: number;
  credit: number;
  info: string;
};

const ProductCards: FC<ProductCardProps> = ({
  id,
  name,
  apr,
  balanceTransfer,
  credit,
  purchaseOffer,
  info,
}) => {
  return (
    <div>
      <div className="productCards text-capitalize">
        <div className="title text-center fw-bold fs-5">{name}</div>
        <ul>
          <li>
            apr: <span>{apr} %</span>
          </li>
          <li>Balance Transfer Offer Duration: {balanceTransfer}</li>
          <li>Purchase Offer Duration: {purchaseOffer}</li>
          <li>Credit Available: {credit}</li>
        </ul>
      </div>
      <div className="mt-3 text-center">{info}</div>
    </div>
  );
};

export default ProductCards;
