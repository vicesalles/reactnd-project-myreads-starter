import React, { Component } from 'react';
import myShelves from '../myShelves';

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

            return this.createOptions(shelf);

        }else{

            let options = this.createOptions(shelf);    

            return [<option key="none" value="none" style={this.theHidden} defaultChecked defaultValue></option>,...options];
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


    /**
     * @description Creates the option list for the select node rendered by this component
     * @param {String} s current Shelf, if any, for the book 
     * @return {Array} An array with all <option> nodes needed
     */
    createOptions(s){
        
        let myOptions = myShelves.map((currentShelf)=>{
            if(s===currentShelf){
                return <option key={currentShelf} value={currentShelf} defaultValue defaultChecked>{this.stringShelf(currentShelf)}</option>;
            }else{
                return <option key={currentShelf} value={currentShelf}>{this.stringShelf(currentShelf)}</option>;
            }
        });
    
        return myOptions;
    }

    theHidden = {display:'none'};

    render() {
        
        return (
            <div className="book-shelf-changer">
                <select defaultValue={this.props.shelf} onChange={(e) => this.handleChange(e.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    {this.hasShelf(this.props.shelf)}           
                    <option value="none">None</option>         
                </select>
            </div>
        );
    }
}