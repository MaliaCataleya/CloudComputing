import React from "react";
import UploadButton from "../uploadButtonComponent";
import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders without crashing", () => {
    render(<UploadButton></UploadButton>, container)
});

it("renders with default text when initializing", () => {
    render(<UploadButton></UploadButton>, container)
    expect(screen.getByRole('button')).toHaveTextContent("Upload");
});


