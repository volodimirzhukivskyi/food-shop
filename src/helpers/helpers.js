export const splitPrice = (value) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
