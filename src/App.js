import React from 'react';
import './App.css';

import Modal from './components/Modal/Modal';
import NavBar from './components/NavBar';
import Card from './components/Card';
import CardInfo from './components/CardInfo'
const axios = require('axios');

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoaded: false,
      listOfDogs: [],
      numOfDogs: 9,
      dogData: [],
      show: false
    }

    this.handleRandom = this.handleRandom.bind(this);
    this.makeReq = this.makeReq.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow = (isShowing) =>{
    this.setState({show:isShowing})
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
        <NavBar />
        <h1>Dogs</h1>
        <button onClick={this.handleRandom}>Randomize</button>
        <div className="wrapper">



          {this.state.listOfDogs.map((item, index) => (

            <div className="content" key={index}>
              {item}
            </div>

          ))}
          <div className="sideBar">
            <h1> Hello World</h1>
            <CardInfo />
          </div>

          <button onClick={() => this.toggleShow(true)}>Activate Modal</button>
          <Modal open={this.state.show}
            closeBtn={true}
            closeOnEsc={true}
            onClose={() => this.toggleShow(false)}
            closeOnOverlay={true}
          >
            <div style={{ textAlign: 'center'}}>
              <div>
                <h1>Card Info : is Underneath</h1>
                <CardInfo/>
              </div>

            </div>


          </Modal>
        </div>


      </div>
    );
  }

}

export default App;
