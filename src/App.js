import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import BookShelf from "./BookShelf";
import SearchBooks from "./SearchBooks";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

class BooksApp extends React.Component {
  constructor() {
    super();
    this.books = [];
  }
  state = {
    booksMap: new Map()
  };
  componentDidMount() {
    this.createBookShelf();
  }

  createBookShelf = () => {
    var self = this;
    BooksAPI.getAll().then(books => {
      var booksMap = new Map();
      this.books = books;
      books.reduce(function(x, y) {
        var index = x.findIndex(function(e) {
          if (e === y.shelf) {
            booksMap.get(y.shelf).push(y);
            return true;
          } else {
            return false;
          }
        });
        if (index < 0) {
          booksMap.set(y.shelf, [y]);
        }
        return index < 0 ? [...x, y.shelf] : x;
      }, []);
      console.log(booksMap);
      self.setState({ booksMap });
    });
  };

  updateBookShelf = (book, shelf, notify) => {
    var self = this;
    BooksAPI.update(book, shelf).then(res => {
      /*if the user on search page, notify of added book*/
      if (notify) {
        NotificationManager.info(`${book.title} added to shelf ${shelf}`);
      }else{
        /*else if user on main page notification is not shown, as the below method will refresh the page and the book will
        be shown in choosen shelf*/
        self.createBookShelf();
      }
    });
  };

  render() {
    const titlesMap = new Map();
    titlesMap.set("currentlyReading", "Currently Reading");
    titlesMap.set("wantToRead", "Want to read");
    titlesMap.set("read", "Read");
    const updateBookShelf = this.updateBookShelf;
    const rows = [];
    this.state.booksMap.forEach(function(books, shelf) {
      rows.push(
        <BookShelf
          shelf={titlesMap.get(shelf)}
          books={books}
          updateBookShelf={updateBookShelf}
        />
      );
    });
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>{rows}</div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <SearchBooks
              updateBookShelf={(book, shelf, notify) => {
                this.updateBookShelf(book, shelf, notify);
                //history.push('/')
              }}
              books={this.books}
            />
          )}
        />
        <NotificationContainer />
      </div>
    );
  }
}

export default BooksApp;
