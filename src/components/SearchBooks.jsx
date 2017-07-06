import React, { Component } from 'react';

import SearchBar from './SearchBar.jsx';


export default class BookExplorer extends Component {
    render() {
        return (
            <div className="search-books">
                <SearchBar/>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
        );
    }
}