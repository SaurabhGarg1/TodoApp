import React, { Component } from 'react';
import './App.css';
import AddTodoContainer from './container/AddTodoContainer';
import TodoItemContainer from './container/TodoItemContainer';

const App = () => (
  		<div>
  			<AddTodoContainer/>
  			<TodoItemContainer/>
  		</div>
  	)

export default App;
