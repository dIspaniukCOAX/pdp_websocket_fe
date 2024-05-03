import { render } from "@testing-library/react";

import { Modal } from "@/elements";

import "@testing-library/jest-dom";

describe("Modal component", () => {
  test("renders Modal component with children", () => {
    const { getByText } = render(
      <Modal open={true}>
        <div>Test Child</div>
      </Modal>
    );

    expect(getByText("Test Child")).toBeInTheDocument();
  });

  test("not render Modal component if it closed", () => {
    const { queryByText } = render(
      <Modal open={false}>
        <div>Test Child</div>
      </Modal>
    );

    expect(queryByText("Test Child")).not.toBeInTheDocument();
  });
});
