import React from 'react';
import { createTodo, currentInput } from '../RxJS';

const Input = ({ inputValue }) =>
  (
    <input
      type="text"
      autoFocus
      placeholder="Type in something to do."
      value={ inputValue }
      onChange={ (e) => currentInput.next(e.target.value) }
      onKeyPress={ (e) => e.charCode === 13 ? createTodo.next() : null }
    />
  );

export default Input;
