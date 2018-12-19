import * as React from "react";
import { NavLink, Link  } from "react-router-dom";

// Load fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
// Load logos
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedinIn, faGithub, faAt);

// Links in header
const links = require("./../../links.json");

export default class HeaderNav extends React.Component {
    render(){
        return (
            <nav className="headerNav">
                <NavLink className="headerNavLink" to="/" exact={true}>À propos</NavLink>
                <NavLink className="headerNavLink" to="/portfolio">Portfolio</NavLink>
                <div className="d-sm-none">
                    <a className="headerNavLink" href={links.linkedin}>
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                    </a>
                    <a className="headerNavLink" href={links.github}>
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                    <a className="headerNavLink" href={"mailto:"+links.email}>
                        <FontAwesomeIcon icon={['fas', 'at']} />
                    </a>
                </div>
            </nav>
        );
    }
}