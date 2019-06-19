/**
 * Creates a string to denote 100 or more results.
 *
 * @param {array} searchResults - The search results.
 *
 * @returns {string|number}
 */
const getNumberOfResults = (searchResults) => (
  (searchResults.length >= 100) ? '100+' : searchResults
);

export {
  getNumberOfResults
};
