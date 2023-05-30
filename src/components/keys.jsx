import React, { Component } from 'react';

class Keys extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <button type="button" className="btn btn-opp">AC</button>
        <button type="button" className="btn btn-opp">+/-</button>
        <button type="button" className="btn btn-opp">%</button>
        <button type="button" className="btn btn-opp-s">÷</button>
        <button type="button" className="btn btn-num">7</button>
        <button type="button" className="btn btn-num">8</button>
        <button type="button" className="btn btn-num">9</button>
        <button type="button" className="btn btn-opp-s">x</button>
        <button type="button" className="btn btn-num">4</button>
        <button type="button" className="btn btn-num">5</button>
        <button type="button" className="btn btn-num">6</button>
        <button type="button" className="btn btn-opp-s">-</button>
        <button type="button" className="btn btn-num">1</button>
        <button type="button" className="btn btn-num">2</button>
        <button type="button" className="btn btn-num">3</button>
        <button type="button" className="btn btn-opp-s">+</button>
        <button type="button" className="btn btn-num span-2">0</button>
        <button type="button" className="btn btn-num">.</button>
        <button type="button" className="btn btn-opp-s">=</button>
      </>
    );
  }
}

export default Keys;
