import { render } from "@testing-library/react";

import { Icon } from "@/elements";

import "@testing-library/jest-dom";

describe("Icon component", () => {
  test("renders Icon component with a specific icon", async () => {
    const icon = "bike";
    const { container } = render(<Icon icon={icon} />);
    const iconElement = container.querySelector("svg");

    const svgFileName = `${icon}.svg`;
    
    expect(iconElement).toBeInTheDocument();
    expect(iconElement?.outerHTML).toContain(svgFileName);
  });
});
