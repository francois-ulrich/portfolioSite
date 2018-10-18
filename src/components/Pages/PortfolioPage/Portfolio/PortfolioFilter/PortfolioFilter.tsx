import * as React from "react";

interface PortfolioFilterProps{
    name: string,
}

interface PortfolioFilterStates{
    active: boolean,
}

export default class PortfolioFilter extends React.Component<PortfolioFilterProps,PortfolioFilterStates>{
    constructor(props:PortfolioFilterProps){
        super(props);

        this.toggleActive = this.toggleActive.bind(this);

        this.state = {
            active: true,
        }
    }

    toggleActive(e:React.ChangeEvent<HTMLInputElement>){
        this.setState({
            active: e.target.checked,
        });
    }

    render(){
        return (
            <div className="portfolioFilter">
                <label>
                    <input type="checkbox" className="portfolioFilterCheckbox" checked={this.state.active} onChange={this.toggleActive}/>
                    <span className="portfolioFilterName">{this.props.name}</span>
                </label>
            </div>
        );
    }
}