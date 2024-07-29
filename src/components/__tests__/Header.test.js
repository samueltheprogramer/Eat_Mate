import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render Haeader component wirth  login button", () => {
  // Render
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Query
  const headerButton = screen.getByRole("button");

  //Assertion or Expecting

  expect(headerButton).toBeInTheDocument();
});

test("Login button to logout button ", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const LogInButton = screen.getByRole("button", { name: "LogIn" });
  fireEvent.click(LogInButton);
  const LogOutButton = screen.getByRole("button", { name: "LogOut" });

  expect(LogOutButton).toBeInTheDocument();
});
