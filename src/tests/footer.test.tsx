import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../components/footer/Footer";

describe("test cases for the footer component", () => {
  it("check for the credits text", () => {
    render(<Footer />);
    expect(screen.getByText("Credits : Diran")).toBeInTheDocument();
  });
});
