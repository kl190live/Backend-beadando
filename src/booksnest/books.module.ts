import { Module } from '@nestjs/common';
import { BooksController } from "./booksnest.controller";
import { BooksService } from "./books.service";

@Module({
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
