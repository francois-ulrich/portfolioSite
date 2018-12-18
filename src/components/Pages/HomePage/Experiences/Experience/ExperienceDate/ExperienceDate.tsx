import * as React from "react";
import Moment from 'react-moment';

interface ExperienceDateProps{
    value: string
}

export default class ExperienceDate  extends React.Component<ExperienceDateProps>{
    constructor(props:ExperienceDateProps){
        super(props);
    }

    render(){
        var format = "YYYY";

        if(this.props.value.includes("-"))
            format = "MMM YYYY";

        return(
            <span>
                <Moment locale="fr" format={format}>{this.props.value}</Moment>
            </span>
        );
    }
}