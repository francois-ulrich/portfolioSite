import * as React from "react";

interface HobbyProps {
    id: string,
    description: string,
    backgroundColor: string,
    animationImages: Array<String>
}

export default class Hobby extends React.Component<HobbyProps>{
    constructor(props:HobbyProps){
        super(props);
    }

    render(){
        var tempProps = this.props,
        key=0;

        var frameContent = this.props.animationImages.map(function(data:any){
            key++;

            return (
                <img src={require("../../../../../img/hobbies/" + tempProps.id + "/" + data.src)} className={tempProps.id + key} key={key}/>
            );
        });

        return (
            <div className="hobby">
                <div className="hobbyFrame" style={ this.props.backgroundColor ? {backgroundColor:this.props.backgroundColor} : null }>
                    {frameContent}
                </div>

                <span>
                    {this.props.description}
                </span>
            </div>
        );
    }
}