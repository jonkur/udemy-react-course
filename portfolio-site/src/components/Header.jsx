import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div className="header-main">
        <div className="header-inner">
            <NavLink activeClassName="is-active" exact to="/">Home</NavLink>
            <NavLink activeClassName="is-active" exact to="/portfolio">Portfolio</NavLink>
            <NavLink activeClassName="is-active" to="/contact">Contact</NavLink>
        </div>
    </div>
);

export default Header;