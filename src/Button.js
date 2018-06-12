import React from 'react';
import { createTodo } from './common';

const Button = () => (<button onClick={ () => createTodo.next() }>Add to list</button>);

export default Button;
