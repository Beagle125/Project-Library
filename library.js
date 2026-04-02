// Delcare my library database in an array
const myLibrary = [];

// Declare variables
const form = document.getElementById("my-form");
const dialog = document.getElementById("my-dialog");
const bookContainer = document.querySelector(".books");
let title, author, pages, read;
let nBook = 0, nRead = 0, nUnread = 0;

document.querySelector(".stat-book").textContent = nBook;
document.querySelector(".stat-read").textContent = nRead;
document.querySelector(".stat-unread").textContent = nUnread;


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

    // code for manipulating the DOM
    const content = document.createElement("div");
    content.id = uuid;

    const titleNode = document.createElement("p");
    titleNode.textContent = `Title: ${title}`;

    const authorNode = document.createElement("p");
    authorNode.textContent = `by ${author}`;

    const PagesNode = document.createElement("p");
    PagesNode.textContent = `${pages} pages`;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete Book";


    content.appendChild(titleNode);
    content.appendChild(authorNode);
    content.appendChild(PagesNode);
    content.appendChild(deleteButton);

    bookContainer.appendChild(content);
}

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    // Extract the data
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    read = document.getElementById("read");

    addBookToLibrary(title, author, pages, read);
    updateBook(read, 1);
    
    dialog.close();
    form.reset();
});

// functions for transition effect


// code for tracking the stats
/*
Stat flag legend:
0 -  remove a book
1 -  add a book
2 -  modify read status
*/ 
function updateBook(read, statFlag){
    switch (statFlag){
        case 0:
            nBook--;
            nRead--;
            nUnread--;
            break;

        case 1:
            if (read.checked){
                nRead++;
            }
            else{
                nUnread++;
            }
            nBook++;
            break;
        case 2:
            if (read.checked){
                nRead++;
            }
            else{
                nUnread--;
            }
    }

    document.querySelector(".stat-book").textContent = nBook;
    document.querySelector(".stat-read").textContent = nRead;
    document.querySelector(".stat-unread").textContent = nUnread;
}

// code for removing books
document.addEventListener("click", (event) =>{
    if (event.target.classList.contains("delete-button")){
        const bookItem = event.target.closest("div");

        // Remove from array
        const bookIndex = myLibrary.findIndex(book => book.ID === bookItem.dataset.id);
        myLibrary.splice(bookIndex, 1);

        // Remove from the DOM
        bookItem.remove();
    }
});



