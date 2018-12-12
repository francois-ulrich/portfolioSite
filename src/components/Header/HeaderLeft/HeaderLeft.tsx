import * as React from "react";
import { Col } from "reactstrap";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Load fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';

import { faAt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const links = require("./links.json");

library.add(faLinkedinIn, faGithub, faAt);

export default class HeaderLeft extends React.Component {
    render(){
        return (
            <Col className="headerLeft d-flex align-items-center" md={4}>
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