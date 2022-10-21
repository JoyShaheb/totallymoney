import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Welcome from "../components/Welcome/Welcome";

describe("test cases for the welcome component", () => {
  it("check for the welcome label", () => {
    render(<Welcome />);
    expect(screen.getByText("Welcome !")).toBeInTheDocument();
  });

  it("check for the heading text", () => {
    render(<Welcome />);
    expect(
      screen.getByText("Let's Pick a credit card for you")
    ).toBeInTheDocument();
  });
});
