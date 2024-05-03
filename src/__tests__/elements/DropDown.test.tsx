import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { DropDown } from "@/elements";

import "@testing-library/jest-dom";

describe("DropDown component", () => {
  test("renders DropDown component with children", async () => {
    const children = [
      { key: 1, label: "one" },
      { key: 2, label: "two" }
    ];
    render(<DropDown menu={{ items: children }}>Test</DropDown>);

    const dropDown = screen.getByText("Test");
    expect(dropDown).toBeInTheDocument();

    userEvent.click(dropDown);

    await waitFor(() => {
      const child1 = screen.getByText(/one/i);
      const child2 = screen.getByText(/two/i);

      expect(child1).toBeInTheDocument();
      expect(child2).toBeInTheDocument();
    });
  });
});
