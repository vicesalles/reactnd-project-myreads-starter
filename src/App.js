import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom';
import './App.css'

import MyLibrary from './components/MyLibrary.jsx';
import BookExplorer from './components/BookExplorer.jsx';

class BooksApp extends React.Component {
  state = {
 
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={()=>(
          <BookExplorer/>
        )}/>

        <Route exact path="/" render={()=>(

           <MyLibrary/>
          
        )}/>

      </div>
    )
  }
}

export default BooksApp
