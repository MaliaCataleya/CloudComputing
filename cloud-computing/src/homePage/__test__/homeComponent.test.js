import React from "react";
import HomeComponent from "../homeComponent";
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

it("does not render view data button when no data uploaded", () => {
    render(<HomeComponent></HomeComponent>, container)
    const viewDataButton = screen.queryByText('View your Data')
    expect(viewDataButton).toBeNull()
});

it("does render upload button when no data uploaded", () => {
  render(<HomeComponent></HomeComponent>, container)
  const uploadButton = screen.queryAllByTestId('uploadButton')
  expect(uploadButton).toBeTruthy()
});




