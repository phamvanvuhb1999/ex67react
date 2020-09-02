import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className="Item">
        <p>{this.props.title}</p>
      </div>
    );
  }
}
export default Item;
