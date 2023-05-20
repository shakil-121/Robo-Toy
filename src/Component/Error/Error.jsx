import React from "react";
import Lottie from "lottie-react";
import error from "../../assets/42479-page-not-found-404.json";

const Error = () => {
  return (
    <div>
      <Lottie
        className="mx-auto"
        style={{ width: "600px", height: "600px" }}
        animationData={error}
        loop={true}
      />
      <div className="flex items-center justify-center">
      <a href="/">
        <button className="btn btn-primary">Back To Home</button>
      </a>
      </div>
    </div>
  );
};

export default Error;
