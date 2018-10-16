import * as React from "react";
import { NavLink } from "react-router-dom";

export default class HeaderNav extends React.Component {
    render(){
        return (
            <nav className="headerNav">
                <NavLink to="/">À propos</NavLink>
                <NavLink to="/parcours">Parcours</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
            </nav>
        );
    }
}