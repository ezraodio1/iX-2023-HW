export class Book {
  constructor(title, author, isbn, id) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.id = id;
  }

  static fromJSON(json) {
    return new Book(json.title, json.author, json.isbn, json.id);
  }
}
