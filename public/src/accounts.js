function findAccountById(accounts, id) {
  // YOUR SOLUTION HERE
  // Hint: You can use the [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method here.
  let matchAccount = accounts.find((account) => account.id === id);
  return matchAccount;
}

function sortAccountsByLastName(accounts) {
  // YOUR SOLUTION HERE
  // Hint: You can use the [`sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method here.
  accounts.sort((a, b) => {
    // Extract the last names from the account objects
    const lastNameA = a.name.last.toLowerCase();
    const lastNameB = b.name.last.toLowerCase();

    // Compare the last names and return the result of the comparison
    if (lastNameA < lastNameB) {
      return -1;
    } else if (lastNameA > lastNameB) {
      return 1;
    } else {
      return 0;
    }
  });

  // Return the sorted accounts array
  return accounts;
}

function getAccountFullNames(accounts) {
  // YOUR SOLUTION HERE
  // Hint: You can use the [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method here.
  const fullNames = accounts.map((account) => {
    const firstName = account.name.first;
    const lastName = account.name.last;
    return `${firstName} ${lastName}`;
  });
  return fullNames;
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
