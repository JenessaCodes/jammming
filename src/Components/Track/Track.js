import React, { Component } from "react";
import "./Track.css";

export class Track extends Component {
  constructor(props) {
    super(props);
  }

  renderAction = () => {
    if (this.props.isRemoval === true) {
      return <button className="Track-action">-</button>;
    } else {
      return <button className="Track-action">+</button>;
    }
  };

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>track name will go here</h3>
          <p>track artist will go here | track album will go here</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
