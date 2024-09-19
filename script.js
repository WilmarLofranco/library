// Variables
let addbook = document.querySelector(".addbook");

// Storage
const myLibrary = [];


// Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
     function displayInfo () {
        let bookShelves = document.querySelector(".bookShelves");
        bookShelves.innerHTML = "";
      
        myLibrary.forEach(book => {
            let card = document.createElement("div");  
            let titleLi = document.createElement("li");
            titleLi.textContent = `Title: ${book.title}`;
            card.appendChild(titleLi);

            let authorLi = document.createElement("li");
            authorLi.textContent = `Author: ${book.author}`;
            card.appendChild(authorLi);

            let pagesLi = document.createElement("li");
            pagesLi.textContent = `No. of Pages: ${book.pages}`
            card.appendChild(pagesLi);

            let readLi = document.createElement("li");
            readLi.textContent = `Status: ${book.read}`
            card.appendChild(readLi);

            let remove = document.createElement("button");
            remove.textContent="Remove";
            remove.addEventListener('click', function() {
                let index = myLibrary.indexOf(book);
                if (index > -1) {
                    myLibrary.splice(index, 1);
                }
                displayInfo();
            })

            let toggle = document.createElement("button");
            toggle.textContent="Read/Unread";
            toggle.addEventListener('click', function() {
                if (book.read === "Read") {
                    book.read = "Unread"
                } else if (book.read === "Unread") {
                    book.read = "Read";
                }
                displayInfo();
            })
            card.appendChild(toggle);
            card.appendChild(remove);
            bookShelves.appendChild(card);
        })

    }

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.querySelector('input[name="status"]:checked').value;

  const newbook = new Book(title, author, pages, read);
  myLibrary.push(newbook);
  displayInfo(); 

  document.getElementById("title").value = ""; 
  document.getElementById("author").value = ""; 
  document.getElementById("pages").value = "";
  document.querySelector('input[name="status"]:checked').checked = false;
}


addbook.addEventListener('click', function (event) {
    event.preventDefault(); 
    addBookToLibrary();
});