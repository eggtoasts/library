const myLibrary = [];

const deleteBookButton = document.querySelector(".deleteBook");
const addBookButton = document.querySelector(".addBook");
const booksContainer = document.querySelector(".books-container");

//Constructor for Book object
function Book(name, author, pages, isFinished) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isFinished = isFinished;

  //Gives our book a unique id
  this.id = crypto.randomUUID();
}

// Adds book into our array.
function addBookToLibrary(n, a, p, f) {
  let book = new Book(n, a, p, f);

  console.log(book);
  myLibrary.push(book);

  //creates Book object.
  const bookItem = document.createElement("div");
  const bookCover = document.createElement("div");

  //Div properties under book-cover
  const name = document.createElement("div");
  const author = document.createElement("div");
  const pages = document.createElement("div");
  const finished = document.createElement("div");

  //Status div
  const status = document.createElement("div");
  const finishedStatus = document.createElement("div");
  const deleteBook = document.createElement("div");

  bookItem.setAttribute("id", book.id);

  //Assigns all the classes
  bookItem.className = "books-item";
  bookCover.className = "book-cover";

  status.className = "status";
  finishedStatus.className = "finished-status";
  deleteBook.className = "delete";

  booksContainer.appendChild(bookItem);

  const bookItems = document.querySelectorAll(".books-item");
  const bookItemSelector = bookItems[bookItems.length - 1];

  console.log(bookItemSelector);

  bookItemSelector.appendChild(bookCover);

  name.className = "name";
  name.textContent = book.name;

  author.className = "author";
  author.textContent = book.author;

  pages.className = "pages";
  pages.textContent = book.pages;

  finished.className = "finished";
  finished.textContent = book.isFinished;

  finishedStatus.className = "finished-status";
  finishedStatus.textContent = "Not finished";

  deleteBook.className = "delete";
  deleteBook.textContent = "Trash can emoji";

  bookCover.appendChild(name);
  bookCover.appendChild(author);
  bookCover.appendChild(pages);
  bookCover.appendChild(finished);

  bookItemSelector.appendChild(status);

  status.appendChild(finishedStatus);
  status.appendChild(deleteBook);
}

addBookToLibrary("Blue Lock", "Idk", 123, false);

//create a book as an example.
