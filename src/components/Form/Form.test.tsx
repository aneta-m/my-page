import Form from "./Form";
import { screen, render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Form", () => {
  const fieldRequirements: FieldRequirements = {
    name: [
      { condition: (value) => !!value.trim(), error: "Required" },
      {
        condition: (value) => value.length < 10,
        error: "Length",
      },
    ],
    message: [
      { condition: (value) => !!value.trim(), error: "Required" },
      {
        condition: (value) => value.length < 100,
        error: "Length",
      },
    ],
  };

  const sendEmailMock = jest.fn();
  test("renders without errors", () => {
    render(
      <Form fieldRequirements={fieldRequirements} sendEmail={sendEmailMock} />
    );
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });
  test("renders all fields", () => {
    render(
      <Form fieldRequirements={fieldRequirements} sendEmail={sendEmailMock} />
    );
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });
  test("updates input values", () => {
    render(
      <Form fieldRequirements={fieldRequirements} sendEmail={sendEmailMock} />
    );
    const nameField = screen.getByLabelText(/name/i);
    userEvent.click(nameField);
    expect(nameField).toHaveFocus();
    userEvent.keyboard("something");
    expect(screen.getByDisplayValue("something")).toBeInTheDocument();
    userEvent.keyboard("{Backspace}");
    expect(screen.queryByDisplayValue(/something/)).not.toBeInTheDocument();
    const messageField = screen.getByLabelText(/message/i);
    userEvent.click(messageField);
    expect(messageField).toHaveFocus();
    userEvent.keyboard("text");
    expect(screen.getByDisplayValue("text")).toBeInTheDocument();
    userEvent.keyboard("{Backspace}");
    expect(screen.queryByDisplayValue("text")).not.toBeInTheDocument();
    expect(screen.getByDisplayValue("tex")).toBeInTheDocument();
  });
  test("on submit calls send email and clear fields", () => {
    render(
      <Form fieldRequirements={fieldRequirements} sendEmail={sendEmailMock} />
    );
    userEvent.click(screen.getByLabelText(/name/i));
    userEvent.keyboard("John");
    userEvent.click(screen.getByLabelText(/message/i));
    userEvent.keyboard("Novak");
    userEvent.click(screen.getByRole("button", { name: "Submit" }));
    expect(sendEmailMock).toHaveBeenCalled();
    expect(screen.queryByDisplayValue("John")).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue("Novak")).not.toBeInTheDocument();
  });
  test("after submitting shows confirmation text for 5 seconds", () => {
    jest.useFakeTimers();
    render(
      <Form fieldRequirements={fieldRequirements} sendEmail={sendEmailMock} />
    );
    userEvent.click(screen.getByLabelText(/name/i));
    userEvent.keyboard("John");
    userEvent.click(screen.getByLabelText(/message/i));
    userEvent.keyboard("Novak");
    userEvent.click(screen.getByRole("button", { name: "Submit" }));
    expect(screen.getByText(/successfully/)).toBeInTheDocument();
    act(() => jest.advanceTimersByTime(5000));
    expect(screen.queryByText(/successfully/)).not.toBeInTheDocument();
  });

  test("does not call send email function and shows errors on submit, if fields are not valid", () => {
    render(
      <Form fieldRequirements={fieldRequirements} sendEmail={sendEmailMock} />
    );
    userEvent.click(screen.getByLabelText(/name/i));
    userEvent.keyboard("John john john");
    userEvent.click(screen.getByLabelText(/message/i));
    userEvent.keyboard("Novak");
    expect(screen.queryByText(/something/)).not.toBeInTheDocument();
    expect(sendEmailMock).not.toHaveBeenCalled();
  });
  test("if errors on submit, sets focus on the first field with error", () => {
    render(
      <Form fieldRequirements={fieldRequirements} sendEmail={sendEmailMock} />
    );
    const nameField = screen.getByLabelText(/name/i);
    const submitButton = screen.getByRole("button", { name: "Submit" });
    userEvent.click(nameField);
    userEvent.keyboard("John");
    userEvent.click(submitButton);
    expect(nameField).toHaveValue("John");
    expect(screen.getByLabelText(/message/i)).toHaveFocus();
    userEvent.keyboard("message");
    userEvent.click(nameField);
    userEvent.keyboard("{Backspace>4}");
    userEvent.click(submitButton);
    expect(nameField).toHaveFocus();
    expect(sendEmailMock).not.toHaveBeenCalled();
  });
  test("updates error message on change", () => {
    render(
      <Form fieldRequirements={fieldRequirements} sendEmail={sendEmailMock} />
    );
    userEvent.click(screen.getByLabelText(/name/i));
    userEvent.keyboard("John");
    userEvent.click(screen.getByRole("button", { name: "Submit" }));
    expect(screen.getByText(/required/i)).toBeInTheDocument();
    userEvent.keyboard("message");
    expect(screen.queryByText(/required/i)).not.toBeInTheDocument();
  });
  test("updates error message on blur", () => {
    render(
      <Form fieldRequirements={fieldRequirements} sendEmail={sendEmailMock} />
    );
    userEvent.click(screen.getByLabelText(/name/i));
    userEvent.keyboard("John");
    userEvent.click(screen.getByRole("button", { name: "Submit" }));
    expect(screen.getByText(/required/i)).toBeInTheDocument();
    userEvent.keyboard("m");
    userEvent.tab();
    expect(screen.queryByText(/required/i)).not.toBeInTheDocument();
  });
});
