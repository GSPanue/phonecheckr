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

/**
 * Prepares the product table data.
 *
 * @param {array} data - The data.
 *
 * @returns {object}
 */
const prepareProductTableData = (data) => {
  const newData = {};

  data.forEach((product, index) => {
    const {
      brands: { name: brand },
      models,
      suppliers: { name: supplier },
      price
    } = product;
    const { name: model, colours: { name: colour }, storage_capacities: { size } } = models;

    const name = `${brand} ${model}`;

    newData[index] = {
      supplier,
      name,
      colour,
      size,
      price
    };
  });

  return (
    Object.keys(newData).map((key) => (
      newData[key]
    ))
  );
};

export {
  prepareResultsTableData,
  prepareProductTableData
};
