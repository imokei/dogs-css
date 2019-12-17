import React, { Component } from "react";

import "../styles/Card.css";

import Modal from './Modal';
import CardInfo from '../components/CardInfo';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowing: false,

        }
        this.openModalHandler = this.openModalHandler.bind(this);
        this.closeModalHandler = this.closeModalHandler.bind(this);
    }

    openModalHandler = () =>{
        this.setState({
            isShowing:true
        });
    }

    closeModalHandler = () =>{
        this.setState({
            isShowing:false
        })
    }

    componentDidMount() {

        //console.log("Card Mounted");
    }

    render() {
        return (
            <div className="card">
               {this.state.isShowing ?<div onClick = {this.closeModalHandler} className = "back-drop"></div>:null}
                <div className="img" styles={`{"background-image:url("${this.props.imgUrl}");`}></div>
                <img src={this.props.imgUrl} alt="img"></img>
                <div className="container">
                    <h1>Dog</h1>
                    <h2>Dog Info</h2>
               
                    <button onClick={this.openModalHandler} className = "open-modal-btn">More Info</button>
               
                    <Modal
                        className = "modal"
                        show={this.state.isShowing}
                        close={this.closeModalHandler}
                        Somet random information
                    >

                    </Modal>

                </div>


            </div>
        )
    }
}
