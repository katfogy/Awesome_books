const displayBooks = () => {
  const contactSession = document.getElementById('contact');
  const bookSession = document.getElementById('books-all');
  const addBookSession = document.getElementById('add-books');
  const listMenu = document.getElementById('list-menu');

  listMenu.addEventListener('click', () => {
    contactSession.style.display = 'none';
    bookSession.style.display = 'block';
    addBookSession.style.display = 'none';
  });
};

export default displayBooks;