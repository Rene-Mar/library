function findAuthorById(authors, id) {
  // YOUR SOLUTION HERE
 const found = authors.find(element => element.id === id);
 return found;
}


function findBookById(books, id) { 
 // YOUR SOLUTION HERE
 let results = books.find( book => book.id === id)
 return results;
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function partitionBooksByBorrowedStatus(books) {
 return books.reduce(
   (acc, book) => {
     const [borrowed, returned] = acc;
     const recent = book.borrows[0];
     if (recent.returned) {
       returned.push(book);
     } else {
       borrowed.push(book);
     }

     return acc;
   },
   [[], []]
 );
}

function getBorrowersForBook(book, accounts) {
 const accountsById = accounts.reduce((acc, account) => {
   acc[account.id] = account;
   return acc;
 }, {});

 return book.borrows
   .map(({ id, returned }) => ({
     ...accountsById[id],
     returned,
   }))
   .slice(0, 10);
}

module.exports = {
 findAuthorById,
 findBookById,
 partitionBooksByBorrowedStatus,
 getBorrowersForBook,
};
