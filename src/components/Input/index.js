import React, { useState } from 'react';
import PropTypes from 'proptypes';
import { InputWrapper } from './style';

const Input = ({ required, label, type }) => {
  const [inputValue, setInputValue] = useState('');
  const [hasWarning, setHasWarning] = useState(false);
  const id = `input${Math.random()}`;

  return (
    <InputWrapper hasWarning={hasWarning}>
      <label htmlFor={id}>
        <span>
          {label}
          {required && <span className="red"> *</span>}
        </span>
        <input
          id={id}
          onBlur={() => required && setHasWarning(!inputValue)}
          onChange={(e) => {
            const { value } = e.target;
            if (hasWarning && value) setHasWarning(false);
            if (!value) setHasWarning(true);
            setInputValue(value);
          }}
          type={type}
          value={inputValue}
        />
        {hasWarning && <p className="warning">This is a required question</p>}
      </label>
    </InputWrapper>
  );
};

Input.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  required: false,
  type: 'text',
};

export default Input;
