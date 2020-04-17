import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<li><Link to="/">Course Home</Link></li>
					<li><Link to="/lessons">Lessons</Link></li>
				</ul>
			</nav>
		</header>
	)
}

export default Header;
