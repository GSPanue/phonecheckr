import {
  SHOW_PROGRESS_BAR,
  HIDE_PROGRESS_BAR,
  SHOW_RESULTS,
  HIDE_RESULTS
} from '../../constants';

/**
 * @todo Add param for query
 */
const fetchResults = () => (
  (dispatch) => {
    dispatch({
      type: SHOW_PROGRESS_BAR
    });

    /**
     * @todo Fetch and store results
     * @todo Hide progress bar and show results
     */

    const results = null;

    setTimeout(() => {
      dispatch({
        type: HIDE_PROGRESS_BAR
      });

      dispatch({
        type: SHOW_RESULTS,
        payload: results
      });
    }, 500);
  });

const hideResults = () => ({
  type: HIDE_RESULTS
});

export {
  fetchResults,
  hideResults
};
