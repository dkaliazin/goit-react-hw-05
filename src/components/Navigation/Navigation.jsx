import { NavLink } from 'react-router-dom';
import React from 'react';
export default function Navigation() {
    return (
        <nav>
            <NavLink to="/" end>
                Home
            </NavLink>
            <NavLink to="/movies">
                Movies
            </NavLink>
        </nav>
    )
}