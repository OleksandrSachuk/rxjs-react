import React from 'react';
import { currentInput } from '../RxJS';

const Input = ({ inputValue }) =>
  (
    <input
      type="text"
      autoFocus
      placeholder="Type in something to do."
      value={ inputValue }
      onChange={ (e) => currentInput.next(e.target.value) }
    />
  );

export default Input;
