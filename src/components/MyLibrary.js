import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import myShelves from '../myShelves';

import Book from './Book';
import Shelf from './Shelf';
import Loading from './Loading';

export default class MyLibrary extends Component {
    state = {
        currentlyReading: [<Loading key="0" />],
        wantToRead: [<Loading key="1" />],
        read: [<Loading key="2" />]
    }

    componentDidMount() {

        //Filling the shelves
        this.populate();

    }

    /**
     * @description calls to the API and fills the shelves
     */
    populate = () => {
       
        //Getting all the books from the API
        BooksAPI.getAll().then((res) => {

            //Delete duplicated entries
            let noDup = this.props.clean(res);

            //Saving books to App state
            this.props.save(noDup);            
            
            //Mapping through different shelves and putting there the books
            myShelves.map((s) => {
                return this.organizeToShelf(s, noDup);
            });

        });
    }

    /**
     * @description Takes the data coming from the API and turns it into a state array made of components
     * @param {String} shelf - Desired destination Shelf
     * @param {Array} books - Array of Raw books from the API 
     */
    organizeToShelf = (shelf, books) => {

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
     * @description Turns a JSON Object into React Component
     * @param {Obj} book 
     */
    goComponent = (book) => {
        return <Book key={book.id} update={this.populate} book={book}  />;
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