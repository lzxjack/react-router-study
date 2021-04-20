import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
// import Test from './pages/Test';
import MyNavLink from './components/MyNavLink';

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>React Router Demo</h2>
                <hr />
                <MyNavLink to="/jack/about">About</MyNavLink>
                <MyNavLink to="/jack/home">Home</MyNavLink>
                <hr />
                <Switch>
                    <Route path="/jack/about" component={About} />
                    <Route path="/jack/home" component={Home} />
                </Switch>
            </div>
        );
    }
}
