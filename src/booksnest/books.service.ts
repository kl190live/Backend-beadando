import { Injectable } from '@nestjs/common';
import { Book } from "./books";
import { books} from "./BooksData";

@Injectable()
export class BooksService {
  private books: Book[] = books;

  getAllBooks(): Book[] {
    return this.books;
  }

  getBookById(id: string): Book {
    return this.books.find(book => book.id === id);
  }

  addBook(bookData: Book): Book {
    const id = Date.now().toString();
    const book = { id, ...bookData };
    this.books.push(book);
    return book;
  }

  deleteBook(id: string): void {
    this.books = this.books.filter(book => book.id !== id);
  }
}
