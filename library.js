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