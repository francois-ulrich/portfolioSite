import * as React from "react";
import {Col} from 'reactstrap';

interface PortfolioElementProps{
    title: string,
    description: string,
    url: string,
}

export default class PortfolioElement extends React.Component<PortfolioElementProps>{
    constructor(props:PortfolioElementProps){
        super(props);
    }

    render(){
        return (
            <div className="portfolioElement">
                <h2>{this.props.title}</h2>
                <div className="portfolioElementThumbnail">
                    <div className="portfolioElementThumbnailImageContainer">

                    </div>
                    <div className="portfolioElementThumbnailOverlayContainer">
                        <a className="portfolioElementLink" href={this.props.url}>Voir le site</a>
                    </div>
                </div>
                <p className="portfolioElementDescription">{this.props.description}</p>
            </div>
        );
    }
}