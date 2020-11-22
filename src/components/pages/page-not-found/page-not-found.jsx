import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../../const";

const PageNotFound = () => {
  return (
    <div className="container">
      <h1>404</h1>
      <p><b>Page not found</b></p>
      <p>
        <Link to={AppRoute.MAIN} style={{textDecoration: `underline`}}>
          Go to main page
        </Link>
      </p>
    </div>
  );
};

export default PageNotFound;
