import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Question from "../components/Question/Question";
import { BrowserRouter } from "react-router-dom";

describe("test cases for the Question component", () => {
  it("check for question", () => {
    render(
      <BrowserRouter>
        <Question />
      </BrowserRouter>
    );
    expect(
      screen.getByText("Not sure what you're looking for ?")
    ).toBeInTheDocument();
  });

  it("check for see products button", () => {
    render(
      <BrowserRouter>
        <Question />
      </BrowserRouter>
    );
    expect(screen.getByText("See Products")).toBeInTheDocument();
  });
});
