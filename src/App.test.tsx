import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
  test("renders without errors", () => {
    render(<App />);
    const text = screen.getByText(/front end/i);
    expect(text).toBeInTheDocument();
  });
  test("renders in English by default", () => {
    render(<App />);
    const textInEnglish = screen.getAllByText(/Projects/);
    expect(textInEnglish).toHaveLength(2);
    const textInPolish = screen.queryAllByText(/Projekty/);
    expect(textInPolish).toHaveLength(0);
  });

  test("gets language from local storage if it exists", async () => {
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
    };
    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
    });
    localStorageMock.getItem.mockReturnValueOnce("pl");
    render(<App />);
    await waitFor(() => {
      const textInPolish = screen.getAllByText(/O mnie/);
      expect(textInPolish).toHaveLength(2);
    });
  });

  test("scrolls to the right section on nav button click", async () => {
    const scrollToMock = jest.fn();
    Object.defineProperty(window, "scrollTo", {
      value: scrollToMock,
    });
    render(<App />);
    const aboutButton = screen.getByRole("button", { name: /about/i });
    userEvent.click(aboutButton);
    const aboutSection = screen.getByTestId("about");
    expect(window.scrollY).toEqual(aboutSection.offsetTop);
    const projectsButton = screen.getByRole("button", { name: /projects/i });
    userEvent.click(projectsButton);
    const projectsSection = screen.getByTestId("projects");
    expect(window.scrollY).toEqual(projectsSection.offsetTop);
    const contactButton = screen.getByRole("button", { name: "Contact" });
    userEvent.click(contactButton);
    const contactSection = screen.getByTestId("contact");
    expect(window.scrollY).toEqual(contactSection.offsetTop);
  });

  test("scrolls to the right section on mobile nav button click", async () => {
    const originalInnerWidth = window.innerWidth;
    window.innerWidth = 768;
    const scrollToMock = jest.fn();
    Object.defineProperty(window, "scrollTo", {
      value: scrollToMock,
    });
    render(<App />);
    const aboutButton = screen.getByRole("button", { name: /about/i });
    userEvent.click(aboutButton);
    const aboutSection = screen.getByTestId("about");
    expect(window.scrollY).toEqual(aboutSection.offsetTop);
    const projectsButton = screen.getByRole("button", { name: /projects/i });
    userEvent.click(projectsButton);
    const projectsSection = screen.getByTestId("projects");
    expect(window.scrollY).toEqual(projectsSection.offsetTop);
    const contactButton = screen.getByRole("button", { name: "Contact" });
    userEvent.click(contactButton);
    const contactSection = screen.getByTestId("contact");
    expect(window.scrollY).toEqual(contactSection.offsetTop);
    window.innerWidth = originalInnerWidth;
  });

  test("clicking on the language button changes App language", async () => {
    render(<App />);
    const languageDropdown = screen.getByRole("button", { name: /en/i });
    userEvent.click(languageDropdown);
    const newLanguageButton = screen.getByRole("button", { name: "PL" });
    userEvent.click(newLanguageButton);
    await waitFor(() => expect(screen.getAllByText("O mnie")).toHaveLength(2));
    expect(screen.queryByText(/contact/i)).not.toBeInTheDocument();
  });

  test("renders Nav component when the screen width is at least 768px", async () => {
    const originalInnerWidth = window.innerWidth;
    window.innerWidth = 768;
    render(<App />);
    const nav = screen.getByTestId("nav");
    expect(nav).toBeInTheDocument();
    window.innerWidth = originalInnerWidth;
  });

  test("renders MobileNav component when the screen width is less than 768px", () => {
    const originalInnerWidth = window.innerWidth;
    window.innerWidth = 767;
    render(<App />);
    const mobileNav = screen.getByTestId("mobile-nav");
    expect(mobileNav).toBeInTheDocument();
    window.innerWidth = originalInnerWidth;
  });
});
