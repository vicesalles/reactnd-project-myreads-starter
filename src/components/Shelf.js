import React from 'react';

const Shelf = (props) => {
   
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books && props.books}
                </ol>
            </div>
        </div>
    );
    
}

export default Shelf;