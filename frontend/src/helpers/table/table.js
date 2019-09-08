/**
 * Prepares the data for a table.
 *
 * @param {array} data - The data.
 *
 * @returns {object}
 */
const prepareTableData = (data) => {
  const newData = {};

  data.forEach((product) => {
    const { brands: { name: brandName }, models: { name: modelName }, price } = product;
    const name = `${brandName} ${modelName}`;

    if (newData[name] === undefined) {
      newData[name] = {
        name,
        price,
        stores: 1
      };
    }
    else {
      newData[name] = {
        ...newData[name],
        ...(price < newData[name].price) && { price },
        stores: newData[name].stores + 1
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
  prepareTableData
};
