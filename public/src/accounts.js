// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id)
  return found
}

function sortAccountsByLastName(accounts) {
  let result = accounts.sort((accountA, accountB) => {
      if (accountA.name.last > accountB.name.last) {
          return 1;
      }
      if (accountA.name.last < accountB.name.last) {
          return -1;
      }
      return 0;
  });
  return result;
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0;
  for (let book of books) {
      book.borrows.forEach((borrows) => {
          if (borrows.id === account.id);
          result ++
      })
      return result
  }
}

function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = [];

  books.forEach((book) => {
      let bookBorrows = book.borrows;

      bookBorrows.forEach((borrow) => {
          if (borrow.id === account.id && !borrow.returned) {
              borrowedBooks.push(book);
          }
      });
  });
  let result = borrowedBooks.map((book) => {
      return {
          ...book,
          author: getAuthor(book, authors)
      };
  });
  return result;
}
// Helper function to return author object
function getAuthor(book, authors) {
  const author = authors.find((author) => author.id === book.authorId);
  return author;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
