const bookAuthor = document.getElementById('author');
const bookTitle = document.getElementById('title');
const addBtn = document.getElementById('add-book');
const msg = document.getElementById('message');
const allBooks = document.getElementById('view-all-books');

class AwesomeBooks {
  constructor(bookTitle, bookAuthor) {
    this.bookAuthor = bookAuthor;
    this.bookTitle = bookTitle;
  }

  displayBooks() {
    const books = JSON.parse(localStorage.getItem('storebooks')) || [];
    if (books.length < 1) {
      msg.innerHTML = 'Shelf is Empty';
      allBooks.style.display = 'none';
    } else {
      this.id = 0;
      allBooks.style.display = 'block';
      allBooks.innerHTML = books.map((book) => ` <div class="parent-content"><p class="container__body-title">${book.title} by ${book.author}</p>
      <button class="container__body-btn" id="${book.id}">Remove</button></div>`).join('');
    }
  }

  addBooks() {
    if (this.bookTitle.value === '') {
      msg.innerHTML = 'Book Title cannot Be Blank';
    } else if (this.bookAuthor.value === '') {
      msg.innerHTML = 'Book Author cannot Be Blank';
    } else {
      const books = JSON.parse(localStorage.getItem('storebooks')) || [];
      const id = books.length + 1;
      books.push({
        id,
        title: this.bookTitle.value,
        author: this.bookAuthor.value,
      });
      msg.innerHTML = 'Book Added Successfully';
      localStorage.setItem('storebooks', JSON.stringify(books));
    }
    this.bookTitle.value = '';
    this.bookAuthor.value = '';
    this.displayBooks();
  }

  deleteBook(id) {
    let books = JSON.parse(localStorage.getItem('storebooks')) || [];
    books = books.filter((e) => e.id !== id);
    localStorage.setItem('storebooks', JSON.stringify(books));
    msg.innerHTML = 'Book Deleted';
    this.displayBooks();
  }
}

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
