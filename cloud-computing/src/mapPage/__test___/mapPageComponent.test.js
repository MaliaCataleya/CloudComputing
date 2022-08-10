import React from "react";
import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import MapPageComponent from "../mapPageComponent";
import {rest} from 'msw'
import {setupServer} from 'msw/node'

let container = null;
const URL = "https://df5ff463.eu-de.apigw.appdomain.cloud/google-location-data"

const server = setupServer(
    rest.get(URL + "/location", (req, res, ctx) => {
      return res(ctx.json({bookmark: 'nil', docs: [], warning: 'No matching index found, create an index to optimi…der adding a more specific index to improve this.'}))
    }),
    rest.get(URL + "/route", (req, res, ctx) => {
        return res(ctx.json({bookmark: 'nil', docs: [], warning: 'No matching index found, create an index to optimi…der adding a more specific index to improve this.'}))
    }),
  )

beforeAll(() => {
  server.listen()
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
})
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

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

it("does render text if no location and route data is available", () => {
    render(<MapPageComponent></MapPageComponent>, container)
    const selectDateWithDataHint = screen.queryByText('Select a date in the left menu, which has location data and select locations or routes')
    expect(selectDateWithDataHint).toBeTruthy()
});

