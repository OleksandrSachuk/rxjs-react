import React, { Component } from 'react';

import {
  createTodo,
  currentInput,
  updateTodo,
  deleteTodo,
} from '../RxJS';

import ListItem from './ListItem';
import Button from './Button';
import Input from './Input';
import './App.css';

class App extends Component {

  state = {
    todos: [],
    input: '',
  };

  componentDidMount() {
    createTodo.subscribe(() => {
      this.setState({
        input: '',
        todos: this.state.todos.concat({
          text: this.state.input,
          done: false,
        }),
      });
    });

    currentInput.subscribe(input => this.setState({ input }));

    deleteTodo.subscribe((index) => {
      this.setState({ todos: this.state.todos.filter((_, _index) => index !== _index) });
    });

    updateTodo.subscribe(({ index, ...obj }) => {
      this.setState({ todos: this.state.todos, ...Object.assign({}, this.state.todos[index], obj) });
    });
  }

  render() {
    return (
      <div className="App-intro">
        <Input inputValue={ this.state.input } />
        <Button />
        <ul>
          { this.state.todos
            .map(({ text, done }, index) =>
              (
                <ListItem key={ text }
                          text={ text }
                          done={ done }
                          index={ index }
                />
              ),
            )
          }
        </ul>
      </div>
    );
  }
}

export default App;
