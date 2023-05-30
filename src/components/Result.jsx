import React, { Component } from 'react';

class Result extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="result-container">
        <input className="result-input" type="text" readOnly value={0} />
      </div>
    );
  }
}

export default Result;
