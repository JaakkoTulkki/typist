import React from 'react';
import Well from 'react-bootstrap/lib/Well';

const TextWell = ({text}) => {
  return (
    <div>
      <Well>{text}</Well>
    </div>
  );
};

TextWell.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default TextWell;