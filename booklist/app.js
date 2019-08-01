// book 
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI
function UI() {
}

UI.prototype.addBookToList = function (book) {
  const table = document.getElementById('book-list');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td> ${book.title} </td>
    <td> ${book.author} </td>
    <td> ${book.isbn} </td>
    <td> <a href="#" class="delete" >X</a> </td>
  `
  table.appendChild(row);
}

// clear input field
UI.prototype.clearBookList = function (book) {
  title.value = '';
  author.value = '';
  isbn.value = '';
}

// get input value
document.getElementById('book-form').addEventListener('submit', formSubmit);
const title = document.getElementById('title'),
  author = document.getElementById('author'),
  isbn = document.getElementById('isbn')

function formSubmit(e) {
  const book = new Book(title.value, author.value, isbn.value);
  const ui = new UI();
  
  ui.addBookToList(book);
  ui.clearBookList(book);

  e.preventDefault();
}
