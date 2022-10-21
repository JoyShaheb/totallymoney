import dayjs from "dayjs";
import { inject, observer } from "mobx-react";
import { nanoid } from "nanoid";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./EligibilityCard.scss";

const EligibilityCard: FC = inject("store")(
  observer(({ store }: any) => {
    let { userData } = store;
    let { date, name, job, salary, location, availableCards } = userData;
    return (
      <div className="container text-capitalize">
        <div className="text-center mt-5">
          <h2 className="">Thank you for your info</h2>
          <div className="text-secondary">
            {dayjs(date).format("DD MMMM, YYYY")}
          </div>
        </div>
        <div className="eligibilityCardContainer  mt-5 ">
          <div className="cardContainer">
            <h4 className="name">{name}</h4>
            <div className="text-secondary">{job}</div>

            <div className="info mt-2">
              <div className="income">
                Annual income:{" "}
                <span className="fw-bold">
                  £{salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </div>
              <div className="address">
                Address : <span className="fw-bold">{location}</span>
              </div>
            </div>
          </div>
          <div className="eligibleFor">
            <div className="mt-4">
              <h4 className="text-center">You will be eligible for </h4>
              <ul>
                {availableCards?.map((item: string[]) => (
                  <li key={nanoid(4)}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <Link to="/cardselection" className="text-center">
            <button className="btn btn-dark mt-3 back-btn">Select Cards</button>
          </Link>
        </div>
      </div>
    );
  })
);

export default EligibilityCard;
