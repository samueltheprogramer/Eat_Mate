import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>oops! Somting went out wrong......</h1>
      <h3>{err.data}</h3>
      <h3>status code :{err.status}</h3>
    </div>
  );
};

export default ErrorPage;
