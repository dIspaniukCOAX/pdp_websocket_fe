import { render } from "@testing-library/react";

import { Paragraph } from "@/elements";

import "@testing-library/jest-dom";

describe("Paragraph component", () => {
  it("renders children correctly", () => {
    const text = "Test paragraph";
    const { getByText } = render(<Paragraph>{text}</Paragraph>);
    const paragraphElement = getByText(text);

    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement.tagName).toBe("DIV");
    expect(paragraphElement).toHaveClass("paragraph");
  });

  it("applies custom className correctly", () => {
    const customClassName = "custom-paragraph";
    const { container } = render(<Paragraph className={customClassName} />);
    const paragraphElement = container.querySelector(`.${customClassName}`);

    expect(paragraphElement).toBeInTheDocument();
  });
});
