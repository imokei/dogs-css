import React from 'react';
import './App.css';

import Home from '../src/components/Home/Home';
import NavBar from './components/NavBar';
import PreHome from '../src/components/PreHome';
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      shouldShow: true,
      dogID: 1,
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    this.setState({shouldShow:false, dogID:2})
  }

  render() {
    if (this.state.shouldShow === true){
      return(
        <div className="App">
          <h1>PRE HOME ENTER</h1>
          <button onClick={this.clickHandler}>Click to send info</button>
        </div>
      );

    }
    else{
      return (
        <Home dogId={this.state.dogID}/>
      )
    }
  }

}

export default App;
