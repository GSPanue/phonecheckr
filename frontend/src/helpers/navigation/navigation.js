/**
 * Obtains the search query by parsing the URL query string.
 *
 * @param {object} location - The current location.
 * @param {object} search - The URL query string.
 *
 * @returns {string}
 */
const getQuery = ({ search }) => (
  new URLSearchParams(search).get('q')
);

/**
 * Obtains the product id from the pathname.
 *
 * @param {object} location - The current location.
 *
 * @returns {string}
 */
const getProduct = ({ pathname }) => (
  pathname.replace('/product/', '')
);

export {
  getQuery,
  getProduct
};
