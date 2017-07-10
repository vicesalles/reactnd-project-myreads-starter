import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';

import Book from './Book.jsx';
import Shelf from './Shelf.jsx';

export default class MyLibrary extends Component {
    state = {
        currentlyReading: [],
        wantToRead: [],
        read: []
    }
    componentDidMount() {
       
        BooksAPI.getAll().then((res) => {
            
            //Those are the shelves where I want to organize the books.
            let myShelves = ['currentlyReading', 'wantToRead', 'read'];
            
            //Mapping throw the different shelves and putting there the books
            myShelves.map((s) => {
                this.organizeToShelf(s, res);
            });          

        });

    }

    /**
     * @description Takes the data coming from the API and turns it into a state array made of components
     * @param {String} shelf - Desired Shelf
     * @param {Array} books - Array of Raw books from the API 
     */
    organizeToShelf(shelf, books) {

        if (shelf === 'currentlyReading' || shelf === 'wantToRead' || shelf === 'read') {

            let filtered = books.filter((b) => {
                return b.shelf === shelf;
            });

            let components = filtered.map((b) => {
                return this.goComponent(b);
            });

            this.setState({ [shelf]: components });

        } else {
            console.warn('You passed a non avaible shelf');
        }

    }

    /**
     * @description Turns JSON Object into React Component
     * @param {Obj} book 
     */
    goComponent(book) {
        return <Book key={book.id} title={book.title} cover={book.imageLinks.thumbnail} author={book.authors} />;
    }


    render() {

        return (

            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf title="Currently Reading" books={this.state.currentlyReading} />
                        <Shelf title="Want To Read" books={this.state.wantToRead} />
                        <Shelf title="Read" books={this.state.read} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>

        );

    }
}