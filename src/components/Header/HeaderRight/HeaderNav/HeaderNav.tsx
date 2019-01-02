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

// interface HeaderNavProps{
//     open:boolean,
// }

// export default class HeaderNav extends React.Component<HeaderNavProps> {
export default class HeaderNav extends React.Component {
    // constructor(props:HeaderNavProps){
    //     super(props);
    // }

    render(){
        return (
            // <nav className={"headerNav" + (this.props.open?" active":"")}>
            <nav className="headerNav">
                <NavLink className="headerNavLink" to="/" exact={true}>À propos</NavLink>
                <NavLink className="headerNavLink" to="/portfolio">Portfolio</NavLink>
                <div className="d-sm-none">
                    <a className="headerNavLink" href={links.linkedin}>
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} /> Linkedin
                    </a>
                    <a className="headerNavLink" href={links.github}>
                        <FontAwesomeIcon icon={['fab', 'github']} /> Github
                    </a>
                    <a className="headerNavLink" href={"mailto:"+links.email}>
                        <FontAwesomeIcon icon={['fas', 'at']} /> Mail
                    </a>
                </div>
            </nav>
        );
    }
}