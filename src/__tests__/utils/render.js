/* eslint-disable react/prop-types */

import { BrowserRouter } from "react-router-dom";
import { render as rtlRender } from "@testing-library/react";

// Render with router
function render(ui, renderOptions = {}) {
  const Wrapper = ({ children }) => {
    return <BrowserRouter>{children}</BrowserRouter>;
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
