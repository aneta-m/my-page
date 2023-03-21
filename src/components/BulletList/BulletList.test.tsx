import React from "react";
import { render, screen } from "@testing-library/react";
import BulletList from "./BulletList";

describe("BulletList", () => {
  test("renders a list with items", () => {
    const list = ["item1", "item2", "item3"];
    render(<BulletList list={list} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    list.forEach((item) => expect(screen.getByText(item)).toBeInTheDocument());
  });
});
