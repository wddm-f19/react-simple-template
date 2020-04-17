import React from 'react';
import {Link} from 'react-router-dom';

const Course = () => {
	return (
		<>
			<h1>Welcome to WDDM 122</h1>
			<ul>
				<li><Link to="/lessons">View the lessons</Link></li>
			</ul>
		</>
	)
}

export default Course;
