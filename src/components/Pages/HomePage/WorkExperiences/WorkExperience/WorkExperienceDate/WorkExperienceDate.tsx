import * as React from "react";
import Moment from 'react-moment';

interface WorkExperienceDateProps{
    value: string
}

export default class WorkExperienceDate  extends React.Component<WorkExperienceDateProps>{
    constructor(props:WorkExperienceDateProps){
        super(props);
    }

    render(){
        return(
            <Moment locale="fr" format="MMM YYYY">{this.props.value}</Moment>
        );
    }
}