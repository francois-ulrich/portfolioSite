import * as React from "react";
import {Row, Col} from 'reactstrap';

import WorkExperience from "./WorkExperience/WorkExperience";

interface WorkExperiencesProps {
    workExperiences:any
}

export default class WorkExperiences extends React.Component<WorkExperiencesProps>{
    constructor(props:WorkExperiencesProps){
        super(props);
    }

    render(){
        var key=0;
        var workExperiencesList = this.props.workExperiences.map(function(workExprience:any){
            return(
                <WorkExperience 
                    company={ workExprience.company }
                    jobTitle={ workExprience.jobTitle }
                    dateStart={ workExprience.dateStart }
                    dateEnd={ workExprience.dateEnd }
                    location={ workExprience.location }
                    descriptionHtml={ workExprience.descriptionHtml }
                    key = { key++ }
                />
            );
        });

        return (
            <div className="workExperiences">
                <Row>
                    <Col md="12">
                        <h2>Expériences professionnelles</h2>
                    </Col>
                </Row>

                {workExperiencesList}
            </div>
        );
    }
}