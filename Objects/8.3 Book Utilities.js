// // . create 2 book objects with properties: name, author, year.
const harryPotter = {
    name   : 'Harry Potter',
    Author :	'J. K. Rowling',
    PublishedYear : 1997
}

const theHobbit = {
    name   : 'The Hobbit',
    Author : 'J. R. R. Tolkien',
    PublishedYear : 1937
}

const bookUtils = {

    getFirstPublished (book1,book2){
        if(book1.PublishedYear === book2.PublishedYear){
            return [book1, book2]
        }
        else{
        return book1.PublishedYear < book2.PublishedYear ? book1 : book2;
            }
    },
    setNewEdition (book,editYear) {
        
    }   
}
console.log(bookUtils.getFirstPublished(harryPotter,theHobbit));
console.log(bookUtils.setNewEdition(theHobbit,1999));

// 4. add to the bookUtils object a function setNewEdition, that
// receives a book and an edition year and sets a new
// property latestEdition with the edition year, or updates an
// existing one.

// 5. add to the bookUtils object a setLanguage function, that
// receives a book and a language and sets a new property
// language with the languahe, or updates an existing one.
// 6. add to the bookUtils object a setTranslation function, that
// receives a book a language and a translator, and sets a
// new property of translation, which is an object that
// contains the translator and the language.
// 7. add to the bookUtils object a setPublisher function, that
// receives a book a name and location, and sets a new
// property named publisher, which is an object that contains