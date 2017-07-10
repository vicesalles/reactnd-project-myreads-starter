import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI'

import SearchBar from './SearchBar.jsx';
import Book from './Book.jsx';


export default class BookExplorer extends Component {

    state = {
        books: []
    }

    newSearch = (book) => {

        BooksAPI.search(book).then((res) => {
           
            let nBooks = [];
            res.map((b) => {

                return nBooks.push(<Book key={b.id} title={b.title} cover={b.imageLinks.thumbnail} author={b.author} />);

            });

            this.setState({ books: nBooks });

        }

        );

    }

    render() {
        return (
            <div className="search-books">
                <SearchBar onChange={this.newSearch} />
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.length > 0 && this.state.books}
                    </ol>
                </div>
            </div>
        );
    }
}