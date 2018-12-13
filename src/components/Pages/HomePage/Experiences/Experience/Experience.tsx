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
            <div className="experienceDateTextContainer">
                <div className="experienceDateText">
                    <ExperienceDate value={this.props.dateStart}/> - <ExperienceDate value={this.props.dateEnd}/>
                </div>
            </div>
        ) : (
            <div>
                <div className="experienceDateTextContainer">
                    <div className="experienceDateText">
                        <ExperienceDate value={this.props.dateStart}/>
                    </div>
                </div>

                <br/>
                <br/>

                <span className="experienceDateExtraText">en cours</span>
            </div>
        );
        
        return(
            <Row className="experience">
                <Col xs="2" sm="4" md="3" className="experienceDate">
                    {dateText}
                </Col>
                <Col xs="10" sm="8" md="9" className="experienceText">
                    <h4>{this.props.jobTitle} - {this.props.company}</h4>

                    <span className="experienceTextLocation">{this.props.location}</span>

                    <span dangerouslySetInnerHTML={{ __html: this.props.descriptionHtml }} />
                </Col>
            </Row>
        );
    }
}