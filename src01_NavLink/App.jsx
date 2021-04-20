import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>React Router Demo</h2>
                <hr />
                <NavLink activeClassName="demo" to="/home">
                    Home
                </NavLink>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink activeClassName="demo" to="/about">
                    About
                </NavLink>
                <hr />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
            </div>
        );
    }
}
