import React from "react";
import { BarLoader } from "react-spinners";

const Loader = () => (
  <div className="spinner-centered">
    <BarLoader color={"#CAC050"} width={2000} height={7} />
  </div>
);

export default Loader;
