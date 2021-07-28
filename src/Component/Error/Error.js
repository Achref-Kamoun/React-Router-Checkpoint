import React from "react";
import Button from "react-bootstrap/Button";
import "./Error.css";
const Error = (props) => {
  console.log(props);

  return (
    <div className="Error">
      <img
        src="https://media.suara.com/pictures/653x366/2016/01/22/o_1a9k2o4pi1qdfndehvb7mvqoaa.jpg"
        alt="Error"
      />
      <Button variant="danger" onClick={() => props.history.goBack()}>
        Go Back
      </Button>
    </div>
  );
};

export default Error;
