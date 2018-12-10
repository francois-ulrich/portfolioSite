import * as React from "react";
import {Row, Col} from 'reactstrap';

import ExperienceDate from './ExperienceDate/ExperienceDate';

interface ExperienceProps {
    company:string,
    jobTitle:string,
    dateStart:string,
    dateEnd:string,
    location:string,
    descriptionHtml:string
}

interface ExperienceState {
    oneYearJob: boolean
}

export default class Experience extends React.Component<ExperienceProps,ExperienceState>{
    constructor(props:ExperienceProps){
        super(props);

        this.state = {
            oneYearJob : true,
        }
    }

    render(){
        var dateText = ( this.props.dateStart && this.props.dateEnd) ? (
            <span className="experienceDateText">
                <ExperienceDate value={this.props.dateStart}/> - <ExperienceDate value={this.props.dateEnd}/>
            </span>
        ) : (
            <div>
                <span className="experienceDateText">
                    <ExperienceDate value={this.props.dateStart}/>
                </span>

                <br/>
                <br/>

                <span className="experienceDateExtraText">en cours</span>
            </div>
        );
        
        return(
            <Row className="experience">
                <Col md={3} className="experienceDate">
                    {dateText}
                </Col>
                <Col md={9} className="experienceText">
                    <h4>{this.props.jobTitle} - {this.props.company}</h4>

                    <span className="experienceTextLocation">{this.props.location}</span>

                    <span dangerouslySetInnerHTML={{ __html: this.props.descriptionHtml }} />
                </Col>
            </Row>
        );
    }
}