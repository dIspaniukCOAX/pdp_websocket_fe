import { render, screen } from "@testing-library/react";

import { Upload } from "@/elements";

import "@testing-library/jest-dom";

describe("Upload component", () => {
  test("renders Upload component with children", () => {
    render(
      <Upload>
        <div>Test Child</div>
      </Upload>
    );

    const childElement = screen.getByText("Test Child");
    expect(childElement).toBeInTheDocument();
  });

  test("renders drag Upload with children", () => {
    const { container } = render(
      <Upload type="drag" data-testid="upload-drag">
        <div>Test Child</div>
      </Upload>
    );

    const childElement = container.querySelector("[data-testid='upload-drag']");
    expect(childElement).toBeInTheDocument();
  });
});
