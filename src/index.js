import React from 'react';
import {render} from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Todos from './Reducer/Todos';

const store = createStore(Todos);

render(
	<Provider store = {store}>
  		<App/>
  	</Provider>, 
  	document.getElementById('root')
)

registerServiceWorker();
