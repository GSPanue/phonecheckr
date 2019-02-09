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

export {
  getQuery
};
