import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
/* import About from "./pages/About";
 */ import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import ResMenu from "./components/ResMenu";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./pages/Cart";

const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        {/* if "/" then <Body/> render ,if "/about" then <About/> render using Outlet component and children props list in createBrowserRouter  */}
        <Outlet />
      </div>
    </Provider>
  );
}

//Router

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>this is rendering</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restorent/:resId",
        element: <ResMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
