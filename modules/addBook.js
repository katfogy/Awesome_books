const addBook = () => {
  const contactSession = document.getElementById('contact');
  const bookSession = document.getElementById('books-all');
  const addBookSession = document.getElementById('add-books');
  const addMenu = document.getElementById('add-menu');

  addMenu.addEventListener('click', () => {
    contactSession.style.display = 'none';
    bookSession.style.display = 'none';
    addBookSession.style.display = 'block';
  });
};

export default addBook;