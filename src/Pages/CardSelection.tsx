import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import Select from "react-select";
import EmptyFormPage from "../components/EmptyFormPage/EmptyFormPage";

const CardSelection = inject("store")(
  observer(({ store }: any) => {
    let { userData, selectCardsFn, availableCredits } = store;

    if (Object.keys(userData).length === 0) {
      return <EmptyFormPage />;
    } else {
      let { availableCards } = userData;
      const options = availableCards.map((x: any) => ({ value: x, label: x }));

      let handleChange = (data: any) => {
        selectCardsFn(data);
        console.log(data);
      };

      return (
        <div className="container my-5">
          <h2 className="text-center mb-4">Select your cards</h2>
          <Select
            onChange={handleChange}
            isMulti
            name="colors"
            className="basic-multi-select"
            classNamePrefix="select"
            options={options}
          />
          <div className="text-center mt-5">
            <h4 className="">Credits Available</h4>
            <h5>$ {availableCredits}</h5>
            <Link to="/products" className="">
              <button className="btn btn-warning mt-3 back-btn">
                See Card Benefits
              </button>
            </Link>
          </div>
        </div>
      );
    }
  })
);

export default CardSelection;
