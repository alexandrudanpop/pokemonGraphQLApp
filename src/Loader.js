import React from "react";
import { BarLoader } from "react-spinners";

const Loader = () => (
  <div className="spinner-centered">
    <BarLoader color={"#105245"} width={2000} />
  </div>
);

export default Loader;
