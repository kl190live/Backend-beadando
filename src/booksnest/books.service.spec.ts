import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { Book } from './books';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksService],
    }).compile();

    service = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllBooks', () => {
    it('should return array of books', () => {
      const books: Book[] = [
        { id: '1', title: 'Book 1', author: 'Author 1', year: 2000 },
        { id: '2', title: 'Book 2', author: 'Author 2', year: 2005 },
      ];
      expect(service.getAllBooks()).toEqual(books);
    });
  });

  describe('getBookById', () => {
    it('should return a book with the given id', () => {
      const book: Book = { id: '1', title: 'Book 1', author: 'Author 1', year: 2000 };
      expect(service.getBookById('1')).toEqual(book);
    });
  });

  describe('addBook', () => {
    it('should add a new book', () => {
      const newBookData: Book = { id: '3', title: 'New Book', author: 'New Author', year: 2022 };
      const newBook: Book = { ...newBookData };
      expect(service.addBook(newBookData)).toEqual(newBook);
    });
  });

  describe('deleteBook', () => {
    it('should delete the book with the given id', () => {
      service.deleteBook('1');

      const booksAfterDeletion: Book[] = [
        { id: '2', title: 'Book 2', author: 'Author 2', year: 2005 },
      ];
      expect(service.getAllBooks()).toEqual(booksAfterDeletion);
    });
  });
});
