import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import _ from 'lodash';

import MyLibrary from './components/MyLibrary';
import SearchBooks from './components/SearchBooks';

class BooksApp extends React.Component {

  state = {
    myBooks: []
  }

  /**
   * @description Elimninates duplicated items from an array
   * @param {array} a
   */
  noDuplicatedBooks = (a) => {
    return _.uniqBy(a, 'id');
  }

  /**
   * @description saves books on shelves at the top state of the app
   * @param {Array} myBooks
   */
  setMyBooks = (myBooks) => {
    this.setState({ myBooks });
  }

  /**
   * @description processes a raw array of books and returns an array with shelf property updated
   * @param {Array} b
   * @returns {Array}
   */
  inShelf = (b) => {

    //Checks if book is already in any Shelf
    const check = (book) => {
      let mB = this.state.myBooks;
      let r = mB.filter((b) => {
        if (b.id === book.id) {
          return b;
        }
        return undefined;
      });
      
      if (r.length === 1) {
       
        return r[0];
      }
    }

    //Parsing books coming from API
    let filteredBooks = b.map((bk) => {

      let response;
      
      //Is this book already in my shelves?
      let clean = check(bk);
      
      //If not, take it as is. Else, copy the one in the shelf
      if (clean === undefined) {
        bk.shelf = 'none';
        response = bk;
      } else {        
        response = clean;
      }

      return response;

    })

    //Filtered and normalized Books
    return filteredBooks;

  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <MyLibrary save={this.setMyBooks} clean={this.noDuplicatedBooks} />
        )} />

        <Route path="/search" render={() => (
          <SearchBooks filter={this.inShelf} clean={this.noDuplicatedBooks} />
        )} />

      </div>
    )
  }
}

export default BooksApp
