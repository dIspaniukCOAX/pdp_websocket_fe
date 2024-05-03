import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Checkbox } from "../../elements";
import { render } from "../utils/render";

import "@testing-library/jest-dom";

describe("Checkbox component", () => {
  test("renders Checkbox component with specified props", () => {
    const testLabel = "Test Checkbox";
    const testId = "test-checkbox";

    render(<Checkbox data-testid={testId}>{testLabel}</Checkbox>);

    const checkbox = screen.getByTestId(testId);
    const labelText = screen.getByText(/test checkbox/i);

    expect(checkbox).toBeInTheDocument();
    expect(labelText).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
