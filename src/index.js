import React from "react";
import ReactDom from "react-dom";

const firstName = "Umar Farooque";
const lastName = "Shaikh";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDom.render(
  <div>
    <p>Created by {`${firstName} ${lastName}`}</p>
    <p>&copy; {`${year}`}</p>
  </div>,
  document.getElementById("root")
);
