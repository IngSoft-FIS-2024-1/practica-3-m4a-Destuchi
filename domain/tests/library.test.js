import { describe, it, expect, beforeEach } from '@jest/globals';
import Library from '../library.js';
import Book from '../book.js';

describe('Library', () => {
  let myLibrary;

  beforeEach(() => {
    myLibrary = new Library('Biblioteca');
  });

  it('add a book to the library', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120, 500);
    const aBook = myLibrary.getInventory()[myLibrary.getInventory().length - 1];
    expect(aBook).toBeInstanceOf(Book);
    expect(aBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the total number of books', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120,undefined);
    myLibrary.addBook('El Hombre que Calculaba', 'Malba Tahan', 286, undefined);
    expect(myLibrary.totalBooks()).toBe(2);
  });

  it('set the name of the library', () => {
    myLibrary.setName('Montevideo');
    expect(myLibrary.getName()).toBe('Montevideo');
  });

  it('throw an error when setting an invalid name', () => {
    expect(() => myLibrary.setName(123)).toThrow();
  });
  it('throw an error when setting an empty name', () => {
    expect(()=> myLibrary.setName('')).toThrow();
  });
  it('checks totalWords works', () => {
    myLibrary.addBook('Cuentos de la Selva', 'Horacio Quiroga', 120, 500);
    myLibrary.addBook('Cuentos de la Selva 2', 'Horacio Quiroga', 120, 500);
    myLibrary.addBook('Cuentos de la Selva 2', 'Horacio Quiroga', 120, undefined);
    expect(myLibrary.totalWords()).toBe(1000);
    
  });
});