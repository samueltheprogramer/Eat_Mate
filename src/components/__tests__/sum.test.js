import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { sum } from "../sum";
import Contact from "../../pages/Contact";

test("Function should calculate the sum of two numbers", () => {
  const result = sum(3, 4); // call the function
  expect(result).toBe(7); // assertion provided by jest. I
});

test("check component loads or not", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading"); // check the sp
  expect(heading).toBeInTheDocument(); // check heading
});
