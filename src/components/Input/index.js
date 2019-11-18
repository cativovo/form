import React, { useState } from 'react';
import PropTypes from 'proptypes';
import { InputWrapper } from './style';

const Input = ({ isRequired, label }) => {
  const [inputValue, setInputValue] = useState('');
  const [hasWarning, setHasWarning] = useState(false);
  const id = `input${Math.random()}`;

  return (
    <InputWrapper hasWarning={hasWarning}>
      <label htmlFor={id}>
        <span>
          {label}
          {isRequired && <span className="red"> *</span>}
        </span>
        <input
          id={id}
          onBlur={() => isRequired && setHasWarning(!inputValue)}
          onChange={(e) => {
            const { value } = e.target;
            if (hasWarning && value) setHasWarning(false);
            if (!value) setHasWarning(true);
            setInputValue(value);
          }}
          type="text"
          value={inputValue}
        />
        {hasWarning && <p className="warning">This is a required question</p>}
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
