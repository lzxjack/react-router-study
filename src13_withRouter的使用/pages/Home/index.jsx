import React, { Component } from 'react';
import MyNavLink from '../../components/MyNavLink';
import { Route, Switch, Redirect } from 'react-router-dom';
import News from './News';
import Message from './Message';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <div>
                    <MyNavLink to="/home/news">News</MyNavLink>
                    <MyNavLink to="/home/message">Message</MyNavLink>
                </div>
                <div>
                    <Switch>
                        <Route path="/home/news" component={News} />
                        <Route path="/home/message" component={Message} />
                        <Redirect to="/home/news" />
                    </Switch>
                </div>
            </div>
        );
    }
}
