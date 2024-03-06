import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }

  @Get(':id')
  getBookById(@Param('id') id: string): Book {
    return this.booksService.getBookById(id);
  }

  @Post()
  addBook(@Body() bookData: Book): Book {
    return this.booksService.addBook(bookData);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string): void {
    return this.booksService.deleteBook(id);
  }
}
