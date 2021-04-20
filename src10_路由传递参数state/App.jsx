import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>React Router Demo</h2>
                <hr />
                <Link to="/home">Home</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/about">About</Link>
                <hr />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
            </div>
        );
    }
}
