import React, { Component } from "react";

import "../styles/Card.css";
import Modal from '../components/Modal/Modal';
import CardInfo from '../components/CardInfo';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowing: false,

        }
        this.toggleShow = this.toggleShow.bind(this);
    }
    toggleShow =(shouldShow)=>{
        this.setState({isShowing:shouldShow})
    }
    componentDidMount() {

        //console.log("Card Mounted");
    }

    render() {
        return (
            <div className="card">
                {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}
                <div className="img" styles={`{"background-image:url("${this.props.imgUrl}");`}></div>
                <img src={this.props.imgUrl} alt="img"></img>
                <div className="container">
                    <h1>Dog</h1>
                    <h2>Dog Info</h2>
                    <button onClick={() => this.toggleShow(true)}>Activate Modal</button>
                    <Modal open={this.state.isShowing}
                        closeBtn={true}
                        closeOnEsc={true}
                        onClose={() => this.toggleShow(false)}
                        closeOnOverlay={true}
                    >
                        <div style={{ textAlign: 'center' }}>
                            <div>
                                <h1>Card Info : is Underneath</h1>
                                <CardInfo />
                            </div>

                        </div>


                    </Modal>

                </div>


            </div>
        )
    }
}
