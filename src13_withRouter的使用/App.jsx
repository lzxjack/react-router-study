import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
// import Test from './pages/Test';
import MyNavLink from './components/MyNavLink';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <hr />
                <MyNavLink to="/about">About</MyNavLink>
                <MyNavLink to="/home">Home</MyNavLink>
                <hr />
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/home" component={Home} />
                    <Redirect to="/about" />
                </Switch>
            </div>
        );
    }
}
