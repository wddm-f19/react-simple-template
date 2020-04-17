import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Course from 'components/Course'
import Lessons from 'components/Lessons'

import 'css/reset.css';
import 'css/index.css';

const App = () => {
	return (
		<Router>
			<Route exact path="/" component={Course} />
			<Route path="/lessons" component={Lessons} />
		</Router>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
