import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SearchBar extends Component {
    state = {
        'query': ''
    }

    /**
     * @description This method handles changes on input text field
     * @param string query
     */
    handleSearch = (query) => {

        //Updating Component State
        this.setState({ query });       
        this.props.onChange(query);
    }

    render() {
        return (
            <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input onChange={(e) => this.handleSearch(e.target.value)} type="text" placeholder="Search by title or author" value={this.state.query} />
                </div>
            </div>
        );
    }
}