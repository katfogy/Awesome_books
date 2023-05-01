import showContact from './modules/showContact.js';
import displayBooks from './modules/viewAllBooks.js';
import addBook from './modules/addBook.js';
import AwesomeBooks from './modules/manageBook.js';
import { DateTime } from './modules/luxon.js';

const bookAuthor = document.getElementById('author');
const bookTitle = document.getElementById('title');
const addBtn = document.getElementById('add-book');
const allBooks = document.getElementById('view-all-books');
const contactSession = document.getElementById('contact');
const bookSession = document.getElementById('books-all');
const addBookSession = document.getElementById('add-books');

showContact();
displayBooks();
addBook();

setInterval(() => {
  const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  document.getElementById('date').innerHTML = currentDate;
}, 1000);

addBtn.addEventListener('click', () => {
  const newBook = new AwesomeBooks(bookTitle, bookAuthor);
  newBook.addBooks();
});

allBooks.addEventListener('click', (e) => {
  if (e.target.classList.contains('container__body-btn')) {
    const id = parseFloat(e.target.id);
    const newBook = new AwesomeBooks(bookTitle, bookAuthor);
    newBook.deleteBook(id);
  }
});

const newBook = new AwesomeBooks(bookTitle, bookAuthor);
newBook.displayBooks();

window.addEventListener('load', () => {
  contactSession.style.display = 'none';
  bookSession.style.display = 'none';
  addBookSession.style.display = 'none';
});