import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import _ from 'lodash';

import MyLibrary from './components/MyLibrary.jsx';
import SearchBooks from './components/SearchBooks.jsx';

class BooksApp extends React.Component {
  
  /**
   * @description Elimninates duplicated items from an array
   * @param {array} a
   */
  noDuplicatedBooks = (a) => {
    return _.uniqueId(a,'id');
  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <MyLibrary noDuplicate={this.noDuplicatedBooks} />
        )} />

        <Route path="/search" render={() => (
          <SearchBooks noDuplicate={this.noDuplicatedBooks} />
        )} />

      </div>
    )
  }
}

export default BooksApp
