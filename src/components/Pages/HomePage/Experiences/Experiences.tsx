import * as React from "react";
import {Row, Col} from 'reactstrap';

import Experience from "./Experience/Experience";

interface ExperiencesProps {
    title:string
    experiences:any
}

export default class Experiences extends React.Component<ExperiencesProps>{
    constructor(props:ExperiencesProps){
        super(props);
    }

    render(){
        var key=0;
        var experiencesList = this.props.experiences.map(function(experience:any){
            return(
                <Experience 
                    company={ experience.company }
                    jobTitle={ experience.jobTitle }
                    dateStart={ experience.dateStart }
                    dateEnd={ experience.dateEnd }
                    location={ experience.location }
                    descriptionHtml={ experience.descriptionHtml }
                    key = { key++ }
                />
            );
        });

        return (
            <div className="experiences">
                <Row>
                    <Col md="12">
                        <h2>{this.props.title}</h2>
                    </Col>
                </Row>

                {experiencesList}
            </div>
        );
    }
}