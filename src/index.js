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
			<header>
				<nav>
					<ul>
						<li><Link to="/">Course Home</Link></li>
						<li><Link to="/lessons">Lessons</Link></li>
					</ul>
				</nav>
			</header>
			<main>

				<Route exact path="/" component={Course} />
				<Route path="/lessons" component={Lessons} />

			</main>
			<footer>Copyright 2020 &copy;</footer>
		</Router>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
