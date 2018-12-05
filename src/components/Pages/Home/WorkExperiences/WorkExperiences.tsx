import * as React from "react";
import {Row, Col} from 'reactstrap';

interface WorkExperiencesProps {
    workExperiences:any
}

export default class Hobbies extends React.Component<WorkExperiencesProps>{
    constructor(props:WorkExperiencesProps){
        super(props);
    }

    render(){
        var key=0;
        var workExperiencesList = this.props.workExperiences.map(function(hobby:any){
            return(
                <Col key={key++}>
                    
                </Col>
            );
        });

        return (
            <div>
                <Row>
                    <Col md="12">
                        <h2>Expériences professionnelles</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>

                    </Col>
                </Row>
            </div>
        );
    }
}