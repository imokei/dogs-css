import React, { Component } from 'react'

export class DogCart extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            dogID:0,
        }


    }

    //TODO:
    //create path based off selected countries and locations
    //calculate costs and stuff
    //create budgets


    componentDidMount(){
        //console.log('Dog Car Mounted');
    }
    componentDidUpdate(){
        //console.log('Dog Cart Updated');
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default DogCart
