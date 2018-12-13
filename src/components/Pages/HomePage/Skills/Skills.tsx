import * as React from "react";
import {Row, Col} from 'reactstrap';

import Skill from "./Skill/Skill";

interface SkillsProps{
    title: string
    skills: Array<Skills>
}

export default class Skills extends React.Component<SkillsProps>{

    constructor(props:SkillsProps){
        super(props);
    }

    render(){
        var key = 0;

        var skillsList = this.props.skills.map(function(skill:any){
            return(
                <Skill title={ skill.title } value={ skill.value } key={key++}/>
            );
        });

        return (
            <div className="skills">
                {skillsList}
            </div>
        );
    }
}