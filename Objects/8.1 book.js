// // 1. Create an object that represents a book. It should have
// 4-5 properties that make sense for a book to have.
// 2. Then write a function that has one argument, a book, that
// will return the following description from your book object:
// ‘The book <book name> was written by <author name> in
// the year <publishing year>’

const harryPotter = {
    name   : 'Harry Potter',
    Author :	'J. K. Rowling',
    Publisher :	'Bloomsbury',
    PublishedYear :'1997',
}

function bookInfo (book) {
    
    console.log(`The book ${book.name} was written by ${book.Author} in the year ${book.PublishedYear} `)
}

bookInfo(harryPotter);