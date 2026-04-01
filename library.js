// Delcare my library database in an array
const myLibrary = [];

// Declare variables
const form = document.querySelector('.my-form');
let title, author, pages, read;
let nBook, nRead, nUnread;



// The constructor for a book object
function Book(title, author, pages, read, ID){
    if (!new.target)
        throw Error("You must tse the 'new' operator.");
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.ID = ID;

    this.info = function(){
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
    };
}

// function and code adding to library
function addBookToLibrary(title, author, pages, read){
    let uuid = self.crypto.randomUUID();
    let newBook = new Book(title, author, pages, read, uuid);
    myLibrary.push(newBook);
}

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    // Extract the data
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    read = document.getElementById("read");

    addBookToLibrary(title, author, pages, read);
});

// functions for transition effect


