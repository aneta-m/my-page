import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("renders without errors", () => {
    const mockFunction = jest.fn();
    render(<Button onClick={mockFunction}>button name</Button>);
    expect(
      screen.getByRole("button", { name: "button name" })
    ).toBeInTheDocument();
  });
  test("calls function when clicked", () => {
    const mockFunction = jest.fn();
    render(<Button onClick={mockFunction}>button name</Button>);
    const buttonElement = screen.getByRole("button", { name: "button name" });
    fireEvent.click(buttonElement);
    expect(mockFunction).toHaveBeenCalled();
  });
  test("renders link with correct href", () => {
    render(<Button link="text">link name</Button>);
    const linkElement = screen.getByRole("link", { name: "link name" });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "text");
  });
});
