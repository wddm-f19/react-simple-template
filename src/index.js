import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HelloWorld from 'components/HelloWorld'

import 'css/reset.css';
import 'css/index.css';

const App = () => {
	return (
		<>
			<header></header>
			<Router>

				<Route path="/">
					<HelloWorld />
				</Route>

			</Router>
			<footer></footer>
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
