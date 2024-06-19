class Book {

  #title;
  #author;
  #pages;
  #words;
  
  constructor(title, author, pages, words = undefined) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setPages(pages);
    this.setWords(words);
  }

  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  getPages() {
    return this.#pages;
  }

  getWords() {
    return this.#words;
  }

  setTitle(title) {
    if (typeof (title) !== 'string') {
      throw new Error();
    }
    title = title.trim();
    if (title.length === 0) {
      throw new Error();
    }
    this.#title = title;
  }

  setAuthor(author) {
    if (typeof (author) !== 'string') {
      throw new Error()
    }
    author = author.trim();
    if (author.length === 0) {
      author = "Anónimo";
    }
    this.#author = author;
  }

  setPages(pages) {
    if (typeof (pages) !== 'number' || isNaN(pages)) {
      throw new Error()
    }
    if (pages < 1) {
      throw new Error()
    }
    pages = Math.trunc(pages);
    this.#pages = pages;
  }

  setWords(words) {
    if(words == undefined){
      this.#words = undefined;
    } else if (typeof (words) !== 'number' || isNaN(words)) {
      throw new Error()
    }
    if (words < 1) {
      throw new Error()
    }
    //words = Math.trunc(words); //El codigo explota
    this.#words = words;
  
  }

  wordsPerPage() {
    if(this.#words == undefined) {
      throw new Error();
    }
    return this.#words / this.#pages;
    
  }

  toString() {
    if (this.#words == undefined) return `Título: ${this.#title} Autor: ${this.#author} Páginas: ${this.#pages}`;
    return `Título: ${this.#title} Autor: ${this.#author} Páginas: ${this.#pages} Palabras: ${this.#words}`;
  }
}

export default Book;
