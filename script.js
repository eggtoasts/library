const myLibrary = [];

const blueLock = new Book("BL", "idk", "100", false);
myLibrary.push(blueLock);

const deleteBookButton = document.querySelector(".deleteBook");
const addBookButton = document.querySelector(".addBook");
const booksContainer = document.querySelector(".books-container");

//Form elements
// const formTitle = document.querySelector();
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("input-title").value;
  let author = document.getElementById("input-author").value;
  let pages = document.getElementById("input-pages").value;
  let isFinished = document.getElementById("input-isFinished").value;

  addBookToLibrary(name, author, pages, isFinished);
  displayInfo();
});

//Constructor for Book object
function Book(name, author, pages, isFinished) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isFinished = isFinished;

  //Gives our book a unique id
  this.id = crypto.randomUUID();
}

//Displays current library to screen.
function displayInfo() {
  let child = booksContainer.lastElementChild;

  while (child) {
    booksContainer.removeChild(child);
    child = booksContainer.lastElementChild;
  }

  //Now append everything back
  for (let b of myLibrary) {
    const bookElement = makeBook(b);
  }
}
displayInfo();

function makeBook(book) {
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
  const icon = document.createElement("span");
  icon.setAttribute("data-icon", "mdi-trash-can");
  icon.className = "iconify";

  bookCover.appendChild(name);
  bookCover.appendChild(author);
  bookCover.appendChild(pages);
  bookCover.appendChild(finished);

  bookItemSelector.appendChild(status);

  status.appendChild(finishedStatus);
  status.appendChild(deleteBook);

  const deleteSelector = bookItemSelector.querySelector(".delete");

  deleteSelector.addEventListener("click", (e) => {
    let child = bookItemSelector.lastElementChild;

    while (child) {
      bookItemSelector.removeChild(child);
      child = bookItemSelector.lastElementChild;
    }

    //delete book from library as well
    let ind = myLibrary.findIndex((obj) => obj.id == book.id);

    myLibrary.splice(ind, 1);

    displayInfo();
    console.log(ind);
  });

  deleteSelector.appendChild(icon);
}

// Adds book into our array.
function addBookToLibrary(n, a, p, f) {
  let book = new Book(n, a, p, f);

  console.log(book);
  myLibrary.push(book);
}
