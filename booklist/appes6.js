// get input value
const title = document.getElementById('title'),
  author = document.getElementById('author'),
  isbn = document.getElementById('isbn'),
  form = document.getElementById('book-form'),
  container = document.querySelector('.container'),
  bookList = document.getElementById('book-list');


class Book {
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
      <td> <a href="#" class="delete" >X</a> </td>
    `
    bookList.appendChild(row);
  }

  // remove book
  removeBook(target) {
    if (target.className === 'delete') {
      if (confirm('Are you sure?')) {
        target.parentElement.parentElement.remove();
        this.showMessage('Books removed successfully', 'success')
      }
    }
  }

  // clearbook
  clearBookList() {
    title.value = '';
    author.value = '';
    isbn.value = '';
  }

  // message show
  showMessage(msg, className) {
    const card = document.createElement('div');
    card.className = `alert ${className}`;
    card.innerText = msg;

    container.insertBefore(card, form);

    setTimeout(() => {
      card.style.display = 'none';
    }, 2000)
  }
}

// book delete
bookList.addEventListener('click', bookListRemove);
function bookListRemove(e) {
  const ui = new UI();
  ui.removeBook(e.target);

  e.preventDefault();
}

form.addEventListener('submit', formSubmit);

function formSubmit(e) {
  const book = new Book(title.value, author.value, isbn.value);
  const ui = new UI();

  if(title.value === '' || author.value === '', isbn.value === ''){
    ui.showMessage('Please add value to all field', 'error');
  }else {
    ui.addBookToList(book);
    ui.clearBookList();
    ui.showMessage('Book added successfully!', 'success')
  }

  e.preventDefault();
}