import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Header = ({heading}) => {

	return (
		<header>
			<nav>
				<ul>
					<li><Link to="/">Course Home</Link></li>
					<li><Link to="/lessons">Lessons</Link></li>
				</ul>
			</nav>
			{(heading) ? <h1>{heading}</h1> : `No heading`}
			
		</header>
	)
}

export default Header;
