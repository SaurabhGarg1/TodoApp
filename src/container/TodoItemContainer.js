import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {addTodoItem} from '../ActionCreator/ActionCreator';
import {connect} from 'react-redux';
import TodoItem from '../TodoItem';


const mapStateToProps = (state) => {
		return {
			Items : state
		}
}

const TodoItemContainer =  connect(mapStateToProps)(TodoItem);

export default TodoItemContainer