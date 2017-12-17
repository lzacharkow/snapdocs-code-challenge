// Presentation component

import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import { Logo } from '../Icons';

function Header() {
	return (
		<div className="header">
			<div className="header__inner">
				<Link to="/">
					<Logo className="header__logo" />
				</Link>
				<div className="header__account">
					Leslie @ PurpleCompany&nbsp;&nbsp;|&nbsp;&nbsp;<a href="" className="link--secondary">Logout</a>
				</div>
			</div>
		</div>
	);
}

export default Header;
