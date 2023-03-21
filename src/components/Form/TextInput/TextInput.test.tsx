import TextInput from "./TextInput";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("TextInput", () => {
  test("renders without errors", () => {
    const onBlurMock = jest.fn();
    const onChangeMock = jest.fn();
    render(
      <TextInput
        fieldName="address"
        value=""
        label="Address"
        onBlur={onBlurMock}
        onChange={onChangeMock}
        error={null}
      />
    );
    expect(screen.getByLabelText(/address/i)).toBeInTheDocument();
  });
  test("gets focus after click and looses after tab press", async () => {
    const onBlurMock = jest.fn();
    const onChangeMock = jest.fn();
    render(
      <TextInput
        fieldName="address"
        value=""
        label="Address"
        onBlur={onBlurMock}
        onChange={onChangeMock}
        error={null}
      />
    );
    expect(screen.getByLabelText(/address/i)).toBeInTheDocument();
    userEvent.click(screen.getByLabelText(/address/i));
    expect(await screen.findByLabelText(/address/i)).toHaveFocus();
    userEvent.tab();
    expect(await screen.findByLabelText(/address/i)).not.toHaveFocus();
  });
  test("displays the value passed", () => {
    const onBlurMock = jest.fn();
    const onChangeMock = jest.fn();
    render(
      <TextInput
        fieldName="address"
        value="john"
        label="Address"
        onBlur={onBlurMock}
        onChange={onChangeMock}
        error={null}
      />
    );
    expect(screen.getByDisplayValue(/john/i)).toBeInTheDocument();
  });

  test("calls function on blur", async () => {
    const onBlurMock = jest.fn();
    const onChangeMock = jest.fn();
    render(
      <TextInput
        fieldName="name"
        value="john"
        label="name"
        onBlur={onBlurMock}
        onChange={onChangeMock}
        error={null}
      />
    );
    userEvent.click(screen.getByLabelText(/name/i));
    userEvent.tab();
    expect(onBlurMock).toHaveBeenCalled();
  });

  test("calls function on change", async () => {
    const onBlurMock = jest.fn();
    const onChangeMock = jest.fn();
    render(
      <TextInput
        fieldName="name"
        value="john"
        label="name"
        onBlur={onBlurMock}
        onChange={onChangeMock}
        error={null}
      />
    );
    userEvent.click(screen.getByLabelText(/name/i));
    userEvent.keyboard("new text");
    expect(onChangeMock).toHaveBeenCalled();
  });
});
