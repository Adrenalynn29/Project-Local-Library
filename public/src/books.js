// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  let found = authors.find((author)=> author.id === id)
  return found 
}

function findBookById(books, id) {
  let found = books.find((book)=> book.id === id)
  return found ;
}

function partitionBooksByBorrowedStatus(books) {
  let result = [];
  const borrowed = books.filter((book) => book.borrows[0].returned === false);
  const returned = books.filter((book) => book.borrows[0].returned === true);
  result.push(borrowed, returned);
  
  return result; 
}//create two arrays in one ;array, sorting books into borrowed and returned

function getBorrowersForBook(book, accounts) {
 let borrowers=[];
 for (let i=0; i < accounts.length; i++){ //loop through accounts
  for (let j = 0; j < book.borrows.length; j++) {  //loop through the book borrows array
    if (book.borrows[j].id === accounts[i].id){ //if book borrows id = account id
   borrowers.push({...accounts[i], returned: book.borrows[0].returned})//add accounts to borrowers array
  // if (borrowers.length > 10) { //if the borrowers array is greater than 10 items
    // borrowers.slice(0,9);//only use the first ten
    }
  }
  }

  return borrowers.splice(0, 10)
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};