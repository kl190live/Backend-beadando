import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from "./booksnest.controller";
import { BooksService } from './books.service';
import { Book } from './books';

describe('BooksController', () => {
  let controller: BooksController;
  let mockBooksService: Partial<BooksService>;

  beforeEach(async () => {
    mockBooksService = {
      getAllBooks: jest.fn(),
      getBookById: jest.fn(),
      addBook: jest.fn(),
      deleteBook: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [{ provide: BooksService, useValue: mockBooksService }],
    }).compile();

    controller = module.get<BooksController>(BooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getAllBooks', () => {
    it('should return array of books', () => {
      const books: Book[] = [
        { id: '1', title: 'Book 1', author: 'Author 1', year: 2000 },
        { id: '2', title: 'Book 2', author: 'Author 2', year: 2005 },
      ];
      (mockBooksService.getAllBooks as jest.Mock).mockReturnValue(books);

      expect(controller.getAllBooks()).toEqual(books);
      expect(mockBooksService.getAllBooks).toHaveBeenCalled();
    });
  });

  describe('getBookById', () => {
    it('should return a book with the given id', () => {
      const book: Book = { id: '1', title: 'Book 1', author: 'Author 1', year: 2000 };
      (mockBooksService.getBookById as jest.Mock).mockReturnValue(book);

      expect(controller.getBookById('1')).toEqual(book);
      expect(mockBooksService.getBookById).toHaveBeenCalledWith('1');
    });
  });

  describe('addBook', () => {
    it('should add a new book', () => {
      const newBookData: Book = { id:'3', title: 'New Book', author: 'New Author', year: 2022 };
      const newBook: Book = { id: '3', ...newBookData };
      (mockBooksService.addBook as jest.Mock).mockReturnValue(newBook);

      expect(controller.addBook(newBookData)).toEqual(newBook);
      expect(mockBooksService.addBook).toHaveBeenCalledWith(newBookData);
    });
  });

  describe('deleteBook', () => {
    it('should delete the book with the given id', () => {
      controller.deleteBook('1');

      expect(mockBooksService.deleteBook).toHaveBeenCalledWith('1');
    });
  });
});
