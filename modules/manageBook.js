export default class AwesomeBooks {
  constructor(bookTitle, bookAuthor) {
    this.bookAuthor = bookAuthor;
    this.bookTitle = bookTitle;
  }

  displayBooks() {
    const msg = document.getElementById('message');
    const allBooks = document.getElementById('view-all-books');
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
    const msg = document.getElementById('message');
    if (this.bookTitle.value === '') {
      msg.innerHTML = 'Book Title cannot Be Blank';
    } else if (this.bookAuthor.value === '') {
      msg.innerHTML = 'Book Author cannot Be Blank';
    } else {
      const books = JSON.parse(localStorage.getItem('storebooks')) || [];
      const id = Math.floor(Math.random() * 10000000);
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
    const msg = document.getElementById('message');
    let books = JSON.parse(localStorage.getItem('storebooks')) || [];
    books = books.filter((e) => e.id !== id);
    localStorage.setItem('storebooks', JSON.stringify(books));
    msg.innerHTML = 'Book Deleted';
    this.displayBooks();
  }
}