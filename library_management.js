
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


