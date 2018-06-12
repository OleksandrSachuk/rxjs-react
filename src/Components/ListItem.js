import React from 'react';
import { updateTodo, deleteTodo } from '../RxJS';

const ListItem = ({ index, text, done }) => (
  <li>
    <input onChange={ () => updateTodo.next({ index, done: !done }) } checked={ done } type="checkbox"
           value="" />
    { done === true ? (<s>{ text }</s>) : text }
    <button onClick={ () => deleteTodo.next(index) }>Delete</button>
  </li>
);

export default ListItem;
