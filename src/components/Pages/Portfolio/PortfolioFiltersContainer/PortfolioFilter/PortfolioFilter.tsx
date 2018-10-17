import * as React from "react";

interface PortfolioFilterProps{
    name: string,
}

export default class PortfolioFilter extends React.Component<PortfolioFilterProps>{
    constructor(props:PortfolioFilterProps){
        super(props);
    }

    render(){
        return (
            <div className="portfolioFilter">
                <label>
                    <input type="checkbox" className="portfolioFilterCheckbox"/>
                    <span className="portfolioFilterName">{this.props.name}</span>
                </label>
            </div>
        );
    }
}