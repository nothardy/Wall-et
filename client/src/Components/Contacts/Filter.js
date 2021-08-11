export const ASCENDENTE = "ascendente";
export const DESCENDENTE = "descendente";

export const getType = (type, array) => {
  switch (type) {
    case ASCENDENTE:
      return array.sort((a, b) => {
        if (a.transaction_date > b.transaction_date) {
          return 1;
        } else {
          return -1;
        }
      });
    case DESCENDENTE:
      return array.sort((a, b) => {
        if (a.transaction_date < b.transaction_date) {
          return 1;
        } else {
          return -1;
        }
      });
    default:
      return array;
  }
};
