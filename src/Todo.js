import React, { Component } from 'react';

const Todo = ({addItem}) => (

		<div>
	     	<p>Your Todo List</p>
		      	<input type="text" ref= {(input)=> this.input=input}/><br/><br/>
		      	<button onClick = {(evt) => addItem(this.input.value)}> Add the Item</button><br/><br/>
	      	<br/><br/>
	    </div>
	)

export default Todo