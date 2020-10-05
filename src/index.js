import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const data = {
  offersCount: 5
};

ReactDOM.render(
    <App offersCount={data.offersCount} />,
    document.querySelector(`#root`)
);
