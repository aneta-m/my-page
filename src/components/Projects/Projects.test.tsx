import Projects from "./Projects";
import { render, screen } from "@testing-library/react";

describe("Projects", () => {
  test("renders without error", () => {
    render(<Projects />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });
  test("renders list of projects", () => {
    render(<Projects />);
    expect(screen.getByText(/visual calculator/i)).toBeInTheDocument();
    expect(screen.getByText(/this website/i)).toBeInTheDocument();
  });
});
