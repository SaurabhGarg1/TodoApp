import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {addTodoItem} from '../ActionCreator/ActionCreator';
import {connect} from 'react-redux';
import Todo from '../Todo';

const mapDispatchToProps = (dispatch) => {
		return bindActionCreators({
			addItem : (text) =>(addTodoItem(text))
		},dispatch)
}

const AddTodoContainer =  connect(null,mapDispatchToProps)(Todo);

export default AddTodoContainer