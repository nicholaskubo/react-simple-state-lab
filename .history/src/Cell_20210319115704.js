import React from "react";

export default class Cell extends React.Component {

state = {
    color: {this.props.values}
}

render(){
    return (
        <div className="cell" style={{backgroundColor: this.state.color}}></div>
    )
}



}