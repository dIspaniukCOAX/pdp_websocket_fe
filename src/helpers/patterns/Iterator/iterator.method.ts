interface Iterator<T> {
  hasNext(): boolean;
  next(): IteratorResult<T>;
}

class Book {
  //eslint-disable-next-line no-useless-constructor
  constructor(public name: string, public author: string) {}
}

class BookIterator implements Iterator<Book> {
  private index = 0;

  //eslint-disable-next-line no-useless-constructor
  constructor(private bookCollection: BookCollection) {}

  hasNext(): boolean {
    return this.index < this.bookCollection.getBooks().length;
  }

  next(): IteratorResult<Book> {
    if (this.hasNext()) {
      return { value: this.bookCollection.getBooks()[this.index++], done: false };
    }
    throw new Error("No more elements");
  }
}

class BookCollection {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  createIterator(): Iterator<Book> {
    return new BookIterator(this);
  }

  getBooks(): Book[] {
    return this.books;
  }
}

export const getBookIterations = () => {
  const bookCollection = new BookCollection();
  bookCollection.addBook(new Book("Book 1", "Author 1"));
  bookCollection.addBook(new Book("Book 2", "Author 2"));
  bookCollection.addBook(new Book("Book 3", "Author 3"));

  const iterator = bookCollection.createIterator();

  while (iterator.hasNext()) {
    const book = iterator.next().value;
    console.log(`Book: ${book.name}, Author: ${book.author}`);
  }
};
