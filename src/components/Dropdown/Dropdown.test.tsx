import Dropdown from "./Dropdown";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Dropdown", () => {
  test("renders without errors", () => {
    render(
      <Dropdown list={[<div key="1">first</div>, <div key="2">second</div>]}>
        button
      </Dropdown>
    );
    expect(screen.getByRole("button", { name: "button" })).toBeInTheDocument();
  });
  test("shows list when clicked", () => {
    render(
      <Dropdown list={[<div key="1">first</div>, <div key="2">second</div>]}>
        button
      </Dropdown>
    );
    const dropdownButton = screen.getByRole("button", { name: "button" });
    expect(screen.queryByText("first")).not.toBeInTheDocument();
    expect(screen.queryByText("second")).not.toBeInTheDocument();
    userEvent.click(dropdownButton);
    expect(screen.getByText("first")).toBeInTheDocument();
    expect(screen.getByText("second")).toBeInTheDocument();
  });
});
