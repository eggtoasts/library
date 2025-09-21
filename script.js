const myLibrary = [];

const deleteBookButton = document.querySelector(".deleteBook");
const addBookButton = document.querySelector(".addBook");

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
function addBookToLibrary(name, author, pages, isFinished) {
  let book = new Book(name, author, pages, isFinished);

  myLibrary.push(book);

  //creates Book object.
  const bookItem = document.createElement("books-item");
  const bookCover = bookItem.createElement("book-cover");
  const name = bookCover.createElement("name");
}

//create a book as an example.
