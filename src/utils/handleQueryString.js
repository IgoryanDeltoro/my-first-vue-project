export const handleQueryString = queries => {
  let total = {};

  for (let queryStr in queries) {
    if (queries[queryStr]) {
      total = { ...total, [queryStr]: queries[queryStr] };
    }
  }
  return total;
};
