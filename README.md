# MyReads Project

This is an interactive application, where users can maintain books into different shelfs,as well as move books from one shelf to another. Add new books to the shelfs.This application is built using React framework.

## TL;DR

To get started :

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   ├── index.html # DO NOT MODIFY
│   ├── notifications.css # DO NOT MODIFY
|   └── fonts #This folder contains the fonts used in notifications.
└── src
    ├── App.css # Styles for app.
    ├── App.js # This is the root of app.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is must.
    ├── BooksAPI.js # A JavaScript API for the provided backend. Instructions for the methods are below.
    ├── BooksShelf.js #This is the Component used to create the BookShelves.
    ├── BooksList.js  #This is the component used to create the books list.
    ├── SearchBooks.js #This component gets rendered when user clicks on AddBooks button on main page.
    ├── icons # Helpful images for app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
## Important functions and their definitions.
### `createBookShelf`

Method Signature:

```js
createBookShelf()
```
* An api call is made to fetch the books and books are grouped by shelves.So that any new shelf added can be handled automatically.


### `updateBookShelf`


Method Signature:

```js
updateBookShelf(book, shelf,notify)
```
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* notify: `<boolean>` set to true if this method called on Search page. Used to fire notification.
* This method updates the shelf value of book.If update is succesful an api call is made to fetch the books with updated shelf values.


### `searchBooks`

Method Signature:

```js
searchBooks()
```
* An API call is made to fetch books which match the query entered in search field.The fetched array is passed onto the BooksList component


## Backend Server

To simplify the development process, a backend server has been provided. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

If any help required, mail me on kabburebh@gmail.com
Github Link - https://github.com/Bhagyashri1808/MyReadsReact.git
