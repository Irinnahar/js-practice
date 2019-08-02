const form = document.getElementById('book-form'),
  title = document.getElementById('title'),
  author = document.getElementById('author'),
  isbn = document.getElementById('isbn'),
  bookList = document.getElementById('book-list'),
  container = document.querySelector('.container')

class Books {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td> ${book.title} </td>
      <td> ${book.author} </td>
      <td> ${book.isbn} </td>
      <td><a href='#' class="delete">X</a></td>
    `
    bookList.appendChild(row);
  }

  clearInputFields() {
    title.value = '';
    author.value = '';
    isbn.value = '';
  }

  showAlertMessages(message, className) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `alert ${className}`;
    msgDiv.innerHTML = message;
    container.insertBefore(msgDiv, form);

    setTimeout(() => {
      msgDiv.style.display = 'none';
    }, 2000);
  }

  removeBookFromList(target){
    if(confirm('Are you sure?')){
      target.parentElement.parentElement.remove();
    }
    ui.showAlertMessages('Deleted successfully', 'success');
  }
}

class storeToLocalStorage{
  static addToLocalstroage(book){
    let books;
    if(localStorage.getItem('books') === null){
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBookFromLocalstroage(target){
    const books = JSON.parse(localStorage.getItem('books'));

    books.forEach((book, index) => {
      if(book.isbn.trim() === target.trim()){
        books.splice(index, 1);
      }
    })
    localStorage.setItem('books', JSON.stringify(books));
  }
}

const book = new Books();
const ui = new UI();

// DOM Manipulation add book
form.addEventListener('submit', (e) => {
  if (title.value == '' || author.value == '' || isbn.value == '') {
    ui.showAlertMessages('Please add information to each field', 'error');
  } else {
    book.title = title.value;
    book.author = author.value;
    book.isbn = isbn.value;

    ui.addBookToList(book);
    ui.showAlertMessages('Book added', 'success');
    storeToLocalStorage.addToLocalstroage(book);
    ui.clearInputFields();
  }

  e.preventDefault();
})

// remove book by event delegation
bookList.addEventListener('click', (e) => {
  if(e.target.classList.contains('delete')){
    ui.removeBookFromList(e.target);
    storeToLocalStorage.removeBookFromLocalstroage(e.target.parentElement.previousElementSibling.textContent);
  }
  e.preventDefault();
})

// show book at initial loading
window.addEventListener('DOMContentLoaded', () => {
  if(localStorage.getItem('books')){
    const books = JSON.parse(localStorage.getItem('books'));
    
    books.forEach((book) => {
      ui.addBookToList(book);
    })
  }

})