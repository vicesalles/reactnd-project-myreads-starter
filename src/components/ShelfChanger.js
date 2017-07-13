import React, { Component } from 'react';

export default class ShelfChanger extends Component {

    handleChange = (shelf) => {
        this.props.onChange(shelf);
    }

    /**
     * @description renders and option Tag with current shelf of a book
     * @param {String} shelf current shelf for a given book
     * @returns {Object} select option tag.
     */
    hasShelf = (shelf) => {

        if (shelf !== 'none' && shelf !== '') {

            let s = this.stringShelf(shelf);
            return <option disabled defaultValue>&#10004; {s}</option>

        }

    }

    /**
     * @description It turns into nice string the current shelf for a given book
     * @param {String} s Value of current shelf
     * @returns {String} nicely readeable text for current shelf 
     */
    stringShelf(s) {
        let r;
        
        switch (s) {
            case 'currentlyReading':
                r = 'Reading it';
                break;
            case 'read':
                r = 'Already read';
                break;
            case 'wantToRead':
                r = 'Want to read';
                break;
            default:
                r = '';
        }
        return r;
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={(e) => this.handleChange(e.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    {this.hasShelf(this.props.shelf)}
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}