/**
 * Returns the name of the current route.
 *
 * @param {string} pathname - The current pathname.
 *
 * @returns {string}
 */
const getCurrentRoute = (pathname) => {
  const isRoot = (pathname === '/');

  if (isRoot) {
    return (
      'search'
    );
  }

  return (
    pathname.replace(/^\/([^/]*).*$/, '$1').toLowerCase()
  );
};

export {
  getCurrentRoute
};
