import { useRouteError } from "react-router-dom";
import './errorpage.css';
import React from "react";

const  ErrorPage=() =>{
  const error = useRouteError();
  

  return (
    <div className="errorpage">
      <h2>Oops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default  ErrorPage;