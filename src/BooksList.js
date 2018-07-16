import React, { Component } from "react";
import PropTypes from 'prop-types'

class BooksList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
    notify: PropTypes.bool.isRequired
  }

  render(){
    const {books,updateBookShelf,notify} = this.props

    return(
      <ol className="books-grid">
      {books.map((book) =>(
        <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks?book.imageLinks.thumbnail:'http://via.placeholder.com/128x193?text=no image'})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={(event)=>updateBookShelf(book,event.target.value,notify)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading" selected={book.shelf === 'currentlyReading'}>Currently Reading</option>
                <option value="wantToRead" selected={book.shelf === 'wantToRead'}>Want to Read</option>
                <option value="read" selected={book.shelf === 'read'}>Read</option>
                <option value="none" selected={!book.shelf ? true : false}>None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          {(book.authors) ?(<div className="book-authors">{book.authors.join('\n')}</div>):'Anonymous'}
        </div>
      </li>
    ))}
    </ol>
    )
  }
}

export default BooksList
