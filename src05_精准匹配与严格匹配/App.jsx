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
                <MyNavLink to="/about">About</MyNavLink>
                <MyNavLink to="/home/a/b">Home</MyNavLink>
                <hr />
                <Switch>
                    <Route exact={true} path="/about" component={About} />
                    {/* <Route exact={true} path="/home" component={Home} /> */}
                    <Route exact path="/home" component={Home} />
                </Switch>
            </div>
        );
    }
}
