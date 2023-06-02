import { React } from 'react';
import PropTypes from 'prop-types';

const Result = ({ total, next, operation }) => (
  <div className="result-container">
    {console.log(total, next, operation)}
    <input className="result-input" type="text" readOnly value={total || next || operation || 0} />
  </div>
);

Result.propTypes = {
  total: PropTypes.number,
  operation: PropTypes.string,
  next: PropTypes.string,
};

Result.defaultProps = {
  total: 0,
  operation: null,
  next: null,
};
export default Result;
