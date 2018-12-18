import * as React from "react";
import { Col } from "reactstrap";

import HeaderLogo from "./HeaderLogo/HeaderLogo";

// Load fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
// Load logos
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedinIn, faGithub, faAt);

// Links in header
const links = require("./links.json");

export default class HeaderLeft extends React.Component {
    render(){
        return (
            <Col className="headerLeft d-sm-flex align-items-center " md="7" lg="5" xl="4">
                <HeaderLogo text="François Ulrich"/>

                <div className="headerContactLinks">
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
                
            </Col>
        );
    }
}