import React from "react";
import { render, screen } from "@testing-library/react";

import { axiosWithAuth } from "../helpers/axiosWithAuth";
import BubblePage from "./BubblePage";

jest.mock("../helpers/axiosWithAuth");
const data = {data: [
  {color:"limegreen",code:{hex:"#99ddbc"},id:2},
  {color:"aqua",code:{hex:"#00ffff"},id:3},
]};

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />);
  expect(screen.getByText(/bubbles/i)).toBeVisible();
});

test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test
  console.log(axiosWithAuth())
  //const { debug } = render(<BubblePage />);
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading