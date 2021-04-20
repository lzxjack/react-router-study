import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Detail from './Detail';

export default class Message extends Component {
    state = {
        messageArr: [
            {
                id: '01',
                title: '消息1',
            },
            {
                id: '02',
                title: '消息2',
            },
            {
                id: '03',
                title: '消息3',
            },
        ],
    };
    replaceShow = (id, title) => {
        // replace+params
        this.props.history.replace(`/home/message/detail/${id}/${title}`);

        // replace+search
        this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`);

        // replace+state
        this.props.history.replace(`/home/message/detail/`, { id, title });
    };
    pushShow = (id, title) => {
        // push+params
        this.props.history.push(`/home/message/detail/${id}/${title}`);

        // push+search
        this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`);

        // push+state
        this.props.history.push(`/home/message/detail/`, { id, title });
    };

    back = () => {
        this.props.history.goBack();
    };

    forward = () => {
        this.props.history.goForward();
    };
    go = () => {
        this.props.history.go(-2);
    };
    render() {
        const { messageArr } = this.state;
        return (
            <div>
                <ul>
                    {messageArr.map(msgObj => {
                        return (
                            <li key={msgObj.id}>
                                {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}
                                {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
                                <Link to={{ pathname: '/home/message/detail', state: { id: msgObj.id, title: msgObj.title } }}>
                                    {msgObj.title}
                                </Link>
                                &nbsp; &nbsp;
                                <button
                                    onClick={() => {
                                        this.pushShow(msgObj.id, msgObj.title);
                                    }}
                                >
                                    push模式
                                </button>
                                &nbsp; &nbsp;
                                <button
                                    onClick={() => {
                                        this.replaceShow(msgObj.id, msgObj.title);
                                    }}
                                >
                                    replace模式
                                </button>
                            </li>
                        );
                    })}
                </ul>
                <hr />
                {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}
                {/* <Route path="/home/message/detail" component={Detail} /> */}
                <Route path="/home/message/detail" component={Detail} />

                <button onClick={this.back}>后退</button>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>go</button>
            </div>
        );
    }
}
