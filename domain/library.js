import Book from './book.js';

class Library {

  #name;
  #inventory = [];
  #totalWords;
  #wordCount;

  constructor(name) {
    this.setName(name);
  }

  setName(name) {
    if (typeof (name) !== "string") {
      throw new Error()
    }
    name = name.trim();
    if (name.length === 0) {
      throw new Error()
    }
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  addBook(title, author, pages, words) {
    const newBook = new Book(title, author, pages, words);
    this.#inventory.push(newBook);
  }

  getInventory() {
    return this.#inventory;
  }

  totalBooks() {
    return this.#inventory.length;
  }

  totalWords() {
    let total = 0;
    for(let i = 0; i < this.#inventory.length; i++){
      if(this.#inventory[i].getWords() != undefined){
        total += this.#inventory[i].getWords();
      }
    }
    return total;
  }
}

export default Library;
