import React from "react";

const Pokemon = ({ number, name, image }) => (
  <div>
    <h3>
      #{number} {name}
    </h3>
    <img src={image} alt={name} />
    <hr />
  </div>
);

export default Pokemon;
