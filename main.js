const bookAuthor = document.getElementById('author');
const bookTitle = document.getElementById('title');
const addBtn = document.getElementById('add-book');
const msg = document.getElementById('message');
const allBooks = document.getElementById('view-all-books');
const books = JSON.parse(localStorage.getItem('storebooks')) || [];

function displayBooks() {
  if (books.length < 1) {
    msg.innerHTML = 'Shelf is Empty';
    allBooks.style.display = 'none';
  } else {
    allBooks.style.display = 'block';
    const books = JSON.parse(localStorage.getItem('storebooks')) || [];
    allBooks.innerHTML = books.map((book) => ` <div class="parent-content"><p class="container__body-title">${book.title} by ${book.author}</p>
    <button class="container__body-btn" id="${book.id}">Remove</button></div>`).join('');
  }
}

function addBooks(title, author) {
  if (title.value === '') {
    msg.innerHTML = 'Book Title cannot Be Blank';
  } else if (author.value === '') {
    msg.innerHTML = 'Book Author cannot Be Blank';
  } else {
    const id = books.length + 1;
    books.push({
      id,
      title: title.value,
      author: author.value,
    });
    msg.innerHTML = 'Book Added Successfully';
    localStorage.setItem('storebooks', JSON.stringify(books));
  }
  title.value = '';
  author.value = '';
  displayBooks();
}

addBtn.addEventListener('click', () => {
  addBooks(bookTitle, bookAuthor);
});

function deleteBook(id) {
  let books = JSON.parse(localStorage.getItem('storebooks')) || [];
  books = books.filter((e) => e.id !== id);
  localStorage.setItem('storebooks', JSON.stringify(books));
  msg.innerHTML = 'Book Deleted';
  displayBooks();
}

allBooks.addEventListener('click', (e) => {
  if (e.target.classList.contains('container__body-btn')) {
    const id = parseFloat(e.target.id);
    deleteBook(id);
  }
});

displayBooks();
