import React, { Component } from 'react';
import '../styles/CardInfo.css';

export default class CardInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            somehting:[],
        }
    }

    componentDidMount(){
        console.log('Card Info Mounted')
        console.log(this.props);
    }
    render() {

        return (
            <div>
                <h1>Card Info</h1>
                <p>ASDOSDPOSDOPK PAOSD KPASODK ASPDO K:LK:LK ASDLK :S:LDK LSLADKALSDKALKL </p>
            </div>
        )
    }
}
