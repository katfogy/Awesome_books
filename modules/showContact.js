const showContact = () => {
  const contactSession = document.getElementById('contact');
  const bookSession = document.getElementById('books-all');
  const addBookSession = document.getElementById('add-books');
  const contactMenu = document.getElementById('contact-menu');

  contactMenu.addEventListener('click', () => {
    contactSession.style.display = 'block';
    bookSession.style.display = 'none';
    addBookSession.style.display = 'none';
  });
};

export default showContact;