import React from "react";
import { render, screen } from "@testing-library/react";
import FixedSidebar from "./FixedSidebar";

describe("FixedSidebar component", () => {
  test("renders with a list of links", () => {
    render(<FixedSidebar />);
    const socialLinks = screen.getAllByRole("link");
    expect(socialLinks).toHaveLength(2);
  });

  test("links have correct hrefs", () => {
    render(<FixedSidebar />);
    const linkedinLink = screen.getByLabelText(/linkedin profile/i);
    const githubLink = screen.getByLabelText(/github profile/i);
    expect(linkedinLink.getAttribute("href")).toBe("https://www.onet.pl");
    expect(githubLink.getAttribute("href")).toBe("https://www.onet.pl");
  });
});
