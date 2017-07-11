import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';

import ShelfChanger from './ShelfChanger.jsx'

export default class Book extends Component {

    /**
     * @description Sets a new shelf for the given book
     * @param {String} id Id of the book
     * @param {String} s Destination shelf
     */
    newShelf = (id, s) => {
        BooksAPI.update({ id }, s);
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.cover})` }}></div>
                    <ShelfChanger onChange={(s) => this.newShelf(this.props.id, s)} />
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.author}</div>
            </div>
        );
    }
}