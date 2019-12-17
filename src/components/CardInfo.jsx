import React, { Component } from 'react';
import '../styles/CardInfo.css';

export default class CardInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            somehting:[],
        }
    }

    
    render() {
        if(!this.props.show){
            return null;
        }
        return (
            <div>
                <h1>Card Info</h1>
            </div>
        )
    }
}
