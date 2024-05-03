import { render, screen } from "@testing-library/react";

import { FormItem } from "@/elements";

import "@testing-library/jest-dom";
import "../utils/matchMedia";

describe("FormItem component", () => {
  let formItemElement: HTMLElement | null = null;

  const formItemProps = [
    { label: "FormItem component with children", props: { preview: false } },
    {
      label: "FormItem component in preview mode",
      props: { preview: true, value: "Preview value" }
    },
    {
      label: "FormItem component in preview mode without value",
      props: { preview: true }
    }
  ];

  describe.each(formItemProps)("$label", ({ props }) => {
    beforeEach(() => {
      render(
        <FormItem data-testid="form-item" {...props}>
          Child Content
        </FormItem>
      );
      formItemElement = screen.getByTestId("form-item");
    });

    test("renders FormItem component correctly", () => {
      if (formItemElement) {
        expect(formItemElement).toBeInTheDocument();
        expect(formItemElement.tagName).toBe("DIV");

        if (props.preview) {
          expect(formItemElement).toHaveTextContent(`${props.value || "-"}`);
        } else {
          expect(formItemElement).toHaveTextContent("Child Content");
        }
      }
    });
  });
});
