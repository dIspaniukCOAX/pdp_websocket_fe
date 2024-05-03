import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "../../elements";
import { render } from "../utils/render";

import "@testing-library/jest-dom";

const onClickMock = jest.fn();

describe("Button component", () => {
  let buttonElement: HTMLElement | null = null;

  const buttonProps = [
    {
      label: "Button with default props",
      props: { onClick: onClickMock },
      expectedClasses: ["host-btn__middle"]
    },
    {
      label: "Button with specified props",
      props: {
        type: "primary" as const,
        size: "large" as const,
        danger: true,
        icon: <span>Icon</span>,
        reverse: true,
        className: "custom-class",
        onClick: onClickMock
      },
      expectedClasses: [
        "host-btn",
        "host-btn__large",
        "host-btn__primary",
        "danger",
        "btn-with-icon",
        "reverse",
        "custom-class"
      ]
    }
  ];

  describe.each(buttonProps)("$label", ({ props, expectedClasses }) => {
    beforeEach(() => {
      render(<Button {...props}>Click me</Button>);
      buttonElement = screen.getByRole("button");
    });

    test("renders Button component correctly", () => {
      if (buttonElement) {
        expectedClasses.forEach((className) => {
          expect(buttonElement).toHaveClass(className);
        });

        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement.tagName).toBe("BUTTON");
        expect(buttonElement).toHaveTextContent("Click me");

        userEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalledTimes(1);
      }
    });
  });
});
