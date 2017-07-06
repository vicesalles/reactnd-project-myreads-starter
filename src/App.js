import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import './App.css'

import MyLibrary from './components/MyLibrary.jsx';
import SearchBooks from './components/SearchBooks.jsx';

class BooksApp extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <MyLibrary />
        )} />

        <Route path="/search" render={() => (
          <SearchBooks />
        )} />

      </div>
    )
  }
}

export default BooksApp
