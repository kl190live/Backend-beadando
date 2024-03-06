import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksnestController } from './booksnest/booksnest.controller';
import { BooksService } from './booksnest/books.service';
import { BooksModule } from './booksnest/books.module';

@Module({
  imports: [BooksModule],
  controllers: [AppController, BooksnestController],
  providers: [AppService, BooksService],
})
export class AppModule {}
