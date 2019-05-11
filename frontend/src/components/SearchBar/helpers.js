/**
 * Indicates whether the results screen should be navigated to.
 *
 * @param {string} - The query.
 *
 * @returns {boolean}
 */
const shouldNavigateToResults = (query) => (
  query.length > 0
);

/**
 * Navigates to the results screen when a non-empty query has been submitted.
 *
 * @returns {void}
 */
const navigate = ({
  value,
  history,
  revokeSubmitQuery,
  clearQuery
}) => {
  const query = value.trim();
  const shouldNavigate = shouldNavigateToResults(query);

  if (shouldNavigate) {
    history.push({
      pathname: '/results',
      search: `q=${query}`
    });

    clearQuery();
  }
  else {
    revokeSubmitQuery();
  }
};

export {
  shouldNavigateToResults,
  navigate
};
