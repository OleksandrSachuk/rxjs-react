import React from 'react';
import { createTodo } from '../RxJS';

const Button = () => (<button onClick={ () => createTodo.next() }>Add to list</button>);

export default Button;
