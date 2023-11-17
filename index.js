function fetchBooks() {

  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => renderBooks(json))
  // To pass the tests, don't forget to return your fetch!
  
}



function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);

   
  });
}

function displayBookDetails(Books) {
  console.log(books[4])
}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
