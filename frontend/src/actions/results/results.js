import {
  SHOW_PROGRESS_BAR,
  HIDE_PROGRESS_BAR,
  SHOW_RESULTS,
  CLEAR_RESULTS
} from '../../constants';

/**
 * @todo Add param for query
 */
const fetchResults = () => (
  (dispatch, getState) => {
    dispatch({
      type: SHOW_PROGRESS_BAR
    });

    /**
     * @todo Fetch and store results
     * @todo Remove dummy data
     */

    const searchResults = [
      {
        name: 'iPhone 6s',
        price: '901.12',
        stores: '23'
      }
    ];

    setTimeout(() => {
      const { history: { currentLocation } } = getState();

      if (currentLocation === 'results') {
        dispatch({
          type: HIDE_PROGRESS_BAR
        });

        dispatch({
          type: SHOW_RESULTS,
          payload: searchResults
        });
      }
    }, 500);
  });

const clearResults = () => ({
  type: CLEAR_RESULTS
});

export {
  fetchResults,
  clearResults
};
