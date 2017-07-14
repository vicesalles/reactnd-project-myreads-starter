import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';
import propTypes from 'prop-types';

import ShelfChanger from './ShelfChanger'

export default class Book extends Component {

    /**
     * @description Sets a new shelf for the given book
     * @param {String} id Id of the book
     * @param {String} s Destination shelf
     */
    newShelf = (id, s) => {

        BooksAPI.update({ id }, s);

        //Calling for visual alert if it applies
        if (typeof this.props.selected === 'function') {
            this.props.selected(id);
        }

        //Calling for a Library view Update
        if (typeof this.props.update === 'function') {
            this.props.update();
        }

    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
                    <ShelfChanger shelf={this.props.book.shelf} onChange={(s) => this.newShelf(this.props.book.id, s)} />
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        );
    }
}

Book.propTypes = {
    book: propTypes.object.isRequired,
    selected: propTypes.func,
    update: propTypes.func
}