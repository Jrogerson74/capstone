import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationComponent extends Component {

    render() {
        return (
            <div>

                <NavLink to="/the-eighties">1980's</NavLink>
                <NavLink to="/the-nineties">1990's</NavLink>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/two-thousands">2000's</NavLink>
                <NavLink to="/twenty-tens">2010's</NavLink>
                
            </div>
        );
    }
}