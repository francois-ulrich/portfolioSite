import * as React from "react";
import {Row, Col} from 'reactstrap';

import Hobbies from "./Hobbies/Hobbies";
import Experiences from "./Experiences/Experiences";
import Skills from "./Skills/Skills";

const hobbiesJson = require("./hobbies.json");
const workExperiencesJson = require("./workExperiences.json");
const educationJson = require("./education.json");
const skillsJson = require("./skills.json");
const imgProfile = require("../../../img/francois-ulrich.jpg");

export default class HomePage extends React.Component{
    render(){
        return (
            <div className="home">
                <Row>
                    <Col md={12}>
                        <h1>À propos de moi</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} className="text-md-center">
                        <img src={imgProfile} className="homeProfileImage"/>
                    </Col>
                    <Col lg={8}>
                        <Row>
                            <Col md={12}>
                                <h2>Compétences</h2>

                                <Row>
                                    <Col md={4}>
                                        <h5>Langages</h5>
                                        <Skills title={ skillsJson[0].title } skills={ skillsJson[0].skills }/>
                                    </Col>
                                    <Col md={4}>
                                        <h5>Frameworks et outils</h5>
                                        <Skills title={ skillsJson[1].title } skills={ skillsJson[1].skills }/>
                                    </Col>
                                    <Col md={4}>
                                        <h5>Graphisme & audiovisuel</h5>
                                        <Skills title={ skillsJson[2].title } skills={ skillsJson[2].skills }/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <br />

                <Experiences title="Expériences professionnelles" experiences={workExperiencesJson}/>

                <Experiences title="Formation" experiences={educationJson}/>

                <Hobbies hobbies={hobbiesJson}/>
            </div>
        );
    }
}