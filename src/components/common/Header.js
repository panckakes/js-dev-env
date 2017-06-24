/**
 * Created by Michael on 6/4/17.
 */
import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
	return (
		<nav>
			<IndexLink to="/" activeClassName="active">Home</IndexLink>
			{" | "}
			<Link to="/courses" activeClassName="active">Courses</Link>
			{" | "}
			<Link to="/about" activeClassName="active">About</Link>
			{loading && <LoadingDots dots={8} interval={160}/>}
		</nav>
	);
};

Header.propTypes = {
	loading: PropTypes.bool.isRequired
};

export default Header;
