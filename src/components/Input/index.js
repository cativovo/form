import React, { useState } from 'react';
import PropTypes from 'proptypes';
import { InputWrapper } from './style';


const Input = ({ isRequired, label }) => {
  const [inputValue, setInputValue] = useState('');
  const [isWarning, setIsWarning] = useState(false);
  const id = `input${Math.random()}`;

  return (
    <InputWrapper isWarning={isWarning}>
      <label htmlFor={id}>
        <span>
          {label}
          {isRequired && (
            <span className="red"> *</span>
          )}
        </span>
        <input
          id={id}
          onBlur={() => isRequired && setIsWarning(!inputValue)}
          onChange={(e) => {
            const { value } = e.target;
            if (isWarning && value) setIsWarning(false);
            if (!value) setIsWarning(true);
            setInputValue(value);
          }}
          type="text"
          value={inputValue}
        />
        {isWarning && <p className="warning">This is a required question</p>}
      </label>
    </InputWrapper>
  );
};


Input.propTypes = {
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

Input.defaultProps = {
  isRequired: false,
};


export default Input;
