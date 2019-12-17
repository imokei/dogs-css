import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';

import "../styles/Card.css";

import CardInfo from '../components/CardInfo';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            
        }

        this.setShow = this.setShow.bind(this);
        this.test = this.test.bind(this);
    }

    setShow = (displayBool) =>{
        console.log('setshow was called')
    }
    test = (displayBool) =>{
        console.log('test was called')
    }

    componentDidMount() {
        //console.log("Card Mounted");
    }

    render() {
        return (
            <div className="card">
                <div className="img" styles={`{"background-image:url("${this.props.imgUrl}");`}></div>
                <img src={this.props.imgUrl} alt="img"></img>
                <div className="container">
                    <h1>
                        <b>
                            Dog
                        </b>
                        <p>
                            Dog Info
                        </p>
                        <button onClick = {this.test(true)}>More Info</button>
                        <Modal
                            show={this.state.show}
                            onHide={this.test(false)}
                            dialogClassName = "modal-90w"
                            aria-labelledby="example-custom-modal-styling-title"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Titles</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <CardInfo/>
                            </Modal.Body>

                        </Modal>

                    </h1>
                </div>


            </div>
        )
    }
}
