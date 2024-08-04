//WORKING WITH ARRAYS AND OBJECTS

//Creating the library array
let library = [];


// Adding 4 books to the library
library.push({title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', yearPublished: 1925, available: true});

library.push({title: 'To Kill a Mockingbird', author: 'Harper Lee', yearPublished: 1960, available: true});

library.push({title: '1984', author: 'George Orwell', yearPublished: 1949, available: false});

library.push({title: 'Pride and Prejudice', author: 'Jane Austen', yearPublished: 1813, available: true});
console.log('Starting contents of the library: \n', library, '\n'); 
//...Library currently contains just the 4 books


//Updating the availability of a book
library[2].available = true;
//console.log(library)
//...The book at index 2 (1984) is now available for borrowing


//Removing a book
library.splice(3, 1);
//console.log(library)
//...The library does not contain the Pride and Prejudice book located at index 3


//Checking if a book is in the library based on its title
console.log("Is the book title 'The Great Gatsby' present?: \n", library.some(book => book.title.includes("The Great Gatsby")), '\n');
//...It says 'true' because the book with the title 'The Great Gatsby' is in the library


//Borrowing a book
library[0].available = false;
//console.log(library)
//...The first book availability is set to false as it is about to be borrowed
const borrowedBook = library.shift()
console.log('Borrowed book: \n', borrowedBook, '\n');
//...This first book has now been borrowed and it is now removed from the library


//Add a new book to the start of the array
library.unshift({title: 'The Catcher in the Rye', author: 'J.D. Salinger', yearPublished: 1951, available: true});
console.log('Current contents of the library:\n', library, '\n')
//...The library now has a new book to be added to the beginning of the array


//Getting a list of all book titles
const bookTitles = library.map(book => book.title);
//...returns the list of book titles
const stringedBookTitles = bookTitles.join(', ')
console.log('Stringed Book Titles:\n', stringedBookTitles, '\n')
//...The books titles are joined as a string separated by commas


//Creating a new library section
const newArrivals = library.slice(-2)
console.log('New Library Section: \n', newArrivals)
//...The slice method does not mutate the library, it just takes some or all of its contents and creates a new library section with the last two books.