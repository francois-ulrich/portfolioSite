import * as React from "react";

interface PortfolioFilterProps{
    id: number,
    name: string,
    activeFilters: Array<any>, 
    toggleActive: any,
}

interface PortfolioFilterStates{
    active: boolean,
}

export default class PortfolioFilter extends React.Component<PortfolioFilterProps,PortfolioFilterStates>{
    constructor(props:PortfolioFilterProps){
        super(props);

        //this.toggleActive = this.toggleActive.bind(this);

        this.state = {
            active: true,
        }
    }

    /*
    toggleActive(e:React.ChangeEvent<HTMLInputElement>){
        
        this.setState({
            active: e.target.checked,
        });
        
    }
    */

    /*
    handleClick(){
        console.log(this.props.id);
        this.props.toggleActive(this.props.id);
    }
    */

    handleClick = (event:React.ChangeEvent<HTMLInputElement>) => {
        this.props.toggleActive(event, this.props.id)
    }

    isInActiveFilters(){
        for(var i=0;i<this.props.activeFilters.length;i++){
            if(this.props.activeFilters[i].name === this.props.name){
                return true;
            }
        }

        return false;
    }

    render(){
        return (
            <div className="portfolioFilter">
                <label>
                    <input type="checkbox" className="portfolioFilterCheckbox" checked={this.state.active} onChange={this.handleClick}/>
                    <span className="portfolioFilterName">{this.props.name}</span>
                </label>
            </div>
        );
    }
}