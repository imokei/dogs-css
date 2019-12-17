import React, { Component } from "react";
import Popup from "reactjs-popup";

import "../styles/Card.css";

import CardInfo from '../components/CardInfo';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            something: []
        }


    }
    
    componentDidMount() {
        //console.log("Card Mounted");
    }

    render() {
        return (
            <div className="card">
                <div className = "img" styles = {`{"background-image:url("${this.props.imgUrl}");`}></div>
                <img src={this.props.imgUrl} alt="img"></img>
                <div className="container">
                    <h1>
                        <b>
                            Dog
                        </b>
                        <p>
                            Dog Info
                        </p>
                        <Popup trigger = {<button className = "">More Info</button>}>
                            <CardInfo dogName = {this.props.dogName} ></CardInfo>
                        </Popup>
                    </h1>
                </div>


            </div>
        )
    }
}
