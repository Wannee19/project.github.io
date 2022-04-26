import React, { Component } from 'react'

class Widecard extends Component {
    render() {
        return(
            <div className="widecard">
                <div className="wide-con">
                    <h3>{this.props.title}</h3>
                    <h4 className="secondtext">{this.props.where}</h4>
                    <h4 className="secondtext">{this.props.from} - {this.props.to}</h4>
                    <h5 className="secondtext">{this.props.text}</h5>
                    <h5><li className="secondtext">{this.props.content1}</li></h5>
                    <h5><li className="secondtext">{this.props.content2}</li></h5>
                    <h5><li className="secondtext">{this.props.content3}</li></h5>
                </div>
            </div>
        );
    }
}

export default Widecard;
