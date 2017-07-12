import React, { Component } from 'react';

export default class ShelfChanger extends Component {

    handleChange = (shelf) => {
        this.props.onChange(shelf);
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={(e) => this.handleChange(e.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}