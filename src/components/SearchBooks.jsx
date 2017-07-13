import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI';

import SearchBar from './SearchBar.jsx';
import Book from './Book.jsx';


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

                let noDup = this.props.noDuplicate(res);

                noDup.map((b) => {

                    return nBooks.push(<Book key={b.id} id={b.id} title={b.title} cover={b.imageLinks.thumbnail} author={b.author} />);

                });

                this.setState({ books: nBooks });
            }
        }

        );

    }

    /**
     * @description Switches 'operation' state ture|false
     */
    switchAlert = () => {
        let a = this.state.operation;
        let b;

        a ? b = false : b = true;

        this.setState({ operation: b });

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