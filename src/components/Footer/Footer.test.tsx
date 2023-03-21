import Footer from "./Footer";
import { screen, render } from "@testing-library/react";

describe("Footer", () => {
  test("renders without errors", () => {
    render(<Footer />);
    expect(screen.getByText(/copyright/i)).toBeInTheDocument();
  });

  test("renders social links", () => {
    render(<Footer />);
    const socialLinks = screen.getAllByRole("link");
    expect(socialLinks).toHaveLength(2);
  });
});
