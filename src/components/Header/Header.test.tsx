import Header from "./Header";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Header", () => {
  test("renders without errors", () => {
    const navigateToSectionMock = jest.fn();
    render(<Header onClick={navigateToSectionMock} />);
    expect(screen.getByText(/front end developer/i)).toBeInTheDocument();
  });
  test("calls function if contact button clicked", () => {
    const navigateToSectionMock = jest.fn();
    render(<Header onClick={navigateToSectionMock} />);
    userEvent.click(screen.getByRole("button", { name: /contact/i }));
    expect(navigateToSectionMock).toHaveBeenCalled();
  });
  test("cv button links to the right destination", () => {
    const navigateToSectionMock = jest.fn();
    render(<Header onClick={navigateToSectionMock} />);
    expect(screen.getByRole("link", { name: /cv/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/aneta-miatkowska/"
    );
  });
});
