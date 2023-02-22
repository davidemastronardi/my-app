export const isHalloween = () => {
  const date = new Date();
  var today = date.getTime(); // 1501653935994
  var from = new Date(`10/26/${date.getFullYear()}`).getTime(); // gives 1486492200000
  var to = new Date(`10/01/${date.getFullYear()}`).getTime();

  return today >= from && today <= to;
};
