// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
 let counter = 0; 
 for (i=0; i<accounts.length; i++){
counter ++
 }
 return counter;
}

function getBooksBorrowedCount(books) {
  let counter = 0; 
  for (let i=0; i < books.length; i++){
   
    if(books[i].borrows[0].returned === false){
        counter +=1;
    }
  }  
  return counter;

}


function getMostCommonGenres(books) {
//helper function
  function topFive(array) { //find top 5 of an array
    let result = array
      .sort((countA, countB) => (countA.count < countB.count ? 1 : -1))
      .slice(0, 5);
    return result;
    }

  const commonGenres = [];
  for (let book of books) {
  const genre = commonGenres.find(
  (currentGenre) => currentGenre.name === book.genre );
  if (genre) {
  genre.count++;
  } else {
  commonGenres.push({ name: book.genre, count: 1 });
    }
  }
  return topFive(commonGenres); 
}

function getMostPopularBooks(books) {
    const result = books.map((book) => {
      const popularity = { 
        name: book.title,
        count: book.borrows.length,
      };
      return popularity;
    });
    return result.sort((titleA, titleB) => titleB.count - titleA.count).slice(0, 5)
  }


function getMostPopularAuthors(books, authors) {
  topAuthors = []; 
  authors.forEach((author) => { 
   const returnAuthor = { 
              name: `${author.name.first} ${author.name.last}`, 
              count: 0 
                        };
   books.forEach((book) => {
    if (book.authorId == author.id)
    return returnAuthor.count = book.borrows.length 
    });
   return topAuthors.push(returnAuthor)
    });
  
  return topAuthors.sort((authorA, authorB) => authorB.count -authorA.count).slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};