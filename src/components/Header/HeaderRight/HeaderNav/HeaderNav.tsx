import * as React from "react";
import { NavLink, Link  } from "react-router-dom";

export default class HeaderNav extends React.Component {
    render(){
        return (
            <nav className="headerNav">
                <NavLink to="/" exact={true}>À propos</NavLink>
                <NavLink to="/portfolio">Portfolio</NavLink>
            </nav>
        );
    }
}