import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Shelf from './Shelf.jsx';

export default class MyLibrary extends Component {

    render() {

        return (

            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf title="Currently Reading" />
                        <Shelf title="Want To Read" />
                        <Shelf title="Read" />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>

        );

    }
}