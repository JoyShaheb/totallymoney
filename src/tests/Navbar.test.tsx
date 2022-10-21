import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import PageNotFound from "../Pages/PageNotFound";
import App from "../App";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

describe("test cases for the Navbar component", () => {
  it("check for the Logo", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText("Totally Money")).toBeInTheDocument();
  });

  it("landing on a bad page", () => {
    const badRoute = "/some/bad/route";
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
    expect(screen.getByText("Back to Home")).toBeInTheDocument();
  });
});
