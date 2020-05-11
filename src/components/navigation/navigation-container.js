import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationComponent extends Component {

    render() {
        return (
            <div className='navbar'>
                <div className="nav-link-wrapper">
                    <NavLink to="/the-eighties" activeClassName="nav-link-active">1980's</NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/the-nineties" activeClassName="nav-link-active">1990's</NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
                </div>

                <div className="nav-link-wrapper">    
                    <NavLink to="/two-thousands" activeClassName="nav-link-active">2000's</NavLink>
                </div>

                <div className="nav-link-wrapper"> 
                    <NavLink to="/twenty-tens" activeClassName="nav-link-active">2010's</NavLink>
                </div>
            </div>
        );
    }
}