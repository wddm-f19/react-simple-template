import React from 'react';
import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = ({children, heading}) => {
	return (
		<>
			<Header heading={heading} />
			<main>
				{children}
			</main>
			<Footer />
		</>
	)
}

export default Layout;
