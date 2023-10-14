import React from "react";

const ErrorBlock = ({ text }) => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100 w-100 bg-dark text-white">
      {text ? <h2>{text}</h2> : <h2>Error occured</h2>}
    </div>
  );
};

export default ErrorBlock;
