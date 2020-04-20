import React from 'react';
import {Link, useParams} from 'react-router-dom';
import Layout from 'components/Layout'

const Lessons = () => {

	let { week } = useParams();

	const lessons = [
		{id: 1, name: 'React Router'},
		{id: 2, name: 'React Hooks'},
		{id: 3, name: 'Context API'}
	]

	return (
		<Layout heading="Lessons">
			Choose a lesson:
			<ul>
				{ lessons.map(({id, name}) => <li key={id}><Link to={`/lessons/${id}`}>{name}</Link></li>) }
			</ul>
			<h2>Lesson: { lessons.find( ({id}) => id == parseInt(week) ).name }</h2>
		</Layout>
	)
}

export default Lessons;
