import { render, screen } from "@testing-library/react";

import { Title } from "@/elements";

import "@testing-library/jest-dom";

describe("Title component", () => {
  it("renders Title component with default props", () => {
    render(<Title>Hello Title</Title>);
    const titleElement = screen.getByText("Hello Title");

    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H1");
    expect(titleElement).toHaveClass("title", "title-1");
    expect(titleElement).toHaveStyle("font-size: 38px");
  });

  it("renders Title component with specified level and additional class", () => {
    render(
      <Title level={3} className="custom-title">
        Custom Title
      </Title>
    );
    const customTitleElement = screen.getByText("Custom Title");

    expect(customTitleElement).toBeInTheDocument();
    expect(customTitleElement.tagName).toBe("H3");
    expect(customTitleElement).toHaveClass("title", "title-3", "custom-title");
  });

  it("renders Title component with modified level 6 ", () => {
    render(<Title level={6}>Level 6 Title</Title>);
    const levelFiveTitleElement = screen.getByText("Level 6 Title");

    expect(levelFiveTitleElement).toBeInTheDocument();
    expect(levelFiveTitleElement.tagName).toBe("H5");
    expect(levelFiveTitleElement).toHaveClass("title", "title-6");
    expect(levelFiveTitleElement).toHaveStyle("font-size: 16px");
  });
});
