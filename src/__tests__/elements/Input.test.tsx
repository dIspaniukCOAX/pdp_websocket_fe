import { fireEvent, render } from "@testing-library/react";

import { Input } from "@/elements";

import "@testing-library/jest-dom";

describe("Input component", () => {
  it("renders default input correctly", () => {
    const { container } = render(<Input />);
    const inputElement = container.querySelector("input[type='text']");

    expect(inputElement).toBeInTheDocument();
  });

  it("applies custom className correctly", () => {
    const customClassName = "custom-input";
    const { container } = render(<Input className={customClassName} />);
    const inputElement = container.querySelector(`.${customClassName}`);

    expect(inputElement).toBeInTheDocument();
  });

  it("renders password input correctly", () => {
    const { container } = render(<Input type="password" />);
    const inputElement = container.querySelector("input[type='password']");

    expect(inputElement).toBeInTheDocument();
  });

  it("renders number input correctly", () => {
    const { container } = render(<Input type="number" />);
    const inputElement = container.querySelector("input[type='number']");

    expect(inputElement).toBeInTheDocument();
  });

  it("handles value change and properties correctly", () => {
    const handleChange = jest.fn();

    const { getByPlaceholderText } = render(
      <Input
        placeholder="Test input"
        disabled={true}
        onChange={(e) => handleChange({ target: { value: e.target.value } })}
      />
    );

    const inputElement = getByPlaceholderText("Test input") as HTMLInputElement;

    expect(inputElement.placeholder).toBe("Test input");
    expect(inputElement).toBeDisabled();

    fireEvent.change(inputElement, { target: { value: "New value" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({ target: { value: "New value" } })
    );
  });
});
