// Delcare my library database in an array
const myLibrary = [];

// Declare variables
const form = document.getElementById("my-form");
const dialog = document.getElementById("my-dialog");
const bookContainer = document.querySelector(".books");
let title, author, pages, hiddenRead, read;
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
    content.className = "book-content";
    content.id = uuid;

    const upperDiv = document.createElement("div");
    upperDiv.className = "card-upper";

    const middleDiv = document.createElement("div");
    middleDiv.className = "card-middle";

    const lowerDiv = document.createElement("div");
    lowerDiv.className = "card-lower"

    const titleNode = document.createElement("p");
    titleNode.textContent = `Title: ${title}`;

    const authorNode = document.createElement("p");
    authorNode.textContent = `by ${author}`;

    const PagesNode = document.createElement("p");
    PagesNode.textContent = `${pages} pages`;

    const readButton = document.createElement("button");
    readButton.className = "toggle-button";

    if (read.checked){
        readButton.textContent = "Read";
    }
    else{
        readButton.textContent = "Not Read";
    }

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete Book";

    middleDiv.appendChild(titleNode);
    middleDiv.appendChild(authorNode);
    middleDiv.appendChild(PagesNode);

    lowerDiv.appendChild(readButton);
    lowerDiv.appendChild(deleteButton);


    content.appendChild(upperDiv);
    content.appendChild(middleDiv);
    content.appendChild(lowerDiv);

    bookContainer.appendChild(content);
}

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    // Extract the data
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    read = document.getElementById("read");
    hiddenRead = read.checked ? true : false;

    addBookToLibrary(title, author, pages, hiddenRead);
    updateBook();
    
    dialog.close();
    form.reset();
});

// code for tracking the stats
function updateBook(){
    nBook = 0, nRead = 0, nUnread = 0;
    for (const book of myLibrary){
        nBook++;
        if (book.read){
            nRead++;
        }
        else{
            nUnread++;
        }
    }
    document.querySelector(".stat-book").textContent = nBook;
    document.querySelector(".stat-read").textContent = nRead;
    document.querySelector(".stat-unread").textContent = nUnread;
}

document.addEventListener("click", (event) =>{
    // code for removing books
    if (event.target.classList.contains("delete-button")){
        const bookItem = event.target.closest(".book-content");
        const bookItemID = bookItem.id.trim().toLowerCase();
        
        // Remove from array
        const bookIndex = myLibrary.findIndex(book =>{
            return String(book.ID).trim().toLowerCase() === bookItemID;
        });

        myLibrary.splice(bookIndex, 1);

        // update the stats
        updateBook();
        
        // Remove from the DOM
        bookItem.remove();
    }

    // code for toggling read or unread books
    else if (event.target.classList.contains("toggle-button")){
        const bookItem = event.target.closest(".book-content");
        const bookItemID = bookItem.id.trim().toLowerCase();

        const bookIndex = myLibrary.findIndex(book =>{
            return String(book.ID).trim().toLowerCase() === bookItemID;
        });

        // change the status of the book
        myLibrary[bookIndex].read = !(myLibrary[bookIndex].read);

        if (myLibrary[bookIndex].read){
            event.target.textContent = "Read";
        }
        else{
            event.target.textContent = "Not Read";
        }

        // update the stats
        updateBook();
    }
});

// functions for transition effect