import { React } from 'react';
import PropTypes from 'prop-types';

const Keys = ({ tabCalculator }) => (
  <>
    <button onClick={(e) => tabCalculator(e)} type="button" className="btn btn-opp">AC</button>
    <button onClick={(e) => tabCalculator(e)} type="button" className="btn btn-opp">+/-</button>
    <button onClick={(e) => tabCalculator(e)} type="button" className="btn btn-opp">%</button>
    <button onClick={(e) => tabCalculator(e)} type="button" className="btn btn-opp-s">÷</button>
    <button onClick={(e) => tabCalculator(e)} type="button" className="btn btn-num">7</button>
    <button onClick={(e) => tabCalculator(e)} type="button" className="btn btn-num">8</button>
    <button onClick={(e) => tabCalculator(e)} type="button" className="btn btn-num">9</button>
    <button onClick={(e) => tabCalculator(e)} type="button" className="btn btn-opp-s">x</button>
    <button onClick={(e) => tabCalculator(e)} type="button" className="btn btn-num">4</button>
    <button onClick={(e) => tabCalculator(e)} type="button" className="btn btn-num">5</button>
    <button onClick={(e) => tabCalculator(e)} type="button" className="btn btn-num">6</button>
    <button onClick={(e) => tabCalculator(e)} type="button" className="btn btn-opp-s">-</button>
    <button onClick={(e) => tabCalculator(e)} type="button" className="btn btn-num">1</button>
    <button onClick={(e) => tabCalculator(e)} type="button" className="btn btn-num">2</button>
    <button onClick={(e) => tabCalculator(e)} type="button" className="btn btn-num">3</button>
    <button onClick={(e) => tabCalculator(e)} type="button" className="btn btn-opp-s">+</button>
    <button onClick={(e) => tabCalculator(e)} type="button" className="btn btn-num span-2">0</button>
    <button onClick={(e) => tabCalculator(e)} type="button" className="btn btn-num">.</button>
    <button onClick={(e) => tabCalculator(e)} type="button" className="btn btn-opp-s">=</button>
  </>
);

Keys.propTypes = {
  tabCalculator: PropTypes.func.isRequired,
};

export default Keys;
