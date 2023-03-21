import Heading from "./Heading";
import { render, screen } from "@testing-library/react";

describe("Heading", () => {
  test("renders without error", () => {
    render(<Heading type="main">title</Heading>);
    expect(screen.getByText("title")).toBeInTheDocument();
  });
  test("renders an h1 for type main", () => {
    render(<Heading type="main">title</Heading>);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
  test("renders an h2 with the right class for type section_title", () => {
    render(<Heading type="section_title">title</Heading>);
    const hElement = screen.getByRole("heading", { level: 2 });
    expect(hElement).toBeInTheDocument();
    expect(hElement).toHaveClass("section_title");
  });
  test("renders an h2 with the right class for type subheading", () => {
    render(<Heading type="subheading">title</Heading>);
    const hElement = screen.getByRole("heading", { level: 2 });
    expect(hElement).toBeInTheDocument();
    expect(hElement).toHaveClass("subheading");
  });
  test("renders an h3 with the right class for type title", () => {
    render(<Heading type="title">title</Heading>);
    const hElement = screen.getByRole("heading", { level: 3 });
    expect(hElement).toBeInTheDocument();
    expect(hElement).toHaveClass("title");
  });
  test("renders an h2 with the right class for type title_center", () => {
    render(<Heading type="title_center">title</Heading>);
    const hElement = screen.getByRole("heading", { level: 3 });
    expect(hElement).toBeInTheDocument();
    expect(hElement).toHaveClass("title_center");
  });
});
