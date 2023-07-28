import React from "react";
import svg from "../assets/404.svg";

const PageNotFound = () => {
  return (
    <>
      <div className="cont-404">
        <img src={svg} alt="svg" />
        <button>Back to Home</button>
      </div>
    </>
  );
};

export default PageNotFound;
