import React, { Component } from 'react';

const TodoItem = ({Items}) => (
	
	<ul>
		{Items.map(item => (<li>{item}</li>))}
	</ul>

)

export default TodoItem;
