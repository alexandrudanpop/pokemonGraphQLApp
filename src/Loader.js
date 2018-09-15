import React from "react";
import { BarLoader } from "react-spinners";

const Loader = () => (
  <div className="spinner-centered">
    <BarLoader color={"green"} width={2000} />
  </div>
);

export default Loader;
