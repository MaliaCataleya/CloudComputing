import React from "react";
import MapComponent from "../mapComponent";
import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { testDataLocations, testDataRoutes } from "./testData"

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

it("does render map component if locationschecked is true, routeChecked is true and data is available", () => {
    render(<MapComponent locationChecked={true} routeChecked={true} locations={testDataLocations} routes={testDataRoutes}></MapComponent>, container)
});

it("does render map component if locationschecked is true, routeChecked is false and data is available", () => {
    render(<MapComponent locationChecked={true} routeChecked={false} locations={testDataLocations} routes={testDataRoutes}></MapComponent>, container)
});

it("does render map component if locationschecked is false, routeChecked is true and data is available", () => {
    render(<MapComponent locationChecked={false} routeChecked={true} locations={testDataLocations} routes={testDataRoutes}></MapComponent>, container)
});

it("does render map component if locationschecked is false, routeChecked is false and data is available", () => {
    render(<MapComponent locationChecked={false} routeChecked={false} locations={testDataLocations} routes={testDataRoutes}></MapComponent>, container)
});

it("does render map component if locationschecked is true, routeChecked is true and data is not available", () => {
    render(<MapComponent locationChecked={true} routeChecked={true} locations={[]} routes={[]}></MapComponent>, container)
});