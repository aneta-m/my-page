import Card from "./Card";
import { render, screen } from "@testing-library/react";

describe("Card", () => {
  test("renders children correctly", () => {
    render(<Card>some text</Card>);
    expect(screen.getByText("some text")).toBeInTheDocument();
  });
});
