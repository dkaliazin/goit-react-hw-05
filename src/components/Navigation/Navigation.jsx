import { NavLink } from 'react-router-dom';
import React from 'react';
import css from "./Navigation.module.css"
export default function Navigation() {
    return (
        <nav className={css.nav}>
            <NavLink to="/" end >Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
        </nav>
    )
}