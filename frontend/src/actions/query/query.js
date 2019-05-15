import {
  UPDATE_QUERY,
  SUBMIT_QUERY,
  REVOKE_SUBMIT_QUERY,
  CLEAR_QUERY,
  HIDE_RESULTS
} from '../../constants';

const updateQuery = (query) => ({
  type: UPDATE_QUERY,
  payload: query
});

const submitQuery = () => ({
  type: SUBMIT_QUERY
});

const revokeSubmitQuery = () => ({
  type: REVOKE_SUBMIT_QUERY
});

const clearQuery = () => (
  (dispatch) => {
    dispatch({
      type: CLEAR_QUERY
    });

    dispatch({
      type: HIDE_RESULTS
    });
  }
);

export {
  updateQuery,
  submitQuery,
  revokeSubmitQuery,
  clearQuery
};
