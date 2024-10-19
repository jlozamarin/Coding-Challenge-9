
// Task 1: Create a book class
class Book {
    constructor(title, author, ISBN, isAvailable = true) { //default value for isAvailable is true
        this.title = title;  // identifies the title of the book
        this.author = author; // identifies the author of the book
        this.ISBN = ISBN; // identifies the number of the book
        this._isAvailable = isAvailable; // identifies the availability of the book
    }
    getDetails() {
        return `${this.title} by ${this.author} (ISBN: ${this.ISBN})`; // return the book's title, author, and ISBN
    }
    get isAvailable() {
        return this._isAvailable; // availability getter
    }
    set isAvailable(status) {
        this._isAvailable = status; // availability setter
    }
}
let greatGatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", "12071994");
console.log(greatGatsby.getDetails());             
console.log(greatGatsby.isAvailable);                                 
console.log(greatGatsby.isAvailable);

// Task 2: Create a section class
class Section {
    constructor(name) {
        this.name = name; // shows the genre of the section
        this.books = [];  // array to store books in the right genre section
    }
    addBook(book) {
        this.books.push(book); // add a book to the section
    }
    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length; // return the number of available books in the genre section
    }
    listBooks() {
        this.books.forEach(book => {
            console.log(`${book.title} - ${book.isAvailable ? "Available" : "Not Available"}`); // list all books in the genre section
        });
    }
}
let romanceSection = new Section("Romance"); // "The Great Gatsby" book
romanceSection.addBook(greatGatsby); 

let pridePrejudice = new Book("Pride and Prejudice", "Jane Austen", "10161967"); // add "Pride and Prejudice" book
romanceSection.addBook(pridePrejudice);

romanceSectionSection.listBooks(); // lists books in romance genre section
console.log(`Total available books in Romance: ${romanceSection.getAvailableBooks()}`); // shows the total available books in the romance genre section

