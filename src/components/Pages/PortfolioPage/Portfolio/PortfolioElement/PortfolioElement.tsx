import * as React from "react";

var imgToowhisp = require("./img/toowhisp.jpg");

interface PortfolioElementProps{
    title: string,
    description: string,
    url: string,
    technologies: Array<PortfolioElementPropTechnology>,
}

interface PortfolioElementPropTechnology{
    id: number,
    name: string,
}

export default class PortfolioElement extends React.Component<PortfolioElementProps>{
    constructor(props:PortfolioElementProps){
        super(props);
    }

    render(){
        var technologies:string = "";

        for(var i=0 ; i<this.props.technologies.length ; i++){
            let technology = this.props.technologies[i];
            technologies += technology.name + (i<this.props.technologies.length-1?", ":" ");
        }

        return (
            <div className="portfolioElement">
                <div className="portfolioElementThumbnail">
                    <div className="portfolioElementThumbnailImageContainer">
                        <img src={imgToowhisp}/>
                    </div>
                    <a className="portfolioElementLink" href={this.props.url} target="_blank">Voir le site</a>
                </div>

                <h2>{this.props.title}</h2>

                <p>{this.props.description}</p>

                <p className="portfolioElementDescription"><strong>Technologies</strong>: {technologies}</p>
            </div>
        );
    }
}