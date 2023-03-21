import Contact from "./Contact";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("contact", () => {
  test("renders with correct heading", () => {
    render(<Contact />);
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });
  test("renders contact form with all fields", () => {
    render(<Contact />);
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/message/i)).toBeInTheDocument();
  });
  test("shows errors if name field is not filled correctly", () => {
    render(<Contact />);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    userEvent.click(screen.getByText(/email/i));
    userEvent.keyboard("name@email.com");
    userEvent.click(screen.getByText(/message/i));
    userEvent.keyboard("some text");
    userEvent.click(submitButton);
    expect(screen.getByText(/please enter your name/i)).toBeInTheDocument();
    userEvent.keyboard(")}");
    userEvent.click(submitButton);
    expect(screen.getByText(/only letters/i)).toBeInTheDocument();
    userEvent.keyboard("{Backspace>2}");
    userEvent.keyboard(
      "very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text "
    );
    userEvent.click(submitButton);
    expect(screen.getByText(/100 characters max/i)).toBeInTheDocument();
  });
  test("shows errors if email field is not filled correctly", () => {
    render(<Contact />);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    userEvent.click(screen.getByText(/name/i));
    userEvent.keyboard("name");
    userEvent.click(screen.getByText(/message/i));
    userEvent.keyboard("some text");
    userEvent.click(submitButton);
    expect(screen.getByText(/required/i)).toBeInTheDocument();
    userEvent.keyboard("not email format");
    userEvent.click(submitButton);
    expect(screen.getByText(/provide a valid e-mail/i)).toBeInTheDocument();
  });
  test("shows errors if message field is not filled correctly", () => {
    render(<Contact />);
    const submitButton = screen.getByRole("button", { name: /submit/i });
    userEvent.click(screen.getByText(/name/i));
    userEvent.keyboard("name");
    userEvent.click(screen.getByText(/email/i));
    userEvent.keyboard("name@email.com");
    userEvent.click(submitButton);
    expect(screen.getByText(/required/i)).toBeInTheDocument();
    userEvent.keyboard("{a>1001}");
    userEvent.click(submitButton);
    expect(screen.getByText(/1000 characters or fewer/i)).toBeInTheDocument();
  });
  test("shows sending confirmation if form submiited with correct data", () => {
    render(<Contact />);
    userEvent.click(screen.getByText(/name/i));
    userEvent.keyboard("name");
    userEvent.tab();
    userEvent.keyboard("name@email.com");
    userEvent.tab();
    userEvent.keyboard("some text");
    userEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByText(/has been sent/i)).toBeInTheDocument();
  });
});
