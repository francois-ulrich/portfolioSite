import * as React from "react";
import {Row, Col} from 'reactstrap';

import Hobbies from "./Hobbies/Hobbies";
import WorkExperiences from "./WorkExperiences/WorkExperiences";

const hobbiesJson = require("./hobbies.json")
const imgProfile = require("../../../img/francois-ulrich.jpg");

export default class Home extends React.Component{
    render(){
        return (
            <div className="home">
                <Row>
                    <Col md={12}>
                        <h1>À propos de moi</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <img src={imgProfile} className="homeProfileImage"/>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col md={6}>
                                <h5>Mes compétences</h5>

                                <h6>Langages</h6>
                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS3 / SCSS/ LESS</li>
                                    <li>Javascript / Typescript </li>
                                    <li>PHP</li>
                                    <li>MySQL</li>
                                </ul>

                                <h6>Frameworks / outils</h6>
                                <ul>
                                    <li>Laravel</li>
                                    <li>Bootstrap</li>
                                    <li>jQuery</li>
                                    <li>Wordpress</li>
                                    <li>Node.js</li>
                                    <li>NPM</li>
                                    <li>Webpack</li>
                                    <li>React</li>
                                    <li>Git</li>
                                </ul>
                            </Col>
                            <Col md={6}>
                                <h6>Compétences additionnelles</h6>
                                <ul>
                                    <li>Photoshop</li>
                                    <li>Illustrator</li>
                                    <li>After effects</li>
                                    <li>Animate</li>
                                    <li>Premiere</li>
                                    <li>Suite Office</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <WorkExperiences workExperiences={hobbiesJson}/>

                <Hobbies hobbies={hobbiesJson}/>
            </div>
        );
    }
}