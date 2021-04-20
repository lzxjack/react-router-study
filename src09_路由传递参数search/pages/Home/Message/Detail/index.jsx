import React, { Component } from 'react';
import qs from 'querystring';

const DetailData = [
    {
        id: '01',
        content: '123',
    },
    {
        id: '02',
        content: '456',
    },
    {
        id: '03',
        content: '789',
    },
];
export default class Detail extends Component {
    render() {
        //  接受params参数
        // const { id, title } = this.props.match.params;

        // console.log(this.props);
        const { search } = this.props.location;
        // console.log(qs.parse(search.slice(1)));
        const { id, title } = qs.parse(search.slice(1));

        const findResult = DetailData.find(detailObj => {
            return detailObj.id === id;
        });
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>TITLE:{title}</li>
                    <li>CONTENT:{findResult.content}</li>
                </ul>
            </div>
        );
    }
}
