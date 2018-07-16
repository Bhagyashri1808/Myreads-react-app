import React, { Component } from "react";
import BooksList from "./BooksList";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
  }

  state = {
    books: []
  };

  searchBooks = (query, booksInShelf) => {
    if (query) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ books: [] });
        } else {
          /*If a book is assigned to a shelf on the main page and that book appears on the search page,*/
          books.forEach(e1 =>
            booksInShelf.forEach(e2 => {
              if (e1.id === e2.id) {
                e1.shelf = e2.shelf;
              }
            })
          );
          this.setState({ books });
        }
      });
    } else {
      this.setState({ books: [] });
    }
  };

  render() {
    const {books,updateBookShelf} = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          {/* <a  onClick={() => this.setState({ showSearchPage: false })}>Close</a>*/}
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.searchBooks(event.target.value, books)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BooksList
            books={this.state.books}
            updateBookShelf={updateBookShelf}
            notify={true}
          />
        </div>
      </div>
    );
  }
}

export default SearchBooks;
