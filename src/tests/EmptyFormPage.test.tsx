import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmptyFormPage from "../components/EmptyFormPage/EmptyFormPage";
import { BrowserRouter } from "react-router-dom";

describe("test cases for the EmptyFormPage component", () => {
  it("check for the h3 tag", () => {
    render(
      <BrowserRouter>
        <EmptyFormPage />
      </BrowserRouter>
    );
    expect(screen.getByText("No data to process")).toBeInTheDocument();
  });

  it("check for the request text", () => {
    render(
      <BrowserRouter>
        <EmptyFormPage />
      </BrowserRouter>
    );
    expect(
      screen.getByText(
        "please fill up this form so that we can check your eligibility"
      )
    ).toBeInTheDocument();
  });

  it("check for the Go to Form button", () => {
    render(
      <BrowserRouter>
        <EmptyFormPage />
      </BrowserRouter>
    );
    expect(screen.getByText("Go to Form")).toBeInTheDocument();
  });
});
