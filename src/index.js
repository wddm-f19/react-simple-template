import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from 'components/HelloWorld'
import 'css/reset.css';
import 'css/index.css';

const App = () => {
	return (
		<>
			<HelloWorld />
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
