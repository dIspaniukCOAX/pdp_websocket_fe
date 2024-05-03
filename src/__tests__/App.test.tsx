import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import "./utils/matchMedia";
import App from "@/App";

describe("App component", () => {
  test("renders App component", () => {
    const { getByTestId } = render(<App />);
    const appComponent = getByTestId("react-root-component");

    expect(appComponent).toBeInTheDocument();
  });
});
