import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    const { number, name, image } = this.props.pokemon;
    return (
      <div>
        <h3>
          #{number} {name}
        </h3>
        <img src={image} alt={name} />
        <hr />
      </div>
    );
  }
}

export default Pokemon;
