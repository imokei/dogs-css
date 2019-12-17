import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../styles/NavBar.css';
import { stack as Menu } from 'react-burger-menu';


export default class NavBar extends Component {

    render() {
        return (
            <Router>
            
                <Menu right={true}>

                    <Link to="/" className="bm-item">Home</Link>
                    <Link to="/dogs" className="bm-item">Dogs</Link>
                    <Link to="/cats" className="bm-item">Cats</Link>
                    <Link to="/birds" className="bm-item">Birds</Link>
                    <Link to="/" className="bm-item">Home</Link>
                    <Link to="/dogs" className="bm-item">Dogs</Link>
                    <Link to="/cats" className="bm-item">Cats</Link>
                    <Link to="/birds" className="bm-item">Birds</Link>
                    <Link to="/" className="bm-item">Home</Link>
                    <Link to="/dogs" className="bm-item">Dogs</Link>
                    <Link to="/cats" className="bm-item">Cats</Link>
                    <Link to="/birds" className="bm-item">Birds</Link>


                </Menu>
            
                <Switch>
                    <Route path="/">
                        {/* <Home/> */}
                    </Route>
                    <Route path="/dogs">
                        {/* <Dogs/> */}
                    </Route>
                    <Route path="/cats">
                        {/* <Cats/> */}
                    </Route>
                    <Route path="/birds">
                        {/* <Birds/> */}
                    </Route>
                </Switch>
        
            </Router>
        )
    }
}
