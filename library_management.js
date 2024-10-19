
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

romanceSection.listBooks(); // lists books in romance genre section

// Task 5: Handle books borrowing and returning
calculateTotalBooksAvailable() {
    return this.books.filter(book => book.isAvailable).length;
console.log(`Total available books in Romance: ${romanceSection.calculateTotalBooksAvailable()}`); // shows the total available books in the romance genre section

// Task 3: Create a patron class
class Patron {
    constructor(name) {
        this.name = name; 
        this.borrowedBooks = []; 
    }
    borrowBook(book) { //allows patron to borrow a book
        if (book.isAvailable) {
            this.borrowedBooks.push(book);
            book.isAvailable = true;    
            console.log(`${this.name} has "${book.title}".`);
        } else {
            console.log(`"${book.title}" is not available.`);
        }
    }
    returnBook(book) { //allows patron to return a book
        let bookIndex = this.borrowedBooks.indexOf(book);
        if (bookIndex !== -1) {
            this.borrowedBooks.splice(bookIndex, 1);  
            book.isAvailable = true;                 
            console.log(`${this.name} returned "${book.title}".`);
        } else {
            console.log(`${this.name} does not have "${book.title}".`);
        }
    }
}
let briDeaubler = new Patron("Brianna Deaubler"); // patron named Brianna Deaubler
let jesChatman = new Patron("Jesenia Chatman"); // patron named Jesenia Chatman

briDeaubler.borrowBook(pridePrejudice);  // Brianna has "Pride and Prejudice"
briDeaubler.returnBook(pridePrejudice);  // Brianna returns "Pride and Prejudice"

jesChatman.borrowBook(greatGatsby);  // Jesenia has "The Great Gatsby"
jesChatman.returnBook(greatGatsby);  // Jesenia returns "The Great Gatsby"

//Task 4: Create a vippatron class that inherits from patron
class VIPPatron extends Patron {
    constructor(name, priority = true) {
        super(name); 
        this.priority = priority;
    }
    borrowBook(book) {
        if (book.isAvailable) {
            this.borrowedBooks.push(book);
            book.isAvailable = false; 
            console.log(`VIP ${this.name} has "${book.title}".`);
        } else {
            console.log(`VIP ${this.name} does not have "${book.title}".`);
        }
    }
}
let isaMoore = new VIPPatron("Isabella Moore"); // VIP patron named Isabella Moore
isaMoore.borrowBook(greatGatsby);  // Isabella (VIP Patron) has "The Great Gatsby"
