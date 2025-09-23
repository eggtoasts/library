const myLibrary = [];

const gatsby = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "150",
  false
);
myLibrary.push(gatsby);

const hxh = new Book("Pride and Prejudice", "Jane Austen", "448", true);
myLibrary.push(hxh);

const deleteBookButton = document.querySelector(".deleteBook");
const addBookButton = document.querySelector(".addBook");
const booksContainer = document.querySelector(".books-container");

//Form elements
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("input-title").value;
  let author = document.getElementById("input-author").value;
  let pages = document.getElementById("input-pages").value;
  let isFinished = document.getElementById("input-isFinished");

  if (isFinished.checked) {
    isFinished = true;
  } else {
    isFinished = false;
  }

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

Book.prototype.toggleFinished = function (book) {
  this.isFinished = !this.isFinished;
};

//Displays current library to screen.
function displayInfo() {
  let child = booksContainer.lastElementChild;

  //Traverses down and deletes child elements until none are left
  while (child) {
    booksContainer.removeChild(child);
    child = booksContainer.lastElementChild;
  }

  //Now append everything back
  for (let b of myLibrary) {
    const bookElement = makeBook(b);
  }
}

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
  const finishedStatus = document.createElement("button");
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

  let nameArray = book.name.split(" ").filter((x) => x.length > 10);

  //Decreases book name font size if a word exceeds 10 characters
  if (nameArray.length > 0) {
    name.style.fontSize = "16px";
  }

  author.className = "author";
  author.textContent = book.author;

  pages.className = "pages";
  pages.textContent = book.pages + " pages";

  finished.className = "finished";
  finished.textContent = book.isFinished ? "Completed" : "In Progress";

  finishedStatus.className = "finished-status";
  finishedStatus.textContent = book.isFinished ? "Unread" : "Read";

  if (book.isFinished) {
    finishedStatus.classList.add("completed");
    finished.classList.add("completed");
  }

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

  //Adds deletion evnet
  deleteSelector.addEventListener("click", (e) => {
    let child = bookItemSelector.lastElementChild;

    while (child) {
      bookItemSelector.removeChild(child);
      child = bookItemSelector.lastElementChild;
    }

    //Deletes book object from library as well
    let ind = myLibrary.findIndex((obj) => obj.id == book.id);

    myLibrary.splice(ind, 1);

    displayInfo();
  });

  deleteSelector.appendChild(icon);

  //Adds toggle completion event
  const toggleSelector = bookItemSelector.querySelector(".finished-status");
  toggleSelector.addEventListener("click", (e) => {
    book.toggleFinished();
    if (!book.isFinished) {
      finishedStatus.classList.remove("completed");
      finished.classList.remove("completed");
    }
    displayInfo();
  });
}

// Adds book into our array.
function addBookToLibrary(n, a, p, f) {
  let book = new Book(n, a, p, f);

  console.log(book);
  myLibrary.push(book);
}

displayInfo();
