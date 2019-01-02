import * as React from "react";
import { Col } from "reactstrap";

import HeaderLogo from "./HeaderLogo/HeaderLogo";

// Load fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
// Load logos
import { faAt, faBars } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedinIn, faGithub, faAt, faBars);

// Links in header
const links = require("./../links.json");

interface HeaderLeftProps{
    toggleMenu:any,
}

export default class HeaderLeft extends React.Component<HeaderLeftProps>{
    constructor(props:HeaderLeftProps){
        super(props);
    }

    render(){
        return (
            <Col className="headerLeft d-sm-flex align-items-center " md="7" lg="5" xl="4">
                <HeaderLogo text="François Ulrich"/>

                <div className="headerContactLinks d-none d-sm-flex">
                    <a href={links.linkedin}>
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                    </a>

                    <a href={links.github}>
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                    
                    <a href={"mailto:"+links.email}>
                        <FontAwesomeIcon icon={['fas', 'at']} />
                    </a>
                </div>

                <div className="headerBurgerMenuButton d-sm-none" onClick={this.props.toggleMenu}>
                    <FontAwesomeIcon icon={['fas', 'bars']} />
                </div>
            </Col>
        );
    }
}