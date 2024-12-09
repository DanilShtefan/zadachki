// Объектно-ориентированный JavaScript.

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.status = true;
  }
}

class Library {
  books = [
    { title: "Book1", author: "Author1", isbn: "1234567890", status: true },
  ];
  constructor() {
    // Ваш код здесь
  }
  addBook(...args) {
    args.forEach((newBook) => {
      const exists = this.books.some((book) => book.title === newBook.title);
      if (!exists) {
        this.books.push(newBook);
      }
    }); // проходим по всем добавленным книгам, проверяим есть ли книга с таким названием, если нет , то добавляем
  }
  borrowBook(isbn) {
    this.books.forEach((el) => {
      el.isbn == isbn ? (el.status = false) : "";
    });
  }
  returnBook(isbn) {
    this.books.forEach((el) => {
      el.isbn == isbn ? (el.status = true) : "";
    });
  }
  listAvailableBooks() {
    return this.books.filter((el) => el.status != false).map((el) => el.title);
  }
}

const book1 = new Book("Book1", "Author1", "1234567890");
const book2 = new Book("Book2", "Author2", "1234567891");
const book3 = new Book("Book3", "Author3", "1234567892");

const library = new Library();

library.addBook(book1, book2, book3);
library.borrowBook("1234567892");
library.borrowBook("1234567891");
library.returnBook("1234567892");

console.log(`Доступные книги - ${library.listAvailableBooks()}`);
