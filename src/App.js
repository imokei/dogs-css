import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Card from './components/Card';
const axios = require('axios');

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoaded: false,
      listOfDogs: [],
      numOfDogs: 9,
      dogData: [],
    }

    this.handleRandom = this.handleRandom.bind(this);
    this.makeReq = this.makeReq.bind(this);
  }

  makeReq = () => {
    let url = 'https://dog.ceo/api/breeds/image/random/' + this.state.numOfDogs;
    axios.get(url)
      .then((res) => {
        this.setState({ dogData: res.data, isLoaded: true });

      })
      .catch((err) => {
        console.log('The axios error: ', err);
      })
      .finally(() => {
        let tempArray = [];
        tempArray = this.state.dogData.message.map((imgUrl, index) => {
          return <Card key={index} imgUrl={imgUrl} ></Card>;

        });

        this.setState({ listOfDogs: tempArray });
      });
  }

  handleRandom = () => {
    this.makeReq();
  }


  componentDidMount() {
    this.makeReq();

  }

  componentDidUpdate() {
    //console.log('App Component Updated);
  }



  render() {
    return (
      <div className="App">
        <NavBar/>
        <h1>Dogs</h1>
        <button onClick={this.handleRandom}>Randomize</button>
        <div className="wrapper">



          {this.state.listOfDogs.map((item, index) => (

            <div className="content" key={index}>
              {item}
            </div>

          ))}
          <div className = "sideBar">
            <h1> Hello World</h1>
          </div>


        </div>


      </div>
    );
  }

}

export default App;
