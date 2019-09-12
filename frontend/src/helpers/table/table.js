/**
 * Prepares the results table data.
 *
 * @param {array} data - The data.
 *
 * @returns {object}
 */
const prepareResultsTableData = (data) => {
  const newData = {};

  data.forEach((product) => {
    const {
      pages: { name: page },
      brands: { name: brand },
      models: { name: model },
      price
    } = product;

    const name = `${brand} ${model}`;

    if (newData[name] === undefined) {
      newData[name] = {
        name,
        page,
        price,
        deals: 1
      };
    }
    else {
      newData[name] = {
        ...newData[name],
        ...(price < newData[name].price) && { price },
        deals: newData[name].deals + 1
      };
    }
  });

  return (
    Object.keys(newData).map((key) => (
      newData[key]
    ))
  );
};

export {
  prepareResultsTableData
};
