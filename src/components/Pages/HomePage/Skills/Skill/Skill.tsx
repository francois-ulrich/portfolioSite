import * as React from "react";
import {Row, Col} from 'reactstrap';

interface SkillProps{
    title: string
    value: number
    maxValue: number
}

export default class Skill extends React.Component<SkillProps>{
    public static defaultProps = {
        maxValue: 10
    };

    constructor(props:SkillProps){
        super(props);
    }

    render(){


        return(
            <Row className="skill">
                <Col xl="5">
                    <span className="skillTitle">{ this.props.title }</span>
                </Col>
                <Col xl="7">
                    <div className="skillBarContainer">
                        <div className="skillBar" style={{width: (this.props.value / this.props.maxValue) * 100 +"%" }}></div>
                    </div>
                </Col>
            </Row>
        );
    }
}