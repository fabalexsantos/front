function getTotalPages(books) {
  return books.reduce((accumulator, current) => {
    return accumulator + current.pages;
  }, 0);
}

export { getTotalPages };
