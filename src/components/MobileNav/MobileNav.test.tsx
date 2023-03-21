import MobileNav from "./MobileNav";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("MobileNav", () => {
  test("renders without errors", () => {
    const mockOnClick = jest.fn();
    render(<MobileNav onClick={mockOnClick} />);
    expect(screen.getByLabelText(/open nav/i)).toBeInTheDocument();
  });
  test("toggles nav on open/close button click", () => {
    const mockOnClick = jest.fn();
    render(<MobileNav onClick={mockOnClick} />);
    expect(screen.queryByLabelText(/close nav/i)).not.toBeInTheDocument();
    const openButton = screen.getByLabelText(/open nav/i);
    userEvent.click(openButton);
    const closeButton = screen.getByLabelText(/close nav/i);
    expect(closeButton).toBeInTheDocument();
    userEvent.click(closeButton);
    expect(openButton).toBeInTheDocument();
  });
  test("calls function and toggles nav on nav item click", () => {
    const scrollToMock = jest.fn();
    Object.defineProperty(window, "scrollTo", {
      value: scrollToMock,
    });
    const mockOnClick = jest.fn();
    render(<MobileNav onClick={mockOnClick} />);
    const openButton = screen.getByLabelText(/open nav/i);
    userEvent.click(openButton);
    userEvent.click(screen.getByRole("button", { name: /am/i }));
    expect(mockOnClick).toHaveBeenCalled();
    userEvent.click(openButton);
    userEvent.click(screen.getByRole("button", { name: /about/i }));
    expect(mockOnClick).toHaveBeenCalled();
    userEvent.click(openButton);
    userEvent.click(screen.getByRole("button", { name: /projects/i }));
    expect(mockOnClick).toHaveBeenCalled();
    userEvent.click(openButton);
    userEvent.click(screen.getByRole("button", { name: /contact/i }));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
