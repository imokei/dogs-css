import React, { Component } from 'react'

export default class PreHome extends Component {
   constructor(props){
       super(props);
       this.state = {
           shouldShow: []
       }
   } 
    

    render() {
        
        return (
            <div>
                <h1>PRE HOME ENTER</h1>
                <button onClick={this.clickHandler}>Click to send info</button>
            </div>
        )
    }
}
