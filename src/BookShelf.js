import React, {  Component } from 'react';
import BooksList from './BooksList'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
    notify: PropTypes.bool.isRequired
  }

  render(){
    const {shelf,books,updateBookShelf} = this.props
    return(
      <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
      <BooksList books={books} updateBookShelf={updateBookShelf} notify={false}/>
      </div>
      </div>
    )
  }
}

export default BookShelf
