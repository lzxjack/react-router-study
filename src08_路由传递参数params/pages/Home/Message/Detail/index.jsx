import React, { Component } from 'react';

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
        const { id, title } = this.props.match.params;
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
