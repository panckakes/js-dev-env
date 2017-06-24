/**
 * Created by Michael on 5/19/17.
 */
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>Pluralsite Admin</h1>
				<p>React, Redux and React Router in ES6 for ultra-responsive web apps</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
			</div>
		);
	}
}

export default HomePage;
