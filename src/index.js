import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Course from 'components/Course'
import Lessons from 'components/Lessons'

import 'css/reset.css';
import 'css/index.css';

const App = () => {
	return (
		<>
			<header></header>
			<Router>

				<Route exact path="/" component={Course} />
				<Route path="/lessons" component={Lessons} />

			</Router>
			<footer></footer>
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
