import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';

import SearchBar from './SearchBar';
import Book from './Book';


export default class BookExplorer extends Component {

    state = {
        books: []
    }

    /**
     * @description Search for a query in the API
     * @param {String} query
     */
    newSearch = (query) => {

        BooksAPI.search(query).then((res) => {

            let nBooks = [];
            if (res.length > 0) {

                let noDup = this.props.clean(res);

                noDup.map((b) => {

                    return nBooks.push(<Book key={b.id} id={b.id} title={b.title} cover={b.imageLinks.thumbnail} author={b.author} selected={this.removeSelected} />);

                });

                this.setState({ books: nBooks });
            }
        }

        );

    }

    /**
     * @description Removes book from view after it has been moved to a shelf
     * @param {String} id Id of the selected book 
     */
    removeSelected = (id) => {
        let bks = this.state.books;
        let nBks = bks.filter(b => {
            return b.key !== id
        });
        this.setState({ books: nBks });
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