const orderByRecent = products => {
  products.sort((a, b) => {
    if (a._id >= b._id) return 1;
    else return -1;
  });
  return products;
};

const orderByHighest = products => {
  products.sort((a, b) => {
    if (a.cost >= b.cost) return -1;
    else return 1;
  });
  return products;
};

const orderByLowest = products => {
  products.sort((a, b) => {
    if (a.cost >= b.cost) return 1;
    else return -1;
  });
  return products;
};

const filterByTerm = (products, term) => {
  term = term.toLowerCase();
  return products.filter(x => x.name.toLowerCase().includes(term));
};

const filters = { filterByTerm, orderByHighest, orderByLowest, orderByRecent };

export default filters;
