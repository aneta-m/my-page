import Logo from "./Logo";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Logo", () => {
  test("renders button with logo text", () => {
    render(<Logo />);
    expect(screen.getByRole("button", { name: "AM" })).toBeInTheDocument();
  });
  test("scrolls to top on click", () => {
    const scrollToMock = jest.fn();
    Object.defineProperty(window, "scrollTo", {
      value: scrollToMock,
    });
    render(<Logo />);
    userEvent.click(screen.getByRole("button", { name: "AM" }));
    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });
});
