import axios from 'axios';

import {
  SHOW_PROGRESS_BAR,
  HIDE_PROGRESS_BAR,
  SHOW_RESULTS,
  CLEAR_RESULTS
} from '../../constants';

const fetchResults = (query) => (
  (dispatch, getState) => {
    dispatch({
      type: SHOW_PROGRESS_BAR
    });

    axios.get('api/v1/search', {
      params: {
        query
      }
    }).then((res) => {
      const { data: { results } } = res;
      const { history: { currentLocation } } = getState();

      if (currentLocation === 'results') {
        dispatch({
          type: HIDE_PROGRESS_BAR
        });

        dispatch({
          type: SHOW_RESULTS,
          payload: results
        });
      }
    }).catch(() => {
      dispatch({
        type: HIDE_PROGRESS_BAR
      });

      dispatch({
        type: SHOW_RESULTS,
        payload: null
      });
    });
  });

const clearResults = () => ({
  type: CLEAR_RESULTS
});

export {
  fetchResults,
  clearResults
};
