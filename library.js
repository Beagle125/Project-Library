// Delcare my library database in an array
const myLibrary = [];

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

function addBookToLibrary(title, author, pages, read){
    let uuid = self.crypto.randomUUID();
    let newBook = new Book(title, author, pages, read, uuid);
    myLibrary.push(newBook);
}

function toggleNav(){
    const sidebar = document.querySelector(".sidebar");
    const button = document.querySelector(".openbtn");
    const main = document.querySelector(".books");

    if (sidebar.style.width === "250px") {
        button.style.width = "5rem";
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
    } 
    else {
        sidebar.style.width = "250px";
        button.style.width = "200px";
        main.style.marginLeft = "250px";
    }
}