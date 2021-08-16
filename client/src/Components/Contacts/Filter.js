export const ASCENDENTE = "ascendente";
export const DESCENDENTE = "descendente";
export const DEFAULT = "default";
export const getType = (type, array) => {
  switch (type) {
    case ASCENDENTE:
      return array.sort((a, b) => {
        if (a.date_transaction > b.date_transaction) {
          return 1;
        } else {
          return -1;
        }
      });
    case DESCENDENTE:
      return array.sort((a, b) => {
        if (a.date_transaction < b.date_transaction) {
          return 1;
        } else {
          return -1;
        }
      });
    case DEFAULT:
      if (type === DEFAULT) {
        return array;
      }
      break;
    default:
      return array;
  }
};
