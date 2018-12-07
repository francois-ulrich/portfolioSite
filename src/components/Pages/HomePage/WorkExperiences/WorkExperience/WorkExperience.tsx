import * as React from "react";
import {Row, Col} from 'reactstrap';
import Moment from 'react-moment';

import WorkExperienceDate from './WorkExperienceDate/WorkExperienceDate';

interface WorkExperienceProps {
    company:string,
    jobTitle:string,
    dateStart:string,
    dateEnd:string,
    location:string,
    descriptionHtml:string
}

interface WorkExperienceState {
    oneYearJob: boolean
}

export default class WorkExperience extends React.Component<WorkExperienceProps,WorkExperienceState>{
    constructor(props:WorkExperienceProps){
        super(props);

        this.state = {
            oneYearJob : true,
        }
    }

    render(){
        // WorkExperienceDateProps
        
        var dateText = ( this.props.dateStart && this.props.dateEnd) ? (
            <span>
                <WorkExperienceDate value={this.props.dateStart}/> - <WorkExperienceDate value={this.props.dateEnd}/>
            </span>
        ) : (
            <div>
                <span>
                <WorkExperienceDate value={this.props.dateStart}/>
                </span>

                <br/>
                <br/>

                <span>En cours</span>
            </div>
        );
        
        return(
            <Row>
                <Col md={3} className="workExperienceDate">
                    {dateText}
                </Col>
                <Col md={9} className="workExperienceText">
                    <h4>{this.props.jobTitle} - {this.props.company}</h4>

                    <span>{this.props.location}</span>

                    <p>{this.props.descriptionHtml}</p>
                </Col>
            </Row>
        );
    }
}