import {describe, it, expect, beforeEach} from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of words', () => {
    expect(myBook.getWords()).toBe(undefined);
    myBook.setWords(400);
    expect(myBook.getWords()).toBe(400);
  });

  it('return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350)).toThrow();
  });

  it('check author is Anonimo', () => {
    myBook.setAuthor('');
    expect(myBook.getAuthor()).toBe('Anónimo');
  });

  it('check author is a string', () => {
    expect(()=> myBook.setAuthor(123)).toThrow();
  });

  it('check page param is a number', () => {
    expect(()=> myBook.setPages('1')).toThrow();
  });

  it('check pages not < 1', () => {
    expect(()=> myBook.setPages(0)).toThrow();
  });

  it('check words is a number or undefined', () => {
    expect(()=> myBook.setWords('123')).toThrow();
  });
  it('check words not < 1', () => {
    expect(()=> myBook.setWords(0)).toThrow();
  });
  it('check wordsPerPage return the correct value', () => {
    myBook.setWords(35000);
    expect(myBook.wordsPerPage()).toBe(100);
  });
  it('check wordsPerPage has words',() => {
    expect(()=> myBook.wordsPerPage()).toThrow();
  });
  it('toString()', () => {
    expect(myBook.toString()).toBe('Título: Cuentos de la Selva Autor: Horacio Quiroga Páginas: 350');
    myBook.setWords(1500);
    expect(myBook.toString()).toBe('Título: Cuentos de la Selva Autor: Horacio Quiroga Páginas: 350 Palabras: 1500');
  });

});
