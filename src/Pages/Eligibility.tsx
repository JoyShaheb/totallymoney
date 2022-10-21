import { inject, observer } from "mobx-react";
import React, { FC } from "react";
import EligibilityCard from "../components/EligibilityCard/EligibilityCard";
import EmptyFormPage from "../components/EmptyFormPage/EmptyFormPage";

const Eligibility: FC = inject("store")(
  observer(({ store }: any) => {
    let { userData } = store;

    if (Object.keys(userData).length === 0) {
      return <EmptyFormPage />;
    } else {
      return <EligibilityCard />;
    }
  })
);

export default Eligibility;
