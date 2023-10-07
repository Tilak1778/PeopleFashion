import React from 'react';
import './styles.scss';
import { Link, useLocation  } from 'react-router-dom';

const Footer = (props) => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<footer className="footer">
			<div className="wrap">© People Fashion {year} | 
			<Link to="/privacyPolicy"> Privacy Policy</Link> |
			<Link to="/support"> Support</Link>
			</div>
		</footer>
	);
};

export default Footer;
