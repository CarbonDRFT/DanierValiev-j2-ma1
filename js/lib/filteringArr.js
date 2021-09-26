export const filteringArr = (array, filterString) => {
  return array.filter((arrayElement) => {
    return arrayElement.price <= parseInt(filterString);
  });
};
