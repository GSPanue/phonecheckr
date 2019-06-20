/**
 * Navigates to the product screen.
 *
 * @param {string} name - The product name.
 * @param {object} history - The router history object.
 *
 * @returns {void}
 */
const navigate = (name, { history }) => {
  const productName = name.replace(/\W+/g, '-').toLowerCase();

  history.push({
    pathname: `/product/${productName}`
  });
};

export {
  navigate
};
